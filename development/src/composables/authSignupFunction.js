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
      await updateProfile(user, { displayName: `${firstname} ${lastname}` });

      const newUser = {
        firstname,
        lastname,
        email,
      };

      await triggerEmailVerification(user); 
      await completeSignUp(newUser, username); 
    }
    return { success: true, userCredential }; 
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function triggerEmailVerification(user) {
  try {
    await sendEmailVerification(user);
    return true;
  } catch (error) { 
    return false;
  }
}


async function completeSignUp(user, username) {
  const codersCollection = collection(appFirestore, `CODERS/${user.uid}`);
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