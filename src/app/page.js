"use client";
import { OnboardingHeader } from "@/components/onboardingHeader";
import React from "react";
import { useEffect, useState } from "react";

function Home() {
  const [theme, setTheme] = useState(
    localStorage.getItem("appTheme") || "light"
  );
  const handleThemeChange = () => {
    if (theme == "light") {
      localStorage.setItem("appTheme", "dark");
      setTheme(localStorage.getItem("appTheme"));
    } else {
      localStorage.setItem("appTheme", "light");
      setTheme(localStorage.getItem("appTheme"));
    }
  };
  useEffect(() => {}, [theme]);
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
