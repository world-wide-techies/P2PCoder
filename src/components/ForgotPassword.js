import Image from 'next/image';
import React from 'react';
import closeWhite from '.././../public/assets/forgotPasswordForm/close_white.png';
import closeBlack from '.././../public/assets/onboardingIcons/close_black.png';
import { useTheme } from 'next-themes';

const ForgotPassword = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-row justify-center items-center w-full ">
      <div className="w-full px-12 py-10 max-w-3xl flex flex-col justify-center gap-y-4 bg-white dark:bg-[#1E1E2A] rounded-3xl shadow-lg">
        <div className="flex flex-row justify-between">
          <h3 className="text-indigo-500 dark:text-white text-3xl font-bold leading-4 ">
            Forgot Password
          </h3>
          <button>
            <Image
              src={theme === 'dark' ? closeWhite : closeBlack}
              alt="closeBtn"
              width={24}
              height={24}
            />
          </button>
        </div>
        <p className="text-base leading-5 text-blue-950 dark:text-white  font-normal">
          Enter your email address to reset your password
        </p>
        <form className="w-full flex flex-col gap-y-4">
          <label
            className="text-base leading-5 text-blue-950 dark:text-white font-normal"
            for="email">
            Email Address
          </label>
          <input
            id="email"
            name="email_address"
            type="email"
            placeholder="Enter Email Address"
            className="max-w-3xl h-10 bg-neutral-100 dark:bg-[#363647] rounded  px-1"
          />
          <button className="mt-4 w-full h-10 max-w-3xl text-white bg-indigo-500 rounded-lg text-sm text-center grow">
            Send recovery mail
          </button>
        </form>
      </div>
    </div>
  );
};

export { ForgotPassword };
