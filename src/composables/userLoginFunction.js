import { signInWithEmailAndPassword } from "firebase/auth"
import  {appAuth}  from "./firebaseConfig/config"


async function UserLogin(emailAddress, password){
    try {
    const userInfo = await signInWithEmailAndPassword(appAuth, emailAddress, password)
    const user = userInfo.user;
    console.log('Login successful', user)
    } 
    catch (error) {
        const errorCode = error.code
        const errorMessage = error.message
        console.log('Login error:', errorCode, errorMessage)
    }
}  

export default UserLogin

