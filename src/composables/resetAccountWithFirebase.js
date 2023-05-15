import { getAuth, updateEmail, updatePassword } from "firebase/auth"

function resetAccount(email, newPassword) {
    return new Promise((resolve, reject) => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
            reject(new Error('No user is currently authenticated'));
            return;
        }

        updateEmail(user, email)
            .then(() => {
                console.log('Account email updated successfully');
                return updatePassword(user, newPassword);
            })
            .then(() => {
                console.log('Account password updated successfully');
                resolve(); // Account reset success
            })
            .catch((error) => {
                console.error('Account reset failed:', error);
                reject(error); // Account reset failure
            });
    });
}
