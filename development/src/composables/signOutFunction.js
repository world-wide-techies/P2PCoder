import { signOut } from "firebase/auth";
import { appAuth } from "./firebaseConfig/config";

async function handleLogout() {
  try {
    console.log()
    await signOut(appAuth);
    return {success: true};
  } catch (error) {
    console.log(error.message);
  }
}

export { handleLogout };
