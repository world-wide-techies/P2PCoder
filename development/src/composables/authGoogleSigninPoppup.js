import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { appAuth } from "./firebaseConfig/config";
import { useState } from "react";

const provider = new GoogleAuthProvider();

function useGoogleSignin() {
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  async function signinWithGoogle() {
    setError(null);
    setIsPending(true);

    try {
      const res = await signInWithPopup(appAuth, provider);
      if (!res) {
        setError("Couldn't complete signup");
      }

      const user = res.user;
      setIsPending(false);
      return user;
    } catch (error) {
      const errorCode = error.code;
      let errorMessage = error.message;
      const credential = GoogleAuthProvider.credentialFromError(error);

      switch (errorCode) {
        case "auth/account-exists-with-different-credential":
          errorMessage =
            "This Google account is already linked with another login method";
          break;
        case "auth/popup-blocked":
          errorMessage =
            "Sign-in popup blocked by your browser's settings. Please disable the popup blocker and try signing in again. Alternatively, you can try signing in using a different browser.";
          break;
        case "auth/cancelled-popup-request":
          errorMessage =
            "Sign-in process canceled. Please retry Google sign-in.";
          break;
        case "auth/popup-closed-by-user":
          errorMessage =
            "Sign-in popup closed. Please complete Google sign-in to proceed";

          break;
        default:
          errorMessage = "An error occurred. Please try again later.";
      }

      setError(errorMessage);
      setIsPending(false);
    }
  }
  return { signinWithGoogle, googleError: error, isPending };
}

export { useGoogleSignin };
