import Image from "next/image";
import Link from "next/link";
import closeIcon from "../../public/assets/onboardingIcons/close_black.png";
import closeIconWhite from "../../public/assets/onboardingIcons/close_light.png";
import { triggerEmailVerification } from "@/composables/authSignupFunction";
import { useTheme } from "next-themes";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import VerificationSuccessful from "./VerificationSuccessful_comp";
import ChangeEmailOverlay from "./changeEmailOverlay_comp";

const VerificationOverlay = ({ email, onClose }) => {
  const { theme, setTheme } = useTheme();
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [isChangeEmailVisible, setChangeEmailVisible] = useState(false);
  const [errors, setErrors] = useState("");

  const handleVerifyEmail = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const response = await triggerEmailVerification(user);
      if (response.success) {
        const verificationCheckInterval = setInterval(async () => {
          await user.reload();

          if (user.emailVerified) {
            clearInterval(verificationCheckInterval);
            setVerificationSuccess(true);
          }
        }, 7000);
      } else {
        setErrors(response.error);
      }
    } else {
      setErrors("No user is signed in");
    }
  };

  const handleEmailChange = () => {
    setChangeEmailVisible(!isChangeEmailVisible);
  };

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50 modal">
      {isChangeEmailVisible ? (
        <ChangeEmailOverlay email={email} onClose={handleEmailChange} />
      ) : verificationSuccess ? (
        <VerificationSuccessful onClose={onClose} />
      ) : (
        <div className="space-y-6 w-3/4  mx-auto  bg-neutral-100 dark:bg-[#2F2F3A] p-9 rounded-2xl drop-shadow-md ">
          <div className="text-blue-600 dark:text-white text-3xl font-extrabold">
            <h1>
              Account Verification
              <span
                className="absolute right-6 cursor-pointer"
                onClick={onClose}
              >
                <Link href="/">
                  <Image
                    src={theme === "dark" ? closeIconWhite : closeIcon}
                    alt="close Icon"
                    className="w-9 h-9"
                  />
                </Link>
              </span>
            </h1>
          </div>

          <p className="dark:text-white">
            A verification link has been sent to
            <span className="text-blue-600"> {email} </span>. Please check your
            inbox and click on the link to complete your registration.
          </p>

          <p className="dark:text-[#5F5BD7]" onClick={handleEmailChange}>
            Change Email
          </p>
          <div className="flex flex-col space-y-3">
            <a
              className="bg-[#5F5BD7] hover:bg-blue-500 text-white px-6 py-3 rounded-md text-center"
              href="#"
              onClick={handleVerifyEmail}
            >
              Verify Email
            </a>
          </div>
          <p className="text-neutral-500">
            Did not receive the mail? Check your spam
          </p>
        </div>
      )}
    </div>
  );
};
export default VerificationOverlay;
