"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import HTML from "../../public/assets/codeEditorIcons/symbol.png";
import CSS from "../../public/assets/codeEditorIcons/CSS3.png";
import JS from "../../public/assets/codeEditorIcons/Group.png";
import closeIconWhite from "../../public/assets/onboardingIcons/close_light.png";
import closeIconBlack from "../../public/assets/onboardingIcons/close_black.png";
import React, { useState } from "react";

function PeerSession() {
  const [activeLanguage, setActiveLanguage] = useState("");
  const [sessionName, setSessionName] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {};

  const handleClose = () => {
    setIsOpen(false);
  };
  if (!isOpen) {
    return null;
  }

  const theme = useTheme();

  return (
    <div className="bg-white text-[#0E0C46] dark:bg-[#504F5F] p-6">
      <div className=" flex flex-col">
        <div className="flex justify-between">
          <div className=" font-bold text-3xl leading-8 font-nohemi">
            New Peer Session
          </div>
          <button onClick={handleClose}>
            <Image
              src={theme === "dark" ? closeIconWhite : closeIconBlack}
              className="w-5 h-5"
            />
          </button>
        </div>
        <div>
          <div className="text-base text-[#0E0C46] font-nohemi font-semibold mt-8 leading-5">
            Session Name
          </div>
          <input
            type="text"
            name="sessionNom"
            id="sessionNom"
            value={sessionName}
            onChange={(e) => setSessionName(e.target.value)}
            placeholder="Enter Session Name"
            className="py-3 mt-2 mb-4 px-4 h-12 w-full font-nohemi dark:bg-[#1E1E2A] font-normal text-sm bg-[#EBEBF0] text-[#67667A] rounded-lg"
          />
        </div>
        <div>
          <div className=" font-bold mb-4 text-3xl leading-8 font-nohemi">
            Select Language
          </div>
          <div
            className="flex justify-between "
            value={activeLanguage}
            onChange={(e) => setActiveLanguage(e.target.value)}
          >
            <div
              onClick={() => setActiveLanguage("html")}
              className={` w-32 h-32 flex justify-center items-center flex-col  shadow-md shadow-black rounded-md ${
                activeLanguage === "html"
                  ? "bg-blue-500 text-white"
                  : "  bg-gray-200 dark:bg-[#3D3D48]"
              }`}
            >
              <Image src={HTML} className="w-8 h-9 mb-4" />
              <div className="text-[#5F5BD7] font-nohemi font-bold text-xl">
                HTML
              </div>
            </div>
            <div
              onClick={() => setActiveLanguage("css")}
              className={` w-32 h-32 flex justify-center items-center shadow-md shadow-black flex-col rounded-md ${
                activeLanguage === "css"
                  ? "bg-blue-500 text-white "
                  : " bg-gray-200 dark:bg-[#3D3D48]"
              }`}
            >
              <Image src={CSS} alt="language-icon" className="w-8 h-8 mb-4" />
              <p className="text-[#5F5BD7] font-nohemi font-bold text-xl">
                CSS
              </p>
            </div>
            <div
              onClick={() => setActiveLanguage("javascript")}
              className={` w-32 h-32 flex justify-center shadow-md shadow-black items-center flex-col rounded-md ${
                activeLanguage === "javascript"
                  ? "bg-blue-500 text-white"
                  : " bg-gray-200 dark:bg-[#3D3D48]"
              }`}
            >
              <Image src={JS} alt="language-icon" className="w-8 h-9 mb-4" />
              <p className="text-[#5F5BD7] font-nohemi font-bold text-xl">JS</p>
            </div>
          </div>
        </div>

        <button className="w-full py-7 px-6 text-white mt-12 rounded-lg bg-[#5F5BD7] text-center font-normal text-lg font-nohemi">
          Create Peer Session
        </button>
      </div>
    </div>
  );
}

export { PeerSession, sessionName, activeLanguage };
