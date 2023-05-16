import { sendPasswordResetEmail } from "firebase/auth";
import { appAuth } from "./firebaseConfig/config";

async function sendPasswordResetEmail() {
    try {
        await sendPasswordResetEmail(appAuth, email);
        return true;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorMessage;
    }
}
export { sendPasswordResetEmail };