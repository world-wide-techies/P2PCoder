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

<<<<<<< HEAD
      await triggerEmailVerification(user); 
      await completeSignUp(newUser, username); 
=======
      await completeSignUp(newUser, user.uid, username);
>>>>>>> 1a9300023e99ecd2df4a40b2d5ad24e0e18314f3
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

<<<<<<< HEAD

async function completeSignUp(user, username) {
  const codersCollection = collection(appFirestore, `CODERS/${user.uid}`);
  const newDocRef = doc(codersCollection);
=======
async function completeSignUp(user, uid, username) {
  const newDocRef = doc(appFirestore, "CODERS", uid);

>>>>>>> 1a9300023e99ecd2df4a40b2d5ad24e0e18314f3
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
  } catch (error) {
    console.error("Error writing document: ", error);
  }
}

export { authSignUp, completeSignUp, triggerEmailVerification };