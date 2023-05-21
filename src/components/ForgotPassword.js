import React from "react";
const ForgotPassword = () => {
  return (
    <div className="flex flex-row justify-center items-center w-full ">
      <div className="w-full px-12 py-10 max-w-3xl flex flex-col justify-center items-start gap-y-4 bg-white rounded-3xl shadow-lg">
        <div className="flex justify-center">
          <h3 className="text-indigo-500 text-3xl font-bold leading-4 ">
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
            for="email"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email_address"
            type="email"
            placeholder="Enter Email Address"
            className="max-w-3xl h-10 bg-neutral-100 rounded border-2 border-white-1 px-1"
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
