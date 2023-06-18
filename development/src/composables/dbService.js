import React from "react";

import { appFirestore, appAuth } from "./firebaseConfig/config";
import { setDoc, doc, updateDoc, getDoc } from "firebase/firestore";

async function createSession(sessionData) {
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

async function addUserToExistingSession(peerId) {
  try {
    if (!appAuth || !peerId) {
      throw new Error("User or session ID is missing");
    }

    const currentUser = appAuth.currentUser;

    if (!currentUser) {
      throw new Error("User is not authenicated");
    }
    const uid = currentUser.uid;

    const sessionRef = doc(appFirestore, "CODERS", uid, "SESSION", peerId);

    const sessionSnap = await getDoc(sessionRef);

    if (!sessionSnap.exists()) {
      throw new Error(`Session with ID ${peerId} does not exist`);
    }

    await updateDoc(sessionRef, {
      session: uid,
    });

    return { success: true, message: "User successfully added to session" };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

export {
  addCollabCodeEditor,
  createSession,
  getUserDetails,
  updateSession,
  addUserToExistingSession,
};
