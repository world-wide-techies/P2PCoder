import { appAuth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function isUserSignedIn() {
 
   const unsub = onAuthStateChanged(appAuth, (user) => {
     if (user) {
     console.log(user)
     } else {
          console.log("user is signed out");
     }
   });
   unsub(); 
};

export { isUserSignedIn };
