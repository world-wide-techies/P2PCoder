"use client";
import React, { useState } from "react";
import { OnboardingHeader } from "./onboardingHeader";
import Link from "next/link";
import Image from "next/image";
import githubIcon from "../../public/assets/onboardingIcons/github.png";
import githubDark from "../../public/assets/onboardingIcons/github_black.png";
import googleIcon from "../../public/assets/onboardingIcons/google.png";
import { PasswordToggle } from "./passwordToggleFunction";
import { signInWithGithub } from "@/composables/authGithubSigninPopup";
import { signInWithGoogle } from "@/composables/authGoogleSigninPoppup";
import { signupFormValidation } from "@/composables/signupFormValidation";
import {
  authSignUp,
  isUsernameAvailable,
} from "@/composables/authSignupFunction";

import { useTheme } from "next-themes";

function SignUpComponent() {
  const { theme, setTheme } = useTheme();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({});
  const [usernameAvailable, setUsernameAvailable] = useState(null);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

    if (name === "username") {
      try {
        const isAvailable = await isUsernameAvailable(value);
        setUsernameAvailable(isAvailable);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = signupFormValidation(user);

    if (Object.keys(formErrors).length === 0) {
      try {
        const isAvailable = await isUsernameAvailable(user.username);
        if (isAvailable) {
          const createdUser = await authSignUp(
            user.firstname,
            user.email,
            user.password,
            user.username
          );
          // Use .push() or .navigate() ?
          console.log("user signed up", createdUser);
        } else {
          setUsernameAvailable(false);
        }
      } catch (error) {
        setErrors({ firebaseError: error.message });
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form
      className="space-y-5 p-6 bg-white dark:bg-[#1E1E2A] w-auto min-w-[600px]"
      onSubmit={handleSubmit}
    >
      <OnboardingHeader
        h1={"Create an account with us"}
        p={"Enjoy extra features when you create an account with us."}
      />

      <div className="flex justify-between items-center space-x-3 w-full">
        <button
          onClick={(e) => {
            e.preventDefault();
            signInWithGoogle();
          }}
          className="w-1/2 p-3 bg-gray-200 dark:bg-[#363647]  rounded-lg shadow-lg flex justify-center items-center"
        >
          <Image src={googleIcon} alt="Github Icon" className="w-5 h-5 mr-2" />
          <span>Create account with Google</span>
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            signInWithGithub();
          }}
          className="w-1/2 p-3 bg-gray-200  dark:bg-[#363647] rounded-lg shadow-lg flex justify-center items-center"
        >
          <Image
            src={theme === "dark" ? githubIcon : githubDark}
            alt="Github Icon"
            className="w-5 h-5 mr-2"
          />

          <span>Create account with Github</span>
        </button>
      </div>

      <div className="flex items-center text-center">
        <div className="border-b-2 border-gray-300 w-full relative flex justify-center"></div>
        <p className="text-black dark:text-white w-1/6">OR</p>
        <div className="border-b-2 border-gray-300 w-full relative flex justify-center"></div>
      </div>

      <div className="space-y-3">
        <div className="w-full flex space-x-3">
          <div className="flex flex-col w-1/2 justify-start items-start">
            <label htmlFor="firstname" className="dark:text-white">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={user.firstname}
              onChange={handleChange}
              aria-label="firstname"
              placeholder="Enter First Name"
              className={`border ${
                errors.firstname ? "border-[#ec6d6a]" : "border-none"
              } p-3 rounded-lg bg-[#2F2F3A] w-full`}
            />
            {errors.firstname && (
              <span className="text-[#ec6d6a] text-sm mt-2 font-light">
                {errors.firstname}
              </span>
            )}
          </div>

          <div className="flex flex-col w-1/2 justify-start items-start">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={user.lastname}
              onChange={handleChange}
              aria-label="lastname"
              placeholder="Enter Last Name"
              className={`border ${
                errors.lastname ? "border-[#ec6d6a]" : "border-none"
              } p-3 rounded-lg bg-[#2F2F3A] w-full`}
            />
            {errors.lastname && (
              <span className="text-[#ec6d6a] text-sm mt-2 font-light">
                {errors.lastname}
              </span>
            )}
          </div>
        </div>

        <div className="w-full flex space-x-3">
          <div className="flex flex-col w-1/2 justify-start items-start">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              name="email"
              id="email"
              value={user.email}
              onChange={handleChange}
              aria-label="email"
              placeholder="Enter Email Address"
              className={`border ${
                errors.email ? "border-[#ec6d6a]" : "border-none"
              } p-3 rounded-lg bg-[#2F2F3A] w-full`}
            />
            {errors.email && (
              <span className="text-[#ec6d6a] text-sm mt-2 font-light">
                {errors.email}
              </span>
            )}
            {errors.firebaseError && (
              <span className="text-[#ec6d6a] text-sm mt-2 font-light">
                Email already in use
              </span>
            )}
          </div>

          <div className="flex flex-col w-1/2 justify-start items-start">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={user.username}
              onChange={handleChange}
              aria-label="username"
              placeholder="Enter User Name"
              className={`border ${
                user.username !== "" &&
                (errors.username || usernameAvailable === false)
                  ? "border-[#ec6d6a]"
                  : usernameAvailable !== "" &&
                    usernameAvailable &&
                    !errors.username
                  ? "border-green-500"
                  : "border-none"
              } p-3 rounded-lg bg-[#2F2F3A] w-full`}
            />
            {errors.username && (
              <span className="text-[#ec6d6a] text-sm mt-2 font-light">
                {errors.username}
              </span>
            )}
            {!errors.username && !usernameAvailable && user.username !== "" && (
              <span className="text-[#ec6d6a] text-sm mt-2 font-light">
                Username is not available
              </span>
            )}
            {!errors.username && usernameAvailable && user.username !== "" && (
              <span className="text-[#21e427] text-sm mt-2 font-light">
                Username available
              </span>
            )}
          </div>
        </div>

        <div className="w-full flex space-x-3">
          <div
            className={`flex flex-col w-1/2 justify-start items-start relative ${
              errors.password ? "border-[#ec6d6a]" : ""
            }`}
          >
            <label htmlFor="password">Password</label>
            <PasswordToggle
              inputId="password"
              name="password"
              aria-label="password"
              inputValue={user.password}
              handleInputChange={handleChange}
              placeholder="Enter Password"
              customClass={`border ${
                errors.password ? "border-[#ec6d6a]" : "border-none"
              } p-3 rounded-lg bg-[#2F2F3A] w-full`}
            />
            {errors.password && (
              <span className="text-[#ec6d6a] text-sm mt-2 font-light">
                {errors.password}
              </span>
            )}
          </div>

          <div className="flex flex-col w-1/2 justify-start items-start relative">
            <label htmlFor="confirm_password">Confirm Password</label>
            <PasswordToggle
              inputId="confirm_password"
              aria-label="confirm_password"
              inputValue={user.confirm_password}
              handleInputChange={handleChange}
              placeholder="Re-enter Password"
              customClass={`border ${
                errors.confirm_password ? "border-[#ec6d6a]" : "border-none"
              } p-3 rounded-lg bg-[#2F2F3A] w-full`}
            />
            {errors.confirm_password && (
              <span className="text-[#ec6d6a] text-sm mt-2 font-light">
                {errors.confirm_password}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <button
          type="submit"
          className="bg-[#5f5bd7] text-white text-center font-semibold block w-full p-3 rounded-md"
        >
          Create Account
        </button>

        <p className="text-center font-normal">
          Already have an account?
          <Link
            href="/?view=login"
            className="text-violet-800 ml-1.5 dark:text-white"
          >
            Log in
          </Link>
        </p>
      </div>
    </form>
  );
}

export default SignUpComponent;
