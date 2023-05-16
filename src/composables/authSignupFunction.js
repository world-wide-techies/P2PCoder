import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { appAuth } from "@/firebase/config";

async function authSignUp(name, email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      appAuth,
      email,
      password
    );
    const user = userCredential.user;
    await updateProfile(user, { displayName: name });
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}

const user = await authSignUp("Jane Doe", "example@example.com", "password123");
console.log(user);
