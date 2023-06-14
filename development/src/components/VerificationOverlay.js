import Image from "next/image";
import Link from "next/link";
import closeIcon from "../../public/assets/onboardingIcons/close_black.png";
import closeIconWhite from "../../public/assets/onboardingIcons/close_light.png";
import { triggerEmailVerification } from "@/composables/authSignupFunction";
import { useTheme } from "next-themes";

const VerificationOverlay = ({ email }) => {
  const { theme, setTheme } = useTheme();

  // const sendEmailVerification = async (e) => {
  //   e.preventDefault();

  //   const result = await triggerEmailVerification(user);
  //   if (result.success) {
  //     console.log("Verified");
  //   } else {
  //     console.log("Error", result.error);
  //   }
  // };

  return (
    <div className="w-full">
      <div className="space-y-6 w-full  bg-neutral-100 dark:bg-[#2F2F3A] p-9 rounded-2xl drop-shadow-md ">
        <div className="text-blue-600 dark:text-white text-3xl font-extrabold">
          <h1>
            Account Verification{" "}
            <span className="absolute right-6 ">
              <Link href="/login">
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
          A verification link has been sent to{" "}
          <span className="text-blue-600">{email}</span>
        </p>
        <p className="dark:text-white">
          Please check your inbox and click on the link to complete your
          registration.
        </p>
        <div className="flex flex-col space-y-3">
          <a
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md text-center"
            href={`mailto:${email}`}
            onClick={sendEmailVerification}
          >
            Open mail app
          </a>
        </div>
        <p className="text-neutral-500">
          Did not receive the mail? Check your spam
        </p>
      </div>
    </div>
  );
};
export default VerificationOverlay;
