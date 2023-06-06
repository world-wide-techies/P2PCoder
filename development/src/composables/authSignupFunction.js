import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { appAuth } from "./firebaseConfig/config";

async function authSignUp(name, email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      appAuth,
      email,
      password
    );
    const user = userCredential.user;
    if (user) {
      await updateProfile(user, { displayName: name });
    }
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}

export { authSignUp };
