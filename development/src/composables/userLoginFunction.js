import { signInWithEmailAndPassword } from "firebase/auth";
import { appAuth } from "./firebaseConfig/config";

async function UserLogin(emailAddress, password) {
  try {
    const userInfo = await signInWithEmailAndPassword(
      appAuth,
      emailAddress,
      password
    );
    const user = userInfo.user;
    if (user && !user.emailVerified) {
      return { loggedIn: false, message: "Please verify your email first" };
    }
    if (user) {
      return { loggedIn: true, message: user };
    }
  } catch (error) {
    const errorMessage = error.message;
    return { loggedIn: false, message: errorMessage };
  }
}

export default UserLogin;
