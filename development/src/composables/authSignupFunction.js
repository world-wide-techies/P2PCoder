import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { appAuth, appFirestore } from "./firebaseConfig/config";
import { doc, setDoc, collection } from "firebase/firestore";

async function authSignUp(name, email, password, username) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      appAuth,
      email,
      password
    );
    const user = userCredential.user;
    if (user) {
      await updateProfile(user, { displayName: name });
      await completeSignUp(user, username);
    }

    return { success: true, user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function triggerEmailVerification(user) {
  try {
    await sendEmailVerification(user);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function completeSignUp(user, username) {
  try {
    const codersCollection = collection(appFirestore, "CODERS");
    const newDocRef = doc(codersCollection);
    await setDoc(newDocRef, {
      displayName: user.displayName,
      username: username,
      email: user.email,
    });
  } catch (error) {
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}

export { authSignUp, completeSignUp, triggerEmailVerification };
