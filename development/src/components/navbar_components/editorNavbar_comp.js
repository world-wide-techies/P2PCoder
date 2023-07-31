"use client";
import { useState, useContext, useEffect } from "react";
import AuthNavControls from "./authNavControls_comp";
import Image from "next/image";
import moon from "../../../public/assets/onboardingIcons/moon.png";
import sun from "../../../public/assets/onboardingIcons/sun.png";
import { useTheme } from "next-themes";
import { useTabContext } from "@/composables/tabContext";
import { Suspense } from "react";
import userIcon from "../../../public//assets/authNavBarControls/peers-2.png";
import { isUserSignedIn } from "@/composables/verifySignedIn";
import { appAuth } from "@/composables/firebaseConfig/config";
import Link from "next/link";
import { useAuthContext } from "@/composables/authContext";

function EditorNavBar() {
  const { theme, setTheme } = useTheme();
  const { items } = useTabContext();
  const { currentUser } = useAuthContext();

  return (
    <main className="font-nohemi">
      <div className="w-full  top-0 p-3 bg-[#F3F3F6] dark:bg-[#2F2F3A]">
        <div className="flex w-[98%] mx-auto justify-between items-center">
          <h1 className="dark:text-white text-[#5F5BD7] uppercase font-bold text-4xl">
            Carai
          </h1>
          {currentUser ? (
            <div className="flex justify-end space-x-4 items-center">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Image alt="moon" src={moon} width={20} height={20} />
                ) : (
                  <Image alt="sun" src={sun} width={20} height={20} />
                )}
              </button>
              <button onClick={() => {}}>
                <Image
                  src={userIcon}
                  width={50}
                  height={50}
                  alt="navigation icon"
                />
              </button>
            </div>
          ) : (
            <div className="flex justify-end">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Image alt="sun" src={sun} width={18} height={18} />
                ) : (
                  <Image alt="moon" src={moon} width={20} height={20} />
                )}
              </button>
              {!currentUser &&
                (items.length > 1 || items[0]?.title !== "Welcome") && (
                  <>
                    <Link
                      href={"/?view=signup"}
                      className="ml-6 mr-3 py-3 px-6 rounded-lg bg-[#5F5BD7] text-white text-lg font-normal flex items-center"
                    >
                      Sign Up
                    </Link>
                    <Link
                      href={"/?view=login"}
                      className=" py-3 px-6 rounded-lg  text-lg font-normal flex items-center text-[#121212] bg-[#CDCDDA]"
                    >
                      Log In
                    </Link>
                  </>
                )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default EditorNavBar;
