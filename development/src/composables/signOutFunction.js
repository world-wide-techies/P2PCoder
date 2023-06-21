import { signOut } from "firebase/auth";
import { appAuth } from "./firebaseConfig/config";

async function handleLogout() {
  try {
    await signOut(appAuth);
    return "Signed out successfully";
  } catch (error) {
    console.log(error.message);
  }
}

export { handleLogout };
