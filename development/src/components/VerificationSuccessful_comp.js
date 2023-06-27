import Link from "next/link";
import Image from "next/image";
import closeIconBlack from "../../public/assets/onboardingIcons/close_black.png";
import closeIconWhite from "../../public/assets/onboardingIcons/close_light.png";
import { useTheme } from "next-themes";
import { useState } from "react";

function VerificationSuccessful() {
  const { theme, setTheme } = useTheme();
  const [showOverlay, setShowOverlay] = useState(true);

  const handleCloseForm = () => {
    setShowOverlay(false);
    router.push("/");
  };

  return (
    <div className="space-y-6">
      <div className=" p-9 rounded-2xl drop-shadow-md bg-white dark:bg-[#2F2F3A] ">
        <div className="flex justify-between ">
          <h1 className="text-blue-500 dark:text-white font-bold text-5xl">
            Verification Successful
          </h1>
          <Link href="/login">
            <Image
              src={theme === "dark" ? closeIconWhite : closeIconBlack}
              alt="close Icon"
              className="w-9 h-9"
              onClick={handleCloseForm}
            />
          </Link>
        </div>
        <p className="my-6 text-2xl font-semibold">
          Account has been successfully verified with Carai
        </p>
        <Link
          href="/?view=login"
          className="hover:bg-blue-500 bg-violet-800 text-white text-center font-bold block w-full p-2 rounded-lg"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}
export default VerificationSuccessful;
