import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { appAuth } from "./firebaseConfig/config";
import { useState } from "react";

const provider = new GithubAuthProvider();

function useGithubSignin() {
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  async function signinWithGithub() {
    setError(null);
    setIsPending(true);
    try {
      const res = await signInWithPopup(appAuth, provider);
      if (!res) {
        throw new Error("Couldn't complete signup");
      }
      const user = res.user;
      setIsPending(false);
      return user;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const credential = GithubAuthProvider.credentialFromError(error);
      setError(errorMessage);
      setIsPending(false);
    }
  }

  return { signinWithGithub, githubError: error, isPending };
}

export { useGithubSignin };
