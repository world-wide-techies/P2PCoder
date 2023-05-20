"use client";
import { OnboardingHeader } from "@/components/onboardingHeader";
import UserLoginComp from "@/components/userLogin_comp";
import { useThemeChange } from "@/composables/changeTheme";
import React from "react";


function Home() {
const {theme,handleThemeChange} = useThemeChange()

  return (
    <div
      className={
        theme == "dark"
          ? "dark flex items-center justify-center h-screen w-full dark:text-white "
          : "flex items-center justify-center h-screen w-full "
      }
    >
       <div className="w-1/3">
        <OnboardingHeader
          h1={"Create an Account with us"}
          p={"Where your world becomes a better place"}
        />
      </div>
      <button type="button" onClick={handleThemeChange}>
        Change Theme
      </button> 
      
    </div>
  );
}

export default Home;
