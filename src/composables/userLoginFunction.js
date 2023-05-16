import { signInWithEmailAndPassword } from "firebase/auth"
import  { appAuth }  from "./firebaseConfig/config"


async function UserLogin(emailAddress, password){
    try {
    const userInfo = await signInWithEmailAndPassword(appAuth, emailAddress, password)
    const user = userInfo.user;
    if (user) {
        return { LoggedIn: true, user };
    }
    } 
    catch (error) {
        const errorMessage = error.message
        return { LoggedIn: false, message: errorMessage }
    }
}  

export default UserLogin

