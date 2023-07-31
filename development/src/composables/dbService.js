import React, { useState } from "react";

import { appFirestore, appAuth } from "./firebaseConfig/config";
import { setDoc, doc, updateDoc, getDoc, onSnapshot } from "firebase/firestore";

async function createSession(userSessionData) {
  const { sessionName, activeLanguage, peerSessionId } = userSessionData;
  if (!sessionName || !activeLanguage || !peerSessionId) {
    throw new Error("Kindly provide all fields");
  }

  const user = appAuth.currentUser;

  if (user == null) {
    throw new Error("User not found!");
  }

  const coders = doc(appFirestore, `CODERS/${peerSessionId}`);
  const session = doc(coders, `SESSION/${user.uid}`);

  try {
    const sessionData = {
      sessionName: sessionName,
      peerId: peerSessionId,
      language: activeLanguage,
      codersName: user.username || user.displayName,
      createdAt: new Date(),
    };

    const userDocRef = await setDoc(
      coders,
      { sessionId: user.uid },
      { merge: true }
    );
    await setDoc(session, sessionData, { merge: true });
    return {
      sessionLanguage: activeLanguage,
      success: true,
      message: "Session successfully created!",
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

function useStoreSession() {
  const [storeSession, setStoreSession] = useState({});

  async function getStoreSessionDetails(peerId) {
    const user = appAuth.currentUser;
    if (user == null) {
      throw new Error("User not found!");
    }

    const coders = doc(appFirestore, `CODERS/${peerId}`);

    const codersSnap = await getDoc(coders);
    if (!codersSnap.exists()) {
      throw new Error(`Session with ID ${peerId} does not exist`);
    }

    try {
      const sessionId = codersSnap.data().sessionId;

      const userSession = doc(coders, `SESSION/${sessionId}`);

      const sessionData = await getDoc(userSession);
      onSnapshot(userSession, (querySnapShot) => {
        const docData = querySnapShot.data();
        setStoreSession(docData);
      });
    } catch (error) {
      console.error("Error retrieving document: ", error);
    }
  }

  return { storeSession, getStoreSessionDetails };
}

async function addCollabCodeEditor(codeEditorData) {
  const { editorCode, peerId } = codeEditorData;
  if (!editorCode || !peerId) {
    throw new Error("Kindly insert text");
  }
  const user = appAuth.currentUser;
  if (user == null) {
    throw new Error("User not found!");
  }

  const coders = doc(appFirestore, `CODERS/${user.uid}`);
  const session = doc(coders, `SESSION/${peerId}`);
  try {
    const codeData = {
      codes: editorCode,
    };

    const docRef = await setDoc(session, codeData, { merge: true });
    return "code editor data added";
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

async function updateSession(updatedSessionData) {
  const { editorCode, peerSessionId, activeLanguage } = updatedSessionData;
  if (!editorCode || !peerSessionId || !activeLanguage) {
    throw new Error("Kindly provide all fields");
  }

  const user = appAuth.currentUser;
  if (user == null) {
    throw new Error("User not found!");
  }

  const coders = doc(appFirestore, `CODERS/${user.uid}`);
  const session = doc(coders, `SESSION/${peerSessionId}`);

  try {
    const sessionData = {
      codes: editorCode,
      sessionName: sessionName,
      peerId: peerSessionId,
      language: language,
      endedAt: new Date(),
    };
    const docRef = await updateDoc(session, sessionData);
    return "session updated!";
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

async function addUserToExistingSession(peerId) {
  try {
    if (!peerId) {
      throw new Error("User or session ID is missing");
    }

    const currentUser = appAuth.currentUser;

    if (!currentUser) {
      throw new Error("User is not authenicated");
    }
    const uid = currentUser.uid;

    const coders = doc(appFirestore, "CODERS", peerId);
    const codersSnap = await getDoc(coders);
    if (!codersSnap.exists()) {
      throw new Error(`Session with ID ${peerId} does not exist`);
    }

    const sessionId = codersSnap.data().sessionId;

    const sessionRef = doc(
      appFirestore,
      "CODERS",
      peerId,
      "SESSION",
      sessionId
    );

    const sessionRefSnap = await getDoc(sessionRef);
    const activeLanguage = sessionRefSnap.data().language;

    const collabUserData = {
      collaboratorName: currentUser.displayName || currentUser.username,
    };
    const sesDocRef = await setDoc(sessionRef, collabUserData, { merge: true });

    return {
      sessionLanguage: activeLanguage,
      success: true,
      message: "User successfully added to session",
    };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

export {
  addCollabCodeEditor,
  createSession,
  updateSession,
  addUserToExistingSession,
  useStoreSession,
};