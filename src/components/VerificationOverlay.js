const VerificationOverlay = () => {
    return (
      <div className="absolute p-2">
        <div className="space-y-6 w-full bg-neutral-100 p-9 rounded-2xl ">
          <div className="text-blue-600 dark:text-white text-3xl font-extrabold">
            Account Verification
          </div>
          <p>
            A verification link has been sent to{" "}
            <span className="text-blue-600">augustine@example.com.</span> Please
            check your inbox and click on the link to complete your registration.
          </p>
          <div>
          <a href="#" className="text-blue-600 underline  font-bold">
            Change Email
          </a>
          </div>
          <div className="flex flex-col space-y-3">
            <button className="bg-blue-600 hover:bg-blue-600 text-white px-6 py-3 rounded-md">
              Open mail app
            </button>
          </div>
          <p className="text-neutral-500">
            Did not receive the mail? Check your spam
            <span className="absolute  right-12">
              Resend mail in <span className="text-black">00:45</span>
            </span>
          </p>
        </div>
      </div>
    );
  };
  
  export default VerificationOverlay;
  