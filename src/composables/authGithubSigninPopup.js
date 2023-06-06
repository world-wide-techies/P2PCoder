// import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
// import { appAuth } from "./firebaseConfig/config";

// const provider = new GithubAuthProvider();

// async function signInWithGithub() {
//   try {
//     const res = await signInWithPopup(appAuth, provider);
//     if (!res) {
//       throw new Error("Couldn't complete signup");
//     }
//     const user = res.user;
//     return user
//   } catch (error) {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     const credential = GithubAuthProvider.credentialFromError(error);
//     throw new Error(errorMessage);
//   }
// }



// export { signInWithGithub };
