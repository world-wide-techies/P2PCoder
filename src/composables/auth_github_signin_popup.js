import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { appAuth } from "./firebaseConfig/config";

const provider = new GithubAuthProvider();

function signInWithGithub() {
  signInWithPopup(appAuth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GithubAuthProvider.credentialFromError(error);
    });
}

export { signInWithGithub };
