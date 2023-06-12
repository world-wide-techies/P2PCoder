import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { appAuth, appFirestore } from "./firebaseConfig/config" ;
import { doc, getFirestore, getDoc, setDoc } from "firebase/firestore";


async function isUsernameAvailable(username) {
  try {
    const useRef = doc(appFirestore, "users", username);
    const userSnapshot = await getDoc(useRef);
    return !userSnapshot.exists();
  } catch (error) {
    throw error;
  }
}

async function authSignUp(name, email, password, username) {
  try {
    const isAvailable = await isUsernameAvailable(username);

    if (isAvailable) {
      const userCredential = await createUserWithEmailAndPassword(
        appAuth,
        email,
        password
      );
      const user = userCredential.user;
      if (user) {
        await updateProfile(user, { displayName: name });
        await setDoc(doc(appFirestore, "users", username), { userId: user.uid });
        return user;
      }
    } else {
      throw new Error("Username is not available");
    }
  } catch (error) {
    throw error; 
  }
}

export { isUsernameAvailable, authSignUp };
