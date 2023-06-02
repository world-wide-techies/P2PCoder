import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { appAuth } from "./firebaseConfig/config";

const provider = new GoogleAuthProvider();

async function signInWithGoogle() {
  try {
    const res = signInWithPopup(appAuth, provider);
    if (!res) {
      throw new Error("Couldn't complete signup");
    }

    const user = res.user;
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    throw new Error(errorMessage);
    // ...
  }
}

async function signInWithGithub() {
  try {
    const res = await signInWithPopup(appAuth, provider);
    if (!res) {
      throw new Error("Couldn't complete signup");
    }
    const user = res.user;
    return res.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const credential = GithubAuthProvider.credentialFromError(error);
    throw new Error(errorMessage);
  }
}

/*catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
*/

export { signInWithGoogle };
