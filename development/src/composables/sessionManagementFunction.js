import { generatePeerIdCharacter } from "./peerIdGenerator";
import { toast } from "react-toastify";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { firebaseConfig } from "./firebaseConfig/config";

firebase.initializeApp(firebaseConfig);

// Storing session data with local storage
function storeSessionDataLocally(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function getSessionDataLocally() {
  const users = JSON.parse(localStorage.getItem("users"));
  return users;
}

// Storing session data with firebase
function storeSessionDataFirebase(users, peerId) {
  const userId = getCurrentUserId();
  const sessionData = { users, peerId };
  firebase.database().ref(`sessions/${userId}`).set(sessionData);
}

async function getSessionDataFirebase() {
  const userId = getCurrentUserId();
  const snapshot = await firebase
    .database()
    .ref(`sessions/${userId}`)
    .once("value");
  return snapshot.val();
}

function getCurrentUserId() {
  const currentUser = firebase.auth().currentUser;
  if (!currentUser) {
    throw new Error("User is not authenticated");
  }
  return currentUser.uId();
}

function initializeTimer(userJoinTime) {
  const timer = setInterval(() => {
    const currentTime = new Date();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();

    const [joinMinutes, joinSeconds] = userJoinTime.split(":").map(Number);

    const timeDifference =
      currentMinutes * 60 + currentSeconds - (joinMinutes * 60 + joinSeconds);

    if (timeDifference >= 59 * 60 + 59) {
      clearInterval(timer);
      endSession();
    }
  }, 1000);
}

let peerId = generatePeerIdCharacter();

const copyPeerId = () => {
  navigator.clipboard.writeText(peerId);
};

const currentUser = firebase.auth.currentUser;
if (!currentUser) {
  throw new Error("User is not authenticated");
}

let sessionDataLocally = getSessionDataLocally();
if (!sessionDataLocally) {
  sessionDataLocally = [];
  storeSessionDataLocally(sessionDataLocally);
}

let sessionDataFirebase = await getSessionDataFirebase();
if (!sessionDataFirebase) {
  sessionDataFirebase = { users: [], peerId };
  storeSessionDataFirebase(
    sessionDataFirebase.users,
    sessionDataFirebase.peerId
  );
} else {
  peerId = sessionDataFirebase.peerId;
}

const userIndex = sessionDataFirebase.users.findIndex(
  (user) => user.peerId === peerId
);
if (userIndex === -1 && sessionDataFirebase.users.length < 2) {
  const newSessionData = {
    peerId,
    userJoinTime: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
  sessionDataFirebase.users.push(newSessionData);
  storeSessionDataFirebase(sessionDataFirebase.users, peerId);
} else if (userIndex !== -1) {
  const currentUserData = sessionDataFirebase.users[userIndex];
  const storedJoinTime = currentUserData.userJoinTime;
  initializeTimer(storedJoinTime);
} else {
  toast.error("Invalid Session ID");
}

// use case logic when users decide to change programming language or end session before timeout
function endSession() {
  const userId = getCurrentUserId();
  firebase.database().ref(`sessions/${userId}`).remove();
  localStorage.removeItem("users");
}

export {
  storeSessionDataLocally,
  getSessionDataLocally,
  storeSessionDataFirebase,
  getSessionDataFirebase,
  copyPeerId,
  initializeTimer,
};
