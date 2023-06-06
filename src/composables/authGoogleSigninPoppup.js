import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { appAuth } from './firebaseConfig/config';

const provider = new GoogleAuthProvider();

async function signInWithGoogle() {
  try {
    const res = signInWithPopup(appAuth, provider);
    if (!res) {
      throw new Error("Couldn't complete signup");
    }

    const user = res.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const credential = GoogleAuthProvider.credentialFromError(error);
    throw new Error(errorMessage);
  }
}

export { signInWithGoogle };
