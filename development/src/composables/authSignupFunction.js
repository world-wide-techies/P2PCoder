import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { appAuth, appFirestore } from "./firebaseConfig/config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import UserLogin from "./userLoginFunction";

async function isUsernameAvailable(username) {
  try {
    const useRef = doc(appFirestore, "users", username);
    const userSnapshot = await getDoc(useRef);
    return !userSnapshot.exists();
  } catch (error) {
    throw new Error(error);
  }
}

async function authSignUp(name, email, password, username) {
  try {
    const isAvailable = await isUsernameAvailable(username);

    const userCredential = await createUserWithEmailAndPassword(
      appAuth,
      email,
      password
    );
    const user = userCredential.user;
    if (user) {
      await updateProfile(user, { displayName: name });
    }
    await UserLogin(email, password);
    return user;
  } catch (error) {
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}

async function completeSignUp(user, username) {
  try {
    await setDoc(doc(appFirestore, "users", username), {
      displayName: user.displayName,
      userId: user.uid,
      email: user.email,
      emailVerified: true,
    });
  } catch (error) {
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}

export { isUsernameAvailable, authSignUp, completeSignUp };
