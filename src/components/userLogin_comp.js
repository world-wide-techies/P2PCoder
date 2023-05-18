import { OnboardingHeader } from "./onboardingHeader";
import Link from "next/link";

function UserLoginComp() {
  return (
    <form className="space-y-10">
      <OnboardingHeader
        h1={"Welcome back"}
        p={"Enjoy extra features when you create an account with us."}
      />

      <div className="flex justify-between items-center">
        <button className="bg-gray-200 flex items-center py-2 px-10 mx-3 rounded-md">
          Create Account with Google
        </button>
        <button className="bg-gray-200 flex items-center py-2 px-10 mx-3 rounded-md">
          Create Account with Github
        </button>
      </div>
      <div className="flex items-center">
        <div className="border-b-2 border-gray-200 w-full flex justify-center"></div>
        <p className="flex justify-center px-3">OR</p>
        <div className="border-b-2 border-gray-200 w-full flex justify-center"></div>
      </div>

      <div>
        <label htmlFor="email address">Email Address</label>
        <input
          type="email"
          className="w-full shadow-sm bg-gray-200 border-2 border-gray-300 rounded-sm outline-none p-2"
          placeholder="Enter Email Address"
        />
      </div>
      <div>
        <label htmlFor="email address">
          Password<sup>*</sup>
        </label>
        <input
          type="email"
          className="w-full shadow-sm bg-gray-200 border-2 border-gray-300 rounded-sm outline-none p-2"
          placeholder="Write text here"
        />
        <div>
          <button className="float-right">Forgot password?</button>
        </div>
      </div>

      <div>
        <Link
          href="#"
          className="bg-violet-800 text-white text-center font-bold block w-full p-2 rounded-sm"
        >
          Log in
        </Link>
      </div>

      <p className="text-center font-semibold">
        Don't have an account with us?
        <Link href="#" className="text-violet-800">
          Create your account
        </Link>
      </p>
    </form>
  );
}
export default UserLoginComp;
