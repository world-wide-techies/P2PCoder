"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { generatePeerIdCharacter } from "../../src/composables/peerIdGenerator";
import { useTheme } from "next-themes";
import closeIconBlack from "../../public/assets/onboardingIcons/close_black.png";
import closeIconWhite from "../../public/assets/onboardingIcons/close_light.png";

function PeerId({ onClose }) {
  const { theme, setTheme } = useTheme();

  const [copyMessage, setCopyMessage] = useState("");
  const [peerSessionId, setPeerSessionId] = useState("");

  useEffect(() => {
    setPeerSessionId(generatePeerIdCharacter());
  }, []);

  const handleClose = () => {
    onClose();
  };

  const handleCopyId = async () => {
    try {
      await navigator.clipboard.writeText(peerSessionId);
      setCopyMessage("ID copied to clipboard:", peerSessionId);
    } catch (error) {
      setCopyMessage("Failed to copy ID to clipboard:", error);
    }
  };

  return (
    <div className="bg-white text-[#0E0C46] dark:bg-[#504F5F]  dark:text-white p-4 flex flex-col rounded-lg">
      <div className="flex w-full justify-between">
        <div className="font-nohemi font-bold leading-8">
          Peer Session Created
        </div>
        <button onClick={handleClose}>
          <Image
            src={theme === "dark" ? closeIconWhite : closeIconBlack}
            className="w-5 h-5"
          />
        </button>
      </div>
      <div className="flex justify-between my-3">
        <div className="flex flex-col">
          <div className="font-nohemi font-normal text-sm leading-4 ">
            PeerSession ID
          </div>
          <div className="font-semibold text-lg font-nohemi leading-5">
            {peerSessionId}
          </div>
        </div>
        <button
          className="bg-[#5F5BD7] w-24 h-9 rounded-lg flex justify-center my-3 items-center"
          onClick={handleCopyId}
        >
          <svg
            width="20"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.71387 6.21992V8.24492C7.71387 9.93242 7.03887 10.6074 5.35137 10.6074H3.32637C1.63887 10.6074 0.963867 9.93242 0.963867 8.24492V6.21992C0.963867 4.53242 1.63887 3.85742 3.32637 3.85742H5.35137C7.03887 3.85742 7.71387 4.53242 7.71387 6.21992Z"
              stroke="white"
              strokeWidth="0.964286"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6074 3.32637V5.35137C10.6074 7.03887 9.93242 7.71387 8.24492 7.71387H7.71456V6.21922C7.71456 4.53172 7.03956 3.85672 5.35206 3.85672H3.85742V3.32637C3.85742 1.63887 4.53242 0.963867 6.21992 0.963867H8.24492C9.93242 0.963867 10.6074 1.63887 10.6074 3.32637Z"
              stroke="white"
              strokeWidth="0.964286"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="font-normal text-sm leading-4 text-white font-nohemi">
            Copy ID
          </div>
        </button>
      </div>
      <div className="font-normal text-black text-sm leading-4 font-nohemi dark:text-white">
        {copyMessage}
      </div>
      <button className=" font-nohemi text-white rounded-lg bg-[#5F5BD7] w-full h-12">
        Continue
      </button>
    </div>
  );
}

export default PeerId;
