import { appFirestore, appAuth, app } from "./firebaseConfig/config";
import { setDoc, doc, addDoc, updateDoc, getDoc } from "firebase/firestore";

//Create a session
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
    console.log("session added");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

// get user details
async function getUserDetails(peerId) {
  const user = appAuth.currentUser;
  if (user == null) {
    throw new Error("User not found!");
  }

  const coders = doc(appFirestore, `CODERS/${user.uid}`);
  const userSession = doc(coders, `SESSION/${peerId}`);
  try {
    const sessionData = await getDoc(userSession);
    console.log(`session is ${JSON.stringify(sessionData.data())}`);
    if (!sessionData.exists()) {
      throw new Error("Session not found!");
    }

    const docData = sessionData.data();
    console.log(`value added : ${docData}`);
    return docData;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

// add codeEditor
async function addCollabCodeEditor(codeEditorData) {
  const { editorCode, peerId } = codeEditorData;
  if (!editorCode || !peerId) {
    throw new Error("Kindly insert text");
  }
  const user = appAuth.currentUser;
  console.log(user);
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
    console.log("code data added");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

export { addCollabCodeEditor, addSession, getUserDetails };
