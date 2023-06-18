// import {
//     createUserWithEmailAndPassword,
//     updateProfile,
//     sendEmailVerification,
//   } from "firebase/auth";
//   import { appAuth, appFirestore } from "./firebaseConfig/config";
//   import { doc, setDoc, collection } from "firebase/firestore";
  
//   async function authSignUp(firstname, lastname, email, password, username) {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         appAuth,
//         email,
//         password
//       );
//       const user = userCredential.user;
//       if (user) {
//         await updateProfile(user, { displayName: `${firstname} ${lastname}` });
  
//         const newUser = {
//           firstname,
//           lastname,
//           email,
//         };
  
//         await completeSignUp(newUser, username);
//       }
//       return { success: true, user };
//     } catch (error) {
//       return { success: false, error: error.message };
//     }
//   }
  
//   async function triggerEmailVerification(user) {
//     try {
//       await sendEmailVerification(user);
//       return { success: true };
//     } catch (error) {
//       return { success: false, error: error.message };
//     }
//   }
  
//   async function completeSignUp(user, username) {
//     const codersCollection = collection(appFirestore, `CODERS/${user.uid}`);
//     const newDocRef = doc(codersCollection);
//     const fullname = `${user.firstname} ${user.lastname}`;
//     await setDoc(newDocRef, {
//       fullname,
//       username,
//       email: user.email,
//       createdAt: new Date(),
//     });
//   }
  
//   export { authSignUp, completeSignUp, triggerEmailVerification };


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
    console.log("testing A"); //this line is to check if the function runs
    console.log("User created:", userCredential); //this line is to check what is inside the userCredential object 'to be sure it is not empty'
    
    const user = userCredential.user;
    if (user) {
      await updateProfile(user, { displayName: `${firstname} ${lastname}` });

      const newUser = {
        firstname,
        lastname,
        email,
      };

      console.log("testing B"); //this line is to check if the function is called
      await triggerEmailVerification(user); //i added this line to ensure that the email verification function is called immediately after the user is created
      await completeSignUp(newUser, username); // this complete signup function should only be called after users email is verified
    }
    return { success: true, userCredential }; 
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function triggerEmailVerification(user) {
  try {
    console.log("Triggering email verification for user:", user); // to check if this function is called and to see the data inside the user object to ensure it is not empty
    await sendEmailVerification(user);
    console.log('Email verification sent successfully'); // to check if sendEmailVerfication function is called and to see if it was successful
    return true;
  } catch (error) {
    console.log('Failed to send email verification:', error); // to check if sendEmailVerfication function failed
    return false;
  }
}


async function completeSignUp(user, username) {
  const codersCollection = collection(appFirestore, `CODERS/${user.uid}`);
  const newDocRef = doc(codersCollection);
  const fullname = `${user.firstname} ${user.lastname}`;
  console.log("testing C");
  await setDoc(newDocRef, {
    fullname,
    username,
    email: user.email,
    createdAt: new Date(),
  });
}

export { authSignUp, completeSignUp, triggerEmailVerification };