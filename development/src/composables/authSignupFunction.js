import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { appAuth, appFirestore } from "./firebaseConfig/config";
import { doc, setDoc } from "firebase/firestore";

async function authSignUp(firstname, lastname, email, password, username) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      appAuth,
      email,
      password
    );
    const user = userCredential.user;
    if (user) {
      await updateProfile(user, { displayName: `${firstname} ${lastname}` });

      const newUser = {
        firstname,
        lastname,
        email,
      };
      const completeSignupResponse = await completeSignUp(
        newUser,
        user.uid,
        username
      );
      if (completeSignupResponse.success) {
        return { success: true, user };
      } else {
        return { success: false, error: completeSignupResponse.error };
      }
    }
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

async function completeSignUp(user, uid, username) {
  const newDocRef = doc(appFirestore, "CODERS", uid);

  const fullname = `${user.firstname} ${user.lastname}`;

  const dataToSet = {
    fullname,
    username,
    email: user.email,
    createdAt: new Date(),
  };

  try {
    await setDoc(newDocRef, dataToSet);
    console.log("Document successfully written.");
    return { success: true };
  } catch (error) {
    console.error("Error writing document: ", error);
    return { success: false, error: error.message };
  }
}

export { authSignUp, completeSignUp, triggerEmailVerification };
