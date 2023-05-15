import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    //User is signed in
    const uid = user.uid;
    
    console.log("User with id '" + uid + "' is currently signed in.");
  } else {
    //User is signed out
    console.log("User is not currently signed in.");
  }
});