import { appFirestore } from "./firebaseConfig/config";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

async function addUserToSession(user, peerId) {
  try {
    if (!user || !peerId) {
      throw new Error("User or session ID is missing");
    }
    const sessionRef = doc(appFirestore, "SESSIONS", peerId);

    await updateDoc(sessionRef, {
      users: arrayUnion(user),
    });
    return { success: true, message: "User successfully added to session" };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

export { addUserToSession };
