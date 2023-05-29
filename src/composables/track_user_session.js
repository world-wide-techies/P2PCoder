import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebaseConfig/config";

firebase.initializeApp(firebaseConfig);

function trackSession() {
  return new promise((resolve) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const userSession = user.uid;
        localStorage.setItem("userSession", userSession);
        resolve(userSession);
      } else if (!localStorage.getItem("userSession")) {
        resolve(null);
      } else {
        const savedSession = localStorage.getItem("userSession");
        resolve(savedSession);
      }
    });
  });
}

export { trackSession };
