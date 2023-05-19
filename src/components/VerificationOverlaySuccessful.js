const VerificationOverlaySuccessful = () => {
    return (
      <div className="space-y-6 w-full bg-neutral-100 p-9 ">
        <div className="text-blue-600 dark:text-white text-3xl font-extrabold">
          Verification successfully
        </div>
        <p>Account has been successfully verified with Carai</p>
  
        <div className="flex flex-col space-y-3">
          <button className="bg-blue-600 hover:bg-blue-600 text-white px-6 py-3 rounded-md">
            Continue to account setup
          </button>
        </div>
      </div>
    );
  };
  
  export default VerificationOverlaySuccessful;
  