import firebase from './firebaseConfig/config'
import 'firebase/auth'

function UserLogin(emailAddress, password){

    return firebase.auth().signInWithEmailAndPassword(emailAddress, password)
  .then((userInfo) => {
    
    const user = userInfo.user;
    console.log('Logged in user:', user.email)
    
  })
  .catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('Login error:', errorCode, errorMessage)
    
  })

}

export default UserLogin