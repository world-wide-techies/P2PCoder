import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { appAuth } from "@/firebase/config";
import { useState } from "react";

function useAuthSignUp() {
  const [addUser, setAddUser] = useState("");

  const signup = ({ name, email, password }) => {
    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, { displayName: name });
      })
      .then((userCredential) => {
        const user = userCredential.user;
        setAddUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return { addUser, signup };
}

export { useAuthSignUp };
