import { appAuth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function isUserSignedIn() {
 
   const unsub = onAuthStateChanged(appAuth, (user) => {
     if (user) {
    callback(user);
     } else {
    callback("no user");
     }
   });
   unsub(); 
};

export { isUserSignedIn };
