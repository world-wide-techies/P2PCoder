import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { appAuth, appFirestore } from "./firebaseConfig/config";
import { doc, setDoc, collection } from "firebase/firestore";

async function authSignUp(firstname, lastname, email, password, username) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      appAuth,
      email,
      password
    );
    const user = userCredential.user;
    if (user) {
      const displayName = `${firstname} ${lastname}`;
      await updateProfile(user, { displayName: displayName });

      const newUser = {
        firstname: firstname,
        lastname: lastname,
        email: email,
      };

      await completeSignUp(newUser, username);
    }

    return { success: true, user };
  } catch (error) {
    console.error("Error object:", error);
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
  const codersCollection = collection(appFirestore, "CODERS");
  const newDocRef = doc(codersCollection);
  const fullname = `${user.firstname} ${user.lastname}`;
  await setDoc(newDocRef, {
    fullname,
    username,
    email: user.email,
    createdAt: new Date(),
  });
}

export { authSignUp, completeSignUp, triggerEmailVerification };
