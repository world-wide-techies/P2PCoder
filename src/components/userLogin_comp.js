import { OnboardingHeader } from './onboardingHeader'


function UserLoginComp() {
return (
    <form>
        <OnboardingHeader h1={'Welcome back'} p ={'Enjoy extra features when you create an account with us.'}/>

        <div className='flex justify-between items-center my-6'>
        <button className='bg-gray-200 flex items-center py-2 px-10 mx-3 rounded-md'>Create Account with Google</button>
        <button className='bg-gray-200 flex items-center py-2 px-10 mx-3 rounded-md'>Create Account with Github</button>
        </div>
        <div className='flex items-center'>
        <div className='border-b-2 border-gray-200 w-full flex justify-center'></div>
        <p className='flex justify-center px-3'>OR</p>
        <div className='border-b-2 border-gray-200 w-full flex justify-center'></div>
        </div>

        <div className="mt-3">
        <label htmlFor="email address">Email Address</label>
        <input type="email" className="w-full shadow-sm bg-gray-200 border-2 border-gray-300 rounded-sm outline-none p-2" placeholder='Enter Email Address'/>
        </div>
        <div className="mt-3">
        <label htmlFor="email address">Password<sup>*</sup></label>
        <input type="email" className="w-full shadow-sm bg-gray-200 border-2 border-gray-300 rounded-sm outline-none p-2" placeholder='Write text here'/>
        </div>
        <a href="#" className='float-right my-3'>Forgot password?</a>
        <button className='bg-violet-800 text-white font-bold w-full py-3 rounded-sm my-3'>Log in</button>
        <p className='text-center font-semibold mt-3'>Don't have an account with us? <a href="#" className='text-violet-800'>Create your account</a></p>
    </form>
)
}
export default UserLoginComp
