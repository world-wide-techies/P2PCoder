import { sendPasswordResetEmail } from 'firebase/auth';
import { appAuth } from './firebaseConfig/config';

async function resetPassword(email) {
  sendPasswordResetEmail(appAuth, email)
    .then(() => {
      return 'Password reset email sent!';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export { resetPassword };
