"use client";
import Image from "next/image";
import React from "react";

const btnIcon = [
  "/assets/authNavBarControls/save.png",
  "/assets/authNavBarControls/save-1.png",
  "/assets/authNavBarControls/peers.png",
  "/assets/authNavBarControls/peers-1.png",
  "/assets/authNavBarControls/peers-2.png",
];
function AuthNavControls() {
  return (
    <div className="flex space-x-6 items-center justify-start w-full">
      {btnIcon.map((e, l) => {
        return (
          <button key={l} onClick={() => {}}>
            <Image src={e} width={35} height={35} alt="navigation icon" />
          </button>
        );
      })}
    </div>
  );
}

export default AuthNavControls;
