import React from "react";

import { appFirestore, appAuth } from "./firebaseConfig/config";
import { setDoc, doc, updateDoc, getDoc } from "firebase/firestore";

async function createSession(sessionData) {
  console.log(sessionData);
  const { sessionName, activeLanguage, peerSessionId } = sessionData;
  if (!sessionName || !activeLanguage || !peerSessionId) {
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
      sessionName: sessionName,
      peerId: peerSessionId,
      language: activeLanguage,
      createdAt: new Date(),
    };
    const docRef = await setDoc(session, sessionData, { merge: true });
    return "session added";
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

async function getUserDetails(peerId) {
  const user = appAuth.currentUser;
  if (user == null) {
    throw new Error("User not found!");
  }

  const coders = doc(appFirestore, `CODERS/${user.uid}`);
  const userSession = doc(coders, `SESSION/${peerId}`);
  try {
    const sessionData = await getDoc(userSession);

    if (!sessionData.exists()) {
      throw new Error("Session not found!");
    }

    const docData = sessionData.data();
    return docData;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
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

export { addCollabCodeEditor, createSession, getUserDetails, updateSession };
