import React from "react";
import { OnboardingHeader } from "./onboardingHeader";
import Link from "next/link";
import Image from "next/image";
import githubIcon from "../../public/assets/onboardingIcons/github.png";
import googleIcon from "../../public/assets/onboardingIcons/google.png";
import eyeIcon from "../../public/assets/onboardingIcons/eyes.svg";

function SignUpComponent() {
  return (
    <form className="space-y-5 p-6">
      <OnboardingHeader
        h1={"Create an account with us"}
        p={"Enjoy extra features when you create an account with us."}
      />

      <div className="flex justify-between items-center space-x-3">
        <button className="w-1/2 p-3 bg-gray-200 rounded-lg shadow-lg flex justify-center items-center">
          <Image src={googleIcon} alt="Github Icon" className="w-5 h-5 mr-2" />
          <span>Create account with Google</span>
        </button>
        <button className="w-1/2 p-3 bg-gray-200 rounded-lg shadow-lg flex justify-center items-center">
          <Image src={githubIcon} alt="Github Icon" className="w-7 h-7 mr-2" />
          <span>Create account with Github</span>
        </button>
      </div>

      <div className="flex items-center text-center">
        <div className="border-b-2 border-gray-300 w-full relative flex justify-center"></div>
        <p className="text-black w-1/6">OR</p>
        <div className="border-b-2 border-gray-300 w-full relative flex justify-center"></div>
      </div>

      <div className="space-y-3">
        <div className="w-full flex space-x-3">
          <div className="flex flex-col w-1/2 justify-start items-start">
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter First Name"
              className="border-[1px] border-gray p-3 rounded-lg bg-gray-100 w-full"
            />
          </div>

          <div className="flex flex-col w-1/2 justify-start items-start">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter Last Name"
              className="border-[1px] border-gray p-3 rounded-lg bg-gray-100 w-full"
            />
          </div>
        </div>

        <div className="w-full flex space-x-3">
          <div className="flex flex-col w-1/2 justify-start items-start">
            <label>Email Address</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter Email Address"
              className="border-[1px] border-gray p-3 rounded-lg bg-gray-100 w-full"
            />
          </div>

          <div className="flex flex-col w-1/2 justify-start items-start">
            <label>Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter User Name"
              className="border-[1px] border-gray p-3 rounded-lg bg-gray-100 w-full"
            />
          </div>
        </div>

        <div className="w-full flex space-x-3">
          <div className="flex flex-col w-1/2 justify-start items-start relative">
            <label>Password*</label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Enter Password"
              className="border-[1px] border-gray p-3 rounded-lg bg-gray-100 w-full"
            />
            <Image
              src={eyeIcon}
              alt="Github Icon"
              className="absolute right-5  top-1/2 transform -translate-y-1 w-7 h-7 "
            />
          </div>

          <div className="flex flex-col w-1/2 justify-start items-start relative">
            <label>Confirm Password*</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Re-enter Password"
              className="border-[1px] border-gray p-3 rounded-lg bg-gray-100 w-full"
            />
            <Image
              src={eyeIcon}
              alt="Github Icon"
              className="absolute right-5 top-1/2 transform -translate-y-1 w-7 h-7 "
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Link
          href="/"
          className="bg-violet-800 text-white text-center font-bold block w-full p-3 rounded-md"
        >
          Create Account
        </Link>

        <p className="text-center font-semibold ">
          Already have an account?
          <Link href="/" className="text-violet-800 ml-1.5">
            Log in
          </Link>
        </p>
      </div>
    </form>
  );
}

export default SignUpComponent;
