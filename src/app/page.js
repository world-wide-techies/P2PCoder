"use client";
import { ForgotPassword } from "@/components/ForgotPassword";
import { OnboardingHeader } from "@/components/onboardingHeader";
import UserLoginComp from "@/components/userLogin_comp";
import { useThemeChange } from "@/composables/changeTheme";
import React from "react";

function Home() {
  const { theme, handleThemeChange } = useThemeChange();

  return (
    <div
      className={
        theme == "dark"
          ? "dark flex items-center justify-center h-screen w-full dark:text-white "
          : "flex items-center justify-center h-screen w-full "
      }
    ></div>
  );
}

export default Home;
