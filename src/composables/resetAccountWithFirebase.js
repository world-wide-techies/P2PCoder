import { updateEmail, updatePassword } from "firebase/auth"
import { appAuth } from "./firebaseConfig/config"

import { appAuth, updatePassword } from "./firebaseConfig.js";

function resetAccount(newPassword) {
    return new Promise((resolve, reject) => {
        const user = appAuth.currentUser;

        if (!user) {
            reject(new Error('No user is currently authenticated'));
            return;
        }

        updatePassword(user, newPassword)
            .then(() => {
                console.log('Account password updated successfully');
                resolve(); // Account reset success
            })
            .catch((error) => {
                console.error('Failed to update account password:', error);
                reject(error); // Account reset failure
            });
    });
}
