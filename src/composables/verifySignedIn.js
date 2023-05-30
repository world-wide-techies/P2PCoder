import { appAuth } from "./firebaseConfig/config";
const user = appAuth.currentUser;
function isUserSignedIn() {
  if (user) {
    console.log("User is signed in");
  } else {
    console.log("User is not signed in");
  }
}

export { user, isUserSignedIn };
