import { appAuth } from "./firebaseConfig/config";

function isUserSignedIn() {
  const user = appAuth.currentUser;
  if (user && user.emailVerified) {
    return true;
  } else {
    return false;
  }
}

export { isUserSignedIn };
