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
    throw error;
  }
}

export default UserLogin;
