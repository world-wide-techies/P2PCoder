"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const btnNav = [
  "/assets/sideTopNavBar/code.png",
  "/assets/sideTopNavBar/add.png",
  "/assets/sideTopNavBar/user.png",
];

function SideTopNavControl({ handleTopNavigationClicks }) {
  return (
    <div className="flex flex-col justify-start items-center space-y-2">
      {btnNav.map((e, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              handleTopNavigationClicks(i);
            }}
            className="hover:bg-gray-200 dark:hover:bg-gray-700 w-16 h-16 flex items-center justify-center hover:rounded-lg"
          >
            <Image src={e} width={35} height={35} alt={`nav_btn_icon${i}`} />
          </button>
        );
      })}
    </div>
  );
}

export default SideTopNavControl;
