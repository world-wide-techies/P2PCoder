import React from "react";
import { OnboardingHeader } from "./onboardingHeader";
import Link from "next/link";
import Image from "next/image";
import googleIcon from "../../public/assets/onboardingIcons/google.png";
import gitHubIcon from "../../public/assets/onboardingIcons/github_black.png";

function UserLoginComp() {
  return (
    <form className="space-y-6 p-10">
      <div className="space-y-3">
        <OnboardingHeader
          h1={"Welcome back"}
          p={"Enjoy extra features when you create an account with us."}
        />

        <div className="flex justify-center space-x-5">
          <button className="bg-gray-200 flex justify-center items-center p-3 rounded-md w-full shadow-md">
            <Image
              src={googleIcon}
              alt="google_icon"
              className="w-6 h-6 mr-4"
            ></Image>
            Create Account with Google
          </button>
          <button className="bg-gray-200 flex justify-center items-center p-3 rounded-md w-full shadow-md">
            <Image
              src={gitHubIcon}
              alt="GitHub icon"
              className="w-7 h-7 mr-4"
            ></Image>
            Create Account with Github
          </button>
        </div>
      </div>

      <div className="flex items-center text-center">
        <div className="border-b-2 border-gray-200 w-full relative flex justify-center"></div>
        <p className="flex justify-center w-1/12">OR</p>
        <div className="border-b-2 border-gray-200 w-full relative flex justify-center"></div>
      </div>

      <div className="space-y-8">
        <div>
          <label htmlFor="email address">Email Address</label>
          <input
            type="email"
            className="w-full shadow-sm bg-gray-200 border-2 border-gray-300 rounded-md p-3"
            placeholder="Enter Email Address"
          />
        </div>

        <div>
          <label htmlFor="email address">Password*</label>
          <input
            type="email"
            className="w-full shadow-sm bg-gray-200 border-2 border-gray-300 rounded-md p-3"
            placeholder="Enter password"
          />

          <button className="float-right">Forgot password?</button>
        </div>

        <div className="space-y-3">
          <Link
            href="#"
            className="bg-violet-800 text-white text-center font-bold block w-full p-3 rounded-md"
          >
            Log in
          </Link>

          <p className="text-center font-semibold">
            Don't have an account with us?
            <Link href="#" className="text-violet-800 mx-1.5">
              Create your account
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}
export default UserLoginComp;
