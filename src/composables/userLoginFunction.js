import React from 'react'
import firebase from './firebaseConfig/config'
import { useState } from 'react' //i imported useState to manage the state in this component.

//This is the component, it represents the users' login page.

export const UserLoginFunction = () => {

const  [emailAddress, setEmailAddress] = useState('')
const  [pwd, setPwd] = useState('')
const  [errorMsg, setErrorMsg] = useState(null)

//the above are the state variables for the email, password and error message in the login form.

const emailChange = (e) =>{
    setEmailAddress(e.target.value)
}

const pwdChange = (e) =>{
    setPwd(e.target.value)
}

/*the emailChange and pwdChange functions above is to monitor the email and password inputs in the form respectively. 
I added onChange event listener to the input elements. So, this function will only be active when there is a change 
in the input element, i.e when the user inputs something in it, meaning the onChange event is triggered and the 
function says extract any value typed so the state variables will be updated and stored using the setState variables 
(eg setEmailAddress)
I added value attributes to these input elements to keep the input element and the state variables in sync*/


const LoginUser = async (e) => {
    e.preventDefault()

    try{
        await firebase.auth().signInWithEmailAndPassword(emailAddress, pwd)
    }
    catch(errorMsg){
        setErrorMsg(error.message)
    }
}
/* The LoginUser is an asynchronous function that is triggered when the submit button in the form is clicked.
Using the async keyword to indicate the type of function prompted the await keyword, it simply says wait a minute
let firebase authenticate this user's login, if the details are valid login this user successfully;hence the try keyword
but if an error occurs during the authentication, 'catch' this error, extract it to the state variable using the 
setErrorMsg variable.

preventDefault prevents the form from submitting by default so the page would not refresh.

I created a <p> element just above the button in the form where the error msg will show up if there is any. 

{errorMsg && <p>{errorMsg}</p>}

The essence for this expression is for the error message to only show up if there is any.
*/


return (
    <div className="max-w-xs m-auto pt-9">
{/* <form onSubmit={LoginUser} className="bg-blue-300 py-9 px-9 rounded shadow-md">

    <h1 className="font-extrabold pb-7 text-center text-gray-800 text-xl">Login to continue</h1>
    <div className="pb-4">
    <label htmlFor="email" className="text-md font-bold text-gray-700">Email Address</label>
    <input type="email" id='email' value={emailAddress} onChange={emailChange} className="h-9 w-full shadow-md bg-blue-50 rounded outline-none p-2" placeholder="your@email.com"/>
    </div>

    <div className="pb-4">
    <label htmlfor="pwd" className="text-md font-bold text-gray-700">Password</label>
    <input type="password" id='pwd' value={pwd} onChange={pwdChange} className="h-9 w-full rounded bg-blue-50 shadow-md p-2 outline-none" placeholder="password"/>
    </div>

    <div className='text-center text-red-600 font-bold'>
        {errorMsg && <p>{errorMsg}</p>}
    </div>

    <div className="pt-5">
    <button type="submit" className="bg-blue-600 text-white px-8 py-1 rounded block m-auto font-semibold hover:bg-blue-500 w-full">Login</button>
    </div>
    <div className="py-4 text-center text-sm  text-gray-800">
    <a href="#" className="">Forgot Password? <span className="font-semibold">Click here</span></a>
    </div>
</form> */}
</div>
)
}

