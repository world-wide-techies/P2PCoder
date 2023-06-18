import { appFirestore, appAuth } from "./firebaseConfig/config";
import { setDoc, doc, updateDoc, getDoc } from "firebase/firestore";

async function addSession(userSessionData) {
  const { sessionName, peerId, language, userName, peerName } = userSessionData;
  if (!sessionName || !peerId || !language || !userName || !peerName) {
    throw new Error("Kindly provide all fields");
  }

  const user = appAuth.currentUser;
  if (user == null) {
    throw new Error("User not found!");
  }

  const coders = doc(appFirestore, `CODERS/${user.uid}`);
  const session = doc(coders, `SESSION/${peerId}`);

  try {
    const sessionData = {
      sessionName: sessionName,
      peerName: peerName,
      peerId: peerId,
      language: language,
      createdAt: new Date(),
      userName: userName,
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
  const { editorCode, sessionName, peerId, language, userName, peerName } =
    updatedSessionData;
  if (
    !editorCode ||
    !sessionName ||
    !peerId ||
    !language ||
    !userName ||
    !peerName
  ) {
    throw new Error("Kindly provide all fields");
  }

  const user = appAuth.currentUser;
  if (user == null) {
    throw new Error("User not found!");
  }

  const coders = doc(appFirestore, `CODERS/${user.uid}`);
  const session = doc(coders, `SESSION/${peerId}`);

  try {
    const sessionData = {
      codes: editorCode,
      sessionName: sessionName,
      peerName: peerName,
      peerId: peerId,
      language: language,
      endedAt: new Date(),
      userName: userName,
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
  addSession,
  getUserDetails,
  updateSession,
  addUserToExistingSession,
};
