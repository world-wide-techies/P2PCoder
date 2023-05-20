import React from "react";
const ForgotPassword = () => {
  return (
    <div className="flex flex-row justify-center items-center align-middle w-full">
      <div className="w-full max-w-3xl flex flex-col justify-center items-start gap-y-4 bg-white rounded-3xl shadow-lg">
        <div className="flex justify-center">
          <h3 className="text-indigo-500 text-3xl font-bold ">
            Forgot Password
          </h3>
          <button></button>
        </div>
        <p className="text-base leading-5 text-blue-950 font-normal">
          Enter your email address to reset your password
        </p>
        <form className="w-full flex flex-col gap-y-4">
          <label
            className="text-base leading-5 text-blue-950 font-normal"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email_address"
            type="email"
            placeholder="Enter Email Address"
            className="max-w-3xl bg-neutral-50 rounded border-2 border-gray-400"
          />
          <button className="w-full max-w-3xl text-white bg-indigo-500 rounded-lg text-sm text-center grow">
            Send recovery mail
          </button>
        </form>
      </div>
    </div>
  );
};

export { ForgotPassword };
