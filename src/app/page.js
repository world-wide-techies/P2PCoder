"use client";
import { OnboardingHeader } from "@/components/onboardingHeader";
import UserLoginComp from "@/components/userLogin_comp";
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
    ></div>
  );
}

export default Home;
