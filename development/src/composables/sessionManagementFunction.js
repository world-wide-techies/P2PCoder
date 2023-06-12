import { generatePeerIdCharacter } from "./peerIdGenerator";
import { toast } from "react-toastify";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { firebaseConfig } from "./firebaseConfig/config";
import PeerSession from "@/components/PeerOverlay_comp";

firebase.initializeApp(firebaseConfig);

// Storing session data with local storage
function storeSessionDataLocally(sessionData) {
  localStorage.setItem("sessionData", JSON.stringify(sessionData));
}

function getSessionDataLocally() {
  const sessionData = JSON.parse(localStorage.getItem("sessionData"));
  return sessionData;
}

// Storing session data with firebase
function storeSessionDataFirebase(sessionData) {
  const userId = getCurrentUserId();
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

const copyPeerId = () => {
  navigator.clipboard.writeText(peerId);
};

const currentUser = firebase.auth.currentUser;
if (!currentUser) {
  throw new Error("User is not authenticated");
}

let sessionDataLocally = getSessionDataLocally();
if (!sessionDataLocally) {
  sessionDataLocally = {};
  storeSessionDataLocally(sessionDataLocally);
}

let sessionDataFirebase = await getSessionDataFirebase();
if (!sessionDataFirebase) {
  sessionDataFirebase = {};
  storeSessionDataFirebase(sessionDataFirebase);
}

let sessionName;
let programmingLanguage;

let peerId = sessionDataFirebase.peerId;
if (!peerId) {
  peerId = generatePeerIdCharacter();
  sessionDataFirebase.peerId = peerId;
  storeSessionDataFirebase(sessionDataFirebase);
}

const userIndex =
  sessionDataFirebase.users &&
  sessionDataFirebase.users.findIndex((user) => user.peerId === peerId);
if (
  userIndex === -1 &&
  (!sessionDataFirebase.users || sessionDataFirebase.users.length < 2)
) {
  PeerSession();
  const newSessionData = {
    sessionName,
    programmingLanguage,
    peerId,
    userJoinTime: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };

  sessionDataFirebase.sessionName = sessionName;
  sessionDataFirebase.programmingLanguage = programmingLanguage;
  sessionDataFirebase.users = [newSessionData];

  storeSessionDataFirebase(sessionDataFirebase);
} else if (userIndex !== -1) {
  const currentUserData = sessionDataFirebase.users[userIndex];
  const storedJoinTime = currentUserData.userJoinTime;
  peerId = currentUserData.peerId;
  initializeTimer(storedJoinTime);
} else {
  toast.error("Invalid Session ID");
}

// use case logic when users decide to change programming language or end session before timeout
function endSession() {
  const userId = getCurrentUserId();
  firebase.database().ref(`sessions/${userId}`).remove();
  localStorage.removeItem("sessionData");
}

export {
  sessionName,
  programmingLanguage,
  storeSessionDataLocally,
  getSessionDataLocally,
  storeSessionDataFirebase,
  getSessionDataFirebase,
  copyPeerId,
  initializeTimer,
};
