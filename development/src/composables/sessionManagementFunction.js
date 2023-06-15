import { generatePeerIdCharacter } from "./peerIdGenerator";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { firebaseConfig } from "./firebaseConfig/config";
import ErrorModal from "@/components/errorModal_comp";
import { useState } from "react";

// const [errorMessage, setErrorMessage] = useState("");
// const handleClose = () => {
//   setErrorMessage("");
// };
// function storeSessionDataLocally(sessionData) {
//   localStorage.setItem("sessionData", JSON.stringify(sessionData));
// }

// function getSessionDataLocally() {
//   const sessionData = JSON.parse(localStorage.getItem("sessionData"));
//   return sessionData;
// }

// function storeSessionDataFirebase(sessionData) {
//   const userId = getCurrentUserId();
//   firebase.database().ref(`sessions/${userId}`).set(sessionData);
// }

// async function getSessionDataFirebase() {
//   const userId = getCurrentUserId();
//   const snapshot = await firebase
//     .database()
//     .ref(`sessions/${userId}`)
//     .once("value");
//   return snapshot.val();
// }

// function getCurrentUserId() {
//   const currentUser = firebase.auth().currentUser;
//   if (!currentUser) {
//     setErrorMessage("User is not authenticated");
//   }
//   return currentUser.uid;
// }

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

// function validateSessionId(sessionId, sessionDataFirebase) {
//   if (!sessionDataFirebase || sessionId !== sessionDataFirebase.sessionId) {
//     setErrorMessage("Invalid session ID");
//   }
// }

// function checkSessionCapacity(sessionDataFirebase) {
//   if (sessionDataFirebase.users && sessionDataFirebase.users.length >= 2) {
//     setErrorMessage("Session has reached maximum number of users");
//   }
// }

// function joinPeerSession(sessionId) {
//   checkUserAuthentication();

//   const sessionDataFirebase = getSessionDataFirebase();

//   validateSessionId(sessionId, sessionDataFirebase);
//   checkSessionCapacity(sessionDataFirebase);

//   const peerId = generatePeerIdCharacter();
//   const userJoinTime = new Date().toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });
//   const currentUser = {
//     peerId,
//     userJoinTime,
//   };

//   if (!sessionDataFirebase.users) {
//     sessionDataFirebase.users = [];
//   }

//   sessionDataFirebase.users.push(currentUser);

//   storeSessionDataFirebase(sessionDataFirebase);

//   initializeTimer(userJoinTime);
// }

function endSession() {
  const userId = getCurrentUserId();
  firebase.database().ref(`sessions/${userId}`).remove();
  localStorage.removeItem("sessionData");
}
{/* <ErrorModal
  errorMessage={setErrorMessage}
  style={"fixed  top-0 right-0 mr-2 "}
  onClose={() => handleClose()}
/>; */}
// export {
//   checkUserAuthentication,
//   storeSessionDataLocally,
//   getSessionDataLocally,
//   storeSessionDataFirebase,
//   getSessionDataFirebase,
//   initializeTimer,
//   joinPeerSession,
//   endSession,
// };
