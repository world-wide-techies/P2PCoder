import { appAuth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function isUserSignedIn() {
 
   const unsub = onAuthStateChanged(appAuth, (user) => {
     if (user) {
     
     } else {
      
     }
   });
   unsub();

  
};

export { isUserSignedIn };
