<<<<<<< Updated upstream
const VerificationOverlay = () => {
  return (
    <div className="absolute p-2">
=======
"use client";

const VerificationOverlay = ({ email }) => {
  //testing callback for email
  email = "kharunaking@gmail.com";
  const redirectToEmail = () => {
    const emailLink = `mailto:${email}`;

    window.location.href = emailLink;
  };
  return (
    <div className="absolute w-full p-2">
>>>>>>> Stashed changes
      <div className="space-y-6 w-full bg-neutral-100 p-9 rounded-2xl ">
        <div className="text-blue-600 dark:text-white text-3xl font-extrabold">
          Account Verification
        </div>
<<<<<<< Updated upstream
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
=======

        <p>
          A verification link has been sent to{" "}
          <span className="text-blue-600">{email}.</span>
        </p>
        <p>
          Please check your inbox and click on the link to complete your
          registration.
        </p>
        <div className="flex flex-col space-y-3">
          <a
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md text-center"
            href="#"
            onClick={redirectToEmail}
          >
            Open mail app
          </a>
        </div>
        <p className="text-neutral-500">
          Did not receive the mail? Check you spam
>>>>>>> Stashed changes
        </p>
      </div>
    </div>
  );
};
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
export default VerificationOverlay;
