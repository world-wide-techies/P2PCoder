import { sendPasswordResetEmail } from "firebase/auth";
import { appAuth } from "./firebaseConfig/config";

async function resetPassword(emailAddress) {
  try {
    await sendPasswordResetEmail(appAuth, emailAddress);
    return "Password reset email sent!";
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw error;
  }
}

export { resetPassword };
