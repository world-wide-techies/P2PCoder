import { appAuth } from "./firebaseConfig/config";

function isUserSignedIn() {
  const user = appAuth.currentUser;
  if (user) {
    return true;
  } else {
    return false;
  }
}

export { isUserSignedIn };
