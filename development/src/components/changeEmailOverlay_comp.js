import Image from "next/image";
import Link from "next/link";
import closeIcon from "../../public/assets/onboardingIcons/close_black.png";
import closeIconWhite from "../../public/assets/onboardingIcons/close_light.png";
import { triggerEmailVerification } from "@/composables/authSignupFunction";
import VerificationSuccessful from "./VerificationSuccessful_comp";
import { useTheme } from "next-themes";
import { getAuth, updateEmail } from "firebase/auth";
import { useState } from "react";
import { appFirestore } from "@/composables/firebaseConfig/config";
import { doc, setDoc } from "firebase/firestore";

const ChangeEmailOverlay = ({ onClose }) => {
  const { theme, setTheme } = useTheme();
  const [newEmail, setNewEmail] = useState("");
  const [updateVerificationSuccess, setUpdateVerificationSuccess] =
    useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleUpdateVerifyEmail = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      try {
        await updateEmail(user, newEmail);

        const response = await triggerEmailVerification(user);
        if (response.success) {
          const verificationCheckInterval = setInterval(async () => {
            await user.reload();

            if (user.emailVerified) {
              clearInterval(verificationCheckInterval);
              setUpdateVerificationSuccess(true);
              const newDocRef = doc(appFirestore, "CODERS", user.uid);
              await setDoc(newDocRef, { email: newEmail }, { merge: true });
            }
          }, 7000);
        } else {
          setErrorMessage({ firebaseError: response.error });
        }
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setErrorMessage({
            firebaseError:
              "The new email is already in use by another account.",
          });
        } else {
          setErrorMessage({
            firebaseError: "Error updating email: " + error.message,
          });
        }
      }
    } else {
      setErrorMessage("No user is signed in");
    }
  };

  return updateVerificationSuccess ? (
    <VerificationSuccessful onClose={onClose} />
  ) : (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50 modal">
      <div className="space-y-6 w-3/4  mx-auto  bg-neutral-100 dark:bg-[#2F2F3A] p-9 rounded-2xl drop-shadow-md ">
        <div className="text-blue-600 dark:text-white text-3xl font-extrabold">
          <h1>
            Change Email Address
            <span className="absolute right-6 cursor-pointer" onClick={onClose}>
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

        <p className="dark:text-white">Re-enter email address</p>

        <div className="space-y-8">
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              aria-label="email"
              name="email"
              id="email"
              className="p-3 border-[1px] border-[#DCDCE5] rounded-xl dark:bg-[#363647] bg-[#ebebf0] w-full h-[48px] text-sm placeholder-[#67667A] font-normal focus:ring-2 focus:ring-[#5F5BD7] focus:border-transparent outline-none"
              placeholder="Enter Email Address"
              onChange={(e) => setNewEmail(e.target.value)}
              value={newEmail}
            />
            {errorMessage && (
              <span className="text-[#ec6d6a] text-sm mt-2 font-light">
                {errorMessage.firebaseError}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <a
            className="bg-[#5F5BD7] hover:bg-blue-500 text-white px-6 py-3 rounded-md text-center"
            href="#"
            onClick={handleUpdateVerifyEmail}
          >
            Verify Email
          </a>
        </div>
      </div>
    </div>
  );
};
export default ChangeEmailOverlay;
