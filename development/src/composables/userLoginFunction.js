import { signInWithEmailAndPassword } from 'firebase/auth';
import { appAuth } from './firebaseConfig/config';

async function UserLogin(emailAddress, password) {
  try {
    const userInfo = await signInWithEmailAndPassword(appAuth, emailAddress, password);
    const user = userInfo.user;

    if (user) {
      if (user.emailVerified) {
        return { loggedIn: true, message: user };
      } else {
        return { loggedIn: false, message: 'Please verify your email before signing in. A verification email has been sent to your email address.' };
      }
    }
  } catch (error) {
    const errorMessage = error.message;
    return { loggedIn: false, message: errorMessage };
  }
}

export default UserLogin;
