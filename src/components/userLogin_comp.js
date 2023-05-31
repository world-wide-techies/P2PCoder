import React, { useState } from "react";
import { OnboardingHeader } from "./onboardingHeader";
import Link from "next/link";
import Image from "next/image";
import googleIcon from "../../public/assets/onboardingIcons/google.png";
import gitHubIcon from "../../public/assets/onboardingIcons/github_black.png";
import {
  emailValidator,
  passwordValidator,
} from "@/composables/emailPasswordValidator";
import UserLogin from "@/composables/userLoginFunction";

function UserLoginComp() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const emailChange = (e) => {
    setEmailAddress(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const loginUser = async (e) => {
    e.preventDefault();

    const validEmail = emailValidator(emailAddress);
    const validPassword = passwordValidator(password);

    if (validEmail === true && validPassword === true) {
      try {
        const result = await UserLogin(emailAddress, password);
        if (result.loggedIn) {
          return result.message;
        } else {
          setErrorMsg(result.message);
        }
      } catch {
        (error) => {
          setErrorMsg(error.message);
        };
      }
    } else if (validEmail !== true) {
      setErrorMsg(validEmail);
    } else if (validPassword !== true) {
      setErrorMsg(validPassword);
    } else {
      setErrorMsg(validEmail || validPassword);
    }
  };

  return (
    <form className="space-y-6 p-10" onSubmit={loginUser}>
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
      {errorMsg && <p className="font-bold text-red-500">{errorMsg}</p>}

      <div className="space-y-8">
        <div>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full shadow-sm bg-gray-200 border-2 border-gray-300 rounded-md p-3"
            placeholder="Enter Email Address"
            onChange={emailChange}
            value={emailAddress}
          />
        </div>

        <div>
          <label>Password*</label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full shadow-sm bg-gray-200 border-2 border-gray-300 rounded-md p-3"
            placeholder="Enter password"
            onChange={passwordChange}
            value={password}
          />
          <button className="float-right">Forgot password?</button>
        </div>

        <div className="space-y-3">
          <button
            type="submit"
            className="bg-violet-800 text-white text-center font-bold block w-full p-3 rounded-md"
          >
            Log in
          </button>

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
