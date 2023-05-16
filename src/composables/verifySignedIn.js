import { appAuth } from "./firebase";

function isUserSignedIn() {
  const user = appAuth.currentUser;

  if (user) {
	console.log("User is signed in");
  } else {
	console.log("User is not signed in");
  }
  
};

export { isUserSignedIn };
