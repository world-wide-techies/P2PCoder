import { createUserWithEmailAndPassword, updateProfile,  sendEmailVerification } from "firebase/auth";
import { appAuth, appFirestore } from "./firebaseConfig/config";
import { doc, getDoc, collection, getFirestore, setDoc, query, where, getDocs } from "firebase/firestore";


async function checkUsernameAvailability(username, firestore) {
  try {
    if (!username) {
      throw new Error("Username is required");
    }

    const db = firestore || getFirestore();
    const usernameRef = doc(collection(db, "users"), username); 
    const userSnapshot = await getDoc(usernameRef);
    return !userSnapshot.exists();
  } catch (error) {
    throw error;
  }
}


async function checkEmailAvailability(email, firestore) {
  try {
    if (!email) {
      throw new Error("Email is required");
    }

    const db = firestore || getFirestore();
    const usersCollection = collection(db, "users");
    const emailQuery = query(usersCollection, where("email", "==", email));
    const querySnapshot = await getDocs(emailQuery);

    return querySnapshot.size === 0
  } catch (error) {
    throw error;
  }
}


async function authSignUp(name, email, password, username) {
  try {
    if (!username) {
      throw new Error("Username is required");
    } else if (!email) {
      throw new Error("Email is required");
    }

      
    const isEmailAvailable = await checkEmailAvailability(email, appFirestore);
    if (!isEmailAvailable) {
      throw new Error("Email is not available");
    }

    const isUsernameAvailable = await checkUsernameAvailability(username, appFirestore);
    if (!isUsernameAvailable) {
      throw new Error("Username is not available");
    }
    
    const userCredential = await createUserWithEmailAndPassword(appAuth, email, password);
    const user = userCredential.user;
    console.log("Sign up successful");
    if (user) {
      await updateProfile(user, { displayName: name });
      await setDoc(doc(appFirestore, "users", username), { userId: user.uid,
        firstname: user.firstname,
        lastname: user.lastname,
        username,
        email: user.email, });
      await sendEmailVerification(user);
      return { success: true, message: 'Please verify your email before signing in. A verification email has been sent to your email address.', user };
    }
  } catch (error) {
    const errors = {};

    if (error.code === "auth/email-already-in-use") {
      errors.firebaseError = "Email already in use";
    } else {
      errors.firebaseError = error.message;
    }

    throw errors;
  }
}





export { checkUsernameAvailability, checkEmailAvailability, authSignUp };
