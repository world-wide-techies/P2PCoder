import React from "react";
import reset from "../assets/Icons/Light Mode Icon/reset.png";
import Image from "next/image";
const ForgotPassword_comp = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start bg-[#F3F3F6] rounded-3xl shadow-lg">
      <span>
        <h3 className="text-blue-500 sm:text-lg ">Forgot Password</h3>
        <Image src={reset} alt="reset" />
      </span>
      <p className="text-base leading-5 text-[#0E0C46] font-normal">
        Enter your email address to reset your password
      </p>
      <form>
        <label
          className="text-base leading-5 text-[#0E0C46] font-normal"
          htmlFor=""
        >
          Email Address
        </label>
        <input
          type="text"
          placeholder="Enter Email Address"
          className="bg-[#EBEBF0] rounded border-1 border-[#DCDCE5]"
        />
        <button className="text-white bg-[#5F5BD7] rounded-lg w-full text-sm text-center grow">
          Send recovery mail
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword_comp;
