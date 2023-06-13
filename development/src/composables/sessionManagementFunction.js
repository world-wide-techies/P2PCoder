import { generatePeerIdCharacter } from "./peerIdGenerator";
import { toast } from "react-toastify";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { firebaseConfig } from "./firebaseConfig/config";

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
  return currentUser.uid;
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

function checkUserAuthentication() {
  const currentUser = firebase.auth.currentUser;
  if (!currentUser) {
    throw new Error("User is not authenticated");
  }
}

function validatePeerId(sessionId, sessionDataFirebase) {
  if (!sessionDataFirebase || sessionId !== sessionDataFirebase.sessionId) {
    toast.error("Invalid session ID");
  }
}

function checkSessionCapacity(sessionDataFirebase) {
  if (sessionDataFirebase.users && sessionDataFirebase.users.length >= 2) {
    toast.error("Session has reached maximum number of users");
  }
}

function joinPeerSession(sessionId) {
  checkUserAuthentication();

  const sessionDataFirebase = getSessionDataFirebase();

  validatePeerId(sessionId, sessionDataFirebase);
  checkSessionCapacity(sessionDataFirebase);

  const peerId = generatePeerIdCharacter();
  const userJoinTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const currentUser = {
    peerId,
    userJoinTime,
  };

  if (!sessionDataFirebase.users) {
    sessionDataFirebase.users = [];
  }

  sessionDataFirebase.users.push(currentUser);

  storeSessionDataFirebase(sessionDataFirebase);

  initializeTimer(userJoinTime);
}

function endSession() {
  const userId = getCurrentUserId();
  firebase.database().ref(`sessions/${userId}`).remove();
  localStorage.removeItem("sessionData");
}

export {
  checkUserAuthentication,
  storeSessionDataLocally,
  getSessionDataLocally,
  storeSessionDataFirebase,
  getSessionDataFirebase,
  initializeTimer,
  joinPeerSession,
  endSession,
};
