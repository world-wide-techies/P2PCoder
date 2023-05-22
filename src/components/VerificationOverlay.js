const VerificationOverlay = ({ email }) => {
  return (
    <div className="w-full p-3 bg-white">
      <div className="space-y-6 w-full  bg-neutral-100 dark:bg-[#2F2F3A] p-9 rounded-2xl drop-shadow-md ">
        <div className="text-indigo-500 dark:text-white text-3xl font-extrabold">
          <h1>
            Account Verification{" "}
            <span className="absolute right-6 w-5 m-3">
              <a href="#">
                <img
                  src="assets/onboardingIcons/close_black.png"
                  alt="closeIcon"
                ></img>
              </a>
            </span>
          </h1>
        </div>

        <p className="dark:text-white">
          A verification link has been sent to{" "}
          <span className="text-indigo-500">{email}.</span>
        </p>
        <p className="dark:text-white">
          Please check your inbox and click on the link to complete your
          registration.
        </p>
        <div className="flex flex-col space-y-3">
          <a
            className="bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 rounded-md text-center"
            href={`mailto:${email}`}
          >
            Open mail app
          </a>
        </div>
        <p className="text-neutral-500">
          Did not receive the mail? Check you spam
        </p>
      </div>
    </div>
  );
};
export default VerificationOverlay;
