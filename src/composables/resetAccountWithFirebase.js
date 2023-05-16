import { updatePassword } from "firebase/auth";
import { appAuth } from "./firebaseConfig/config";

export function resetUserAccount(email, newPassword) {
    const auth = appAuth();

    auth.sendPasswordResetEmail(email)
        .then(() => {
            const user = auth.currentUser;
            return updatePassword(user, newPassword);
        })
        .then(() => {
            console.log("User account reset successfully.");
        })
        .catch((error) => {
            console.error("Failed to reset user account:", error);
        });
}
