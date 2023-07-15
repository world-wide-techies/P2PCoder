"use client";
import React, { useEffect, useState } from "react";
import { OnboardingHeader } from "./onboardingHeader";
import Link from "next/link";
import Image from "next/image";
import googleIcon from "../../public/assets/onboardingIcons/google.png";
import github_lightMode from "../../public/assets/onboardingIcons/github_lightMode.png";
import github_darkMode from "../../public/assets/onboardingIcons/github_darkMode.png";
import { useTheme } from "next-themes";
import UserLogin from "@/composables/userLoginFunction";
import {
  emailValidator,
  passwordValidator,
} from "@/composables/emailPasswordValidator";
import { useGithubSignin } from "@/composables/authGithubSigninPopup";
import { PasswordToggle } from "./passwordToggleFunction";
import closeIcon from "../../public/assets/onboardingIcons/close_light.png";
import closeDark from "../../public/assets/onboardingIcons/closecircledark.png";
import { useGoogleSignin } from "@/composables/authGoogleSigninPoppup";
import ErrorModal from "./errorModal_comp";
import { useRouter } from "next/navigation";

function UserLoginComp({ onClose }) {
  const { signinWithGithub, githubError } = useGithubSignin();
  const { signinWithGoogle, googleError } = useGoogleSignin();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setErrorMessage(githubError || googleError);
    if (errorMessage !== "") {
      setTimeout(() => {
        setErrorMessage("");
      }, 6000);
    }
  }, [githubError, googleError]);

  const handleClose = () => {
    setErrorMessage("");
  };

  const { theme, setTheme } = useTheme();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const router = useRouter();
  const [closeLogin, setCloseLogin] = useState(false);

  const emailChange = (e) => {
    setEmailAddress(e.target.value);
    setEmailError(false);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(false);
  };

  const handleCloseLogin = () => {
    setCloseLogin(true);
    router.push("/");
  };

  const loginUser = async (e) => {
    e.preventDefault();

    const validEmail = emailValidator(emailAddress);
    const validPassword = passwordValidator(password);

    if (validEmail === true && validPassword === true) {
      try {
        const result = await UserLogin(emailAddress, password);
        if (result.loggedIn) {
          console.log("Logged in", result.message);
          handleCloseLogin();
        } else {
          setErrorMessage(result.message);
        }
      } catch (error) {
        let customMessage;
        if (error.code === "auth/user-not-found") {
          customMessage = "No user with this email found.";
        } else if (error.code === "auth/wrong-password") {
          customMessage = "Wrong password provided.";
        } else if (error.code === "auth/too-many-requests") {
          customMessage =
            "Too many unsuccessful login attempts. Please try again later.";
        } else {
          customMessage = "An error occurred during login.";
        }
        setErrorMessage(customMessage);
      }
    } else {
      if (validEmail !== true) {
        setEmailError(validEmail);
      } else {
        setEmailError("");
      }

      if (validPassword !== true) {
        setPasswordError(validPassword);
      } else {
        setPasswordError("");
      }
    }
  };

  return (
    <form
      className="space-y-6 p-10 bg-[#F3F3F6] dark:bg-[#1E1E2A] dark:text-white w-auto min-w-[700px] font-nohemi rounded-[24px]"
      onSubmit={loginUser}
    >
      <div className="space-y-3">
        <div className="flex justify-between">
          <OnboardingHeader
            h1={"Welcome back"}
            p={"Enjoy extra features when you create an account with us."}
          />

          <button
            type="button"
            onClick={handleCloseLogin}
            className="w-6 h-6 mr-4 mt-2"
          >
            <Image
              src={theme === "dark" ? closeIcon : closeDark}
              alt="close icon"
            />
          </button>
        </div>

        <div className="flex flex-row justify-between gap-3">
          <button
            onClick={async (e) => {
              e.preventDefault();
              const response = await signinWithGoogle();
              response.success ? router.push("/") : "";
            }}
            className="flex flex-row flex-nowrap justify-center gap-2 bg-[#DCDCE5] dark:bg-[#363647] items-center px-3 py-3 rounded-md w-full"
          >
            <Image src={googleIcon} alt="google_icon" className="w-6 h-auto" />
            <p className="text-[14px]">Sign in with Google</p>
          </button>
          <button
            onClick={async (e) => {
              e.preventDefault();
              signinWithGithub();
              const response = await signinWithGoogle();
              response.success ? router.push("/") : "";
            }}
            className="flex flex-row flex-nowrap justify-center gap-2 bg-[#DCDCE5] dark:bg-[#363647] items-center px-3 py-3 rounded-md w-full"
          >
            <Image
              src={theme === "dark" ? github_darkMode : github_lightMode}
              alt="google_icon"
              className="w-6 h-auto"
            />
            <p className="text-[14px]">Sign in with Github</p>
          </button>
        </div>

        <div className="flex items-center text-center">
          <div className="border-b-2 border-[#B6B6C9] w-full relative flex justify-center"></div>
          <p className="flex justify-center w-1/6">OR</p>
          <div className="border-b-2 border-[#B6B6C9] w-full relative flex justify-center"></div>
        </div>

        <div className="space-y-8">
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              aria-label="email"
              name="email"
              id="email"
              className={`p-3 border-[1px] border-[#DCDCE5] rounded-xl dark:bg-[#363647] bg-[#ebebf0] w-full h-[48px] text-sm placeholder-[#67667A] font-normal focus:ring-2 focus:ring-[#5F5BD7] focus:border-transparent outline-none ${
                emailError && "border border-[#ec6d6a]"
              }`}
              placeholder="Enter Email Address"
              onChange={emailChange}
              value={emailAddress}
            />
            {emailError && <p className="text-sm text-red-500">{emailError}</p>}
            {loginError && <p className="text-sm text-red-500">{loginError}</p>}
          </div>

          <div>
            <label htmlFor="password">Password*</label>
            <PasswordToggle
              inputId="password"
              aria-label="password"
              placeholder="Enter password"
              handleInputChange={passwordChange}
              inputValue={password}
              customClass={`p-3 border-[1px] border-[#DCDCE5] rounded-xl dark:bg-[#363647] bg-[#ebebf0] w-full h-[48px] text-sm placeholder-[#67667A] font-normal focus:ring-2 focus:ring-[#5F5BD7] focus:border-transparent outline-none ${
                passwordError && "border border-[#ec6d6a]"
              }`}
            />
            {passwordError && (
              <p className="text-sm text-red-500">{passwordError}</p>
            )}
            <Link href={"/?view=recoveraccount"} className="float-right mb-6">
              Forgot password?
            </Link>
          </div>

          <div className="space-y-3">
            <button
              type="submit"
              className="bg-[#5F5BD7] text-white text-center font-bold block w-full p-3 rounded-md"
            >
              Log in
            </button>

            <p className="text-center">
              {"Don't have an account with us?"}
              <Link
                href="/?view=signup"
                className="text-violet-800 mx-1.5 dark:text-white font-bold"
              >
                Create your account
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ErrorModal
        errorMessage={errorMessage}
        style={"fixed  top-0 right-0 mr-2 "}
        onClose={() => handleClose()}
      />
    </form>
  );
}
export default UserLoginComp;
