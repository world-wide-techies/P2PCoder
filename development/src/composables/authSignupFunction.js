import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { appAuth, appFirestore } from "./firebaseConfig/config";
import { doc, getDoc, setDoc } from "firebase/firestore";

async function isUsernameAvailable(username) {
  try {
    // Validate the username
    if (!isValidUsername(username)) {
      throw new Error("Invalid username");
    }

    const userRef = doc(appFirestore, "users", username);
    const userSnapshot = await getDoc(userRef);
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
      await setDoc(doc(appFirestore, "users", username), { userId: user.uid });
    }
    return user;
  } catch (error) {
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}

function isValidUsername(username) {
  // Perform username validation logic here
  // Return true if the username is valid, false otherwise
  // You can customize this function based on your requirements
  // For example, you can check for length, allowed characters, etc.
  // Here's a basic example:
  return typeof username === "string" && username.length > 0;
}

export { isUsernameAvailable, authSignUp };
