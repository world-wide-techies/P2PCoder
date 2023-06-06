"use client";
import React, { useState } from "react";
import { OnboardingHeader } from "./onboardingHeader";
import Link from "next/link";
import Image from "next/image";
import googleIcon from "../../public/assets/onboardingIcons/google.png";
import githubIcon from '../../public/assets/onboardingIcons/github.png';
import githubDark from '../../public/assets/onboardingIcons/github_black.png';
import { useTheme } from 'next-themes';
import UserLogin from "@/composables/userLoginFunction";
import {
  emailValidator,
  passwordValidator,
} from "@/composables/emailPasswordValidator";

import { signInWithGithub } from "@/composables/authGithubSigninPopup";
import { PasswordToggle } from "./passwordToggleFunction";
import { signInWithGoogle } from "@/composables/authGoogleSigninPoppup";


function UserLoginComp() {
   const { theme, setTheme } = useTheme();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
          console.log("Logged in", result.message);
        } else {
          console.log("user does not exist", result.message);
        }
      } catch (error) {
        console.log("error", error);
      }
    } else {
      if (validEmail !== true) {
        setEmailError(validEmail);
      } else {
        setEmailError("");
      }

      if (validPassword !== true) {
        setPasswordError(validPassword);
      } else {
        setPasswordError("");
      }
    }
  };

  return (
    <form
      className="space-y-6 p-10 bg-white dark:bg-[#1E1E2A] dark:text-white"
      onSubmit={loginUser}
    >
      <div className="space-y-3">
        <OnboardingHeader
          h1={'Welcome back'}
          p={'Enjoy extra features when you create an account with us.'}
        />

        <div className="flex justify-center space-x-5">
          <button
            onClick={(e) => {
              e.preventDefault();
              signInWithGoogle();
            }}
            className="bg-gray-200 dark:bg-[#363647] flex justify-center items-center p-3 rounded-md w-full shadow-md"
          >
            <Image
              src={googleIcon}
              alt="google_icon"
              className="w-6 h-6 mr-4"
            />
            Create Account with Google
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              signInWithGithub();
            }}
            className="bg-gray-200 dark:bg-[#363647]  flex justify-center items-center p-3 rounded-md w-full shadow-md"
          >
            <Image
              src={theme === 'dark' ? githubIcon : githubDark}
              alt="GitHub icon"
              className="w-7 h-7 mr-4"
            />
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
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full shadow-sm bg-gray-200 border-2 border-gray-300  dark:bg-[#363647] rounded-md p-3"

            placeholder="Enter Email Address"
            onChange={emailChange}
            value={emailAddress}
          />
          {emailError && <p className="text-sm text-red-500">{emailError}</p>}
        </div>

        <div>

          <label htmlFor="password">Password*</label>
          <PasswordToggle
            inputId="password"
            placeholder="Enter password"
            handleInputChange={passwordChange}
            inputValue={password}
          />
          {passwordError && (
            <p className="text-sm text-red-500">{passwordError}</p>
          )}
          <button className="float-right">Forgot password?</button>
        </div>

        <div className="space-y-3">
          <button
            type="submit"
            className="bg-violet-800 text-white text-center font-bold block w-full p-3 rounded-md">
            Log in
          </button>

          <p className="text-center font-semibold">
            {"Don't have an account with us?"}
            <Link
              href="/?view=signup"
              className="text-violet-800 mx-1.5 dark:text-white">
              Create your account
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}
export default UserLoginComp;
