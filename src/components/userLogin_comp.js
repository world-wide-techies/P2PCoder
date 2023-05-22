import React from "react";
import { OnboardingHeader } from "./onboardingHeader";
import Link from "next/link";
import Image from "next/image";
import googleIcon from "../../public/assets/onboardingIcons/google.png";
import gitHubIcon from "../../public/assets/onboardingIcons/github_black.png";

function UserLoginComp() {
  return (
    <form className="space-y-6 p-12">
      <div className="space-y-3">
        <OnboardingHeader
          h1={"Welcome back"}
          p={"Enjoy extra features when you create an account with us."}
        />

        <div className="flex justify-center spaxe-x-12">
          <button className="bg-gray-200 flex justify-center items-center py-2 px-10 mx-3 rounded-md w-1/3 shadow-md">
            <Image
              src={googleIcon}
              alt="google_icon"
              className="w-6 h-6 mr-4"
            ></Image>
            Create Account with Google
          </button>
          <button className="bg-gray-200 flex justify-center items-center py-2 px-10 mx-3 rounded-md w-1/3 shadow-md">
            <Image
              src={gitHubIcon}
              alt="google_icon"
              className="w-7 h-7 mr-4"
            ></Image>
            Create Account with Github
          </button>
        </div>
      </div>

      <div className="flex items-center">
        <div className="border-b-2 border-gray-200 w-full flex justify-center"></div>
        <p className="flex justify-center px-3">OR</p>
        <div className="border-b-2 border-gray-200 w-full flex justify-center"></div>
      </div>

      <div className="space-y-8">
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

          <button className="float-right">Forgot password?</button>
        </div>

        <div className="space-y-2">
          <Link
            href="#"
            className="bg-violet-800 text-white text-center font-bold block w-full p-2 rounded-sm"
          >
            Log in
          </Link>

          <p className="text-center font-semibold">
            Don't have an account with us?
            <Link href="#" className="text-violet-800">
              Create your account
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}
export default UserLoginComp;
