import React from "react";
import reset from "../assets/Icons/Light Mode Icon/reset.png";
import Image from "next/image";
const ForgotPassword = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start bg-white rounded-3xl shadow-lg">
      <span>
        <h3 className="text-blue-500 sm:text-lg font-bold ">Forgot Password</h3>
        <Image src={reset} alt="reset" />
      </span>
      <p className="text-base leading-5 text-blue-950 font-normal">
        Enter your email address to reset your password
      </p>
      <form>
        <label
          className="text-base leading-5 text-blue-950 font-normal"
          htmlFor=""
        >
          Email Address
        </label>
        <input
          type="text"
          placeholder="Enter Email Address"
          className="bg-neutral-50 rounded border-1 border-gray-400"
        />
        <button className="text-white bg-sky-500 rounded-lg w-full text-sm text-center grow">
          Send recovery mail
        </button>
      </form>
    </div>
  );
};

export { ForgotPassword };
