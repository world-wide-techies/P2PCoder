'use client';
import React, { useState } from 'react';
import { OnboardingHeader } from './onboardingHeader';
import Link from 'next/link';
import Image from 'next/image';
import githubIcon from '../../public/assets/onboardingIcons/github.png';
import githubDark from '../../public/assets/onboardingIcons/github_black.png';
import googleIcon from '../../public/assets/onboardingIcons/google.png';
import { PasswordToggle } from './passwordToggleFunction';
import { useTheme } from 'next-themes';

function SignUpComponent() {
  const { theme, setTheme } = useTheme();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <form className="space-y-5 p-6 bg-white dark:bg-[#1E1E2A] w-auto min-w-[600px]">
      <OnboardingHeader
        h1={'Create an account with us'}
        p={'Enjoy extra features when you create an account with us.'}
      />

      <div className="flex justify-between items-center space-x-3 w-full">
        <button className="w-1/2 p-3 bg-gray-200 dark:bg-[#363647]  rounded-lg shadow-lg flex justify-center items-center">
          <Image src={googleIcon} alt="Github Icon" className="w-5 h-5 mr-2" />
          <span>Create account with Google</span>
        </button>
        <button className="w-1/2 p-3 bg-gray-200 dark:bg-[#363647]  rounded-lg shadow-lg flex justify-center items-center">
          <Image
            src={theme === 'dark' ? githubIcon : githubDark}
            alt="Github Icon"
            className="w-5 h-5 mr-2 "
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
            <label className="dark:text-white">First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter First Name"
              className=" p-3 rounded-lg bg-gray-100 dark:bg-[#363647]  w-full"
            />
          </div>

          <div className="flex flex-col w-1/2 justify-start items-start">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter Last Name"
              className=" p-3 rounded-lg bg-gray-100 dark:bg-[#363647] w-full"
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
              className="dark:bg-[#363647] p-3 rounded-lg bg-gray-100 w-full"
            />
          </div>

          <div className="flex flex-col w-1/2 justify-start items-start">
            <label>Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter User Name"
              className="dark:bg-[#363647] p-3 rounded-lg bg-gray-100 w-full"
            />
          </div>
        </div>

        <div className="w-full flex space-x-3">
          <div className="flex flex-col w-1/2 justify-start items-start relative">
            <label>Password*</label>
            <PasswordToggle
              inputId="password"
              inputValue={password}
              setInputValue={setPassword}
              handleInputChange={handlePasswordChange}
              placeholder="Enter Password"
            />
          </div>

          <div className="flex flex-col w-1/2 justify-start items-start relative">
            <label>Confirm Password*</label>
            <PasswordToggle
              inputId="confirm_password"
              inputValue={confirmPassword}
              setInputValue={setConfirmPassword}
              handleInputChange={handleConfirmPasswordChange}
              placeholder="Re-enter Password"
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Link
          href="/"
          className="bg-violet-800 text-white text-center font-bold block w-full p-3 rounded-md">
          Create Account
        </Link>

        <p className="text-center font-semibold ">
          Already have an account?
          <Link
            href="/?view=login"
            className="text-violet-800 ml-1.5 dark:text-white">
            Log in
          </Link>
        </p>
      </div>
    </form>
  );
}

export default SignUpComponent;
