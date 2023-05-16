import { sendPasswordResetEmail } from "firebase/auth";
import { appAuth } from "./firebaseConfig/config"


const auth = appAuth();
sendPasswordResetEmail(auth, email)
    .then(() => {
        console.log("Password reset email sent!");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Password reset failed!", errorCode, errorMessage);
    });




