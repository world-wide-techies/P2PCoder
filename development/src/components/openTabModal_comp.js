import Image from "next/image";
import React, { useState } from "react";
import HTML from "../../public/assets/openTabIcons/HTML.png";
import CSS from "../../public/assets/openTabIcons/CSS3.png";
import JS from "../../public/assets/openTabIcons/Javascript.png";
import Collab from "../../public/assets/openTabIcons/users.svg";
import { useTabContext } from "@/composables/tabContext";
import { isUserSignedIn } from "@/composables/verifySignedIn";
import { appAuth } from "@/composables/firebaseConfig/config";

export const OpenTabModal = ({ onClose }) => {
  const { handleLanguage } = useTabContext();
  const [active, setActive] = useState("");

  const user = appAuth.currentUser;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (active) {
      handleLanguage(active);
      setActive("");
      onClose();
    }
  };
  return (
    <div className="w-[456px] h-[328px] bg-white  dark:bg-[#2F2F3A] rounded-2xl border-[#504F5F] border-solid font-bold ">
      <div className="p-8">
        <h1 className="text-3xl leading-8 mb-8">Open New Tab</h1>
        <div className="flex gap-3 text-[#5F5BD7] dark:text-white">
          <div
            onClick={() => setActive("html")}
            className={` w-32 h-32 flex justify-center items-center flex-col  rounded-md hover:cursor-pointer ${
              active === "html"
                ? "bg-blue-500 text-white"
                : "  bg-gray-200 dark:bg-[#3D3D48]"
            }`}
          >
            <Image src={HTML} alt="language-icon" className="mb-4" />
            <p className="leading-tight text-sm">HTML</p>
          </div>
          <div
            onClick={() => setActive("css")}
            className={` w-32 h-32 flex justify-center items-center flex-col rounded-md hover:cursor-pointer ${
              active === "css"
                ? "bg-blue-500 text-white "
                : " bg-gray-200 dark:bg-[#3D3D48]"
            }`}
          >
            <Image src={CSS} alt="language-icon" className="mb-4" />
            <p className="leading-tight text-sm">CSS</p>
          </div>
          <div
            onClick={() => setActive("js")}
            className={` w-32 h-32 flex justify-center items-center flex-col rounded-md hover:cursor-pointer ${
              active === "js"
                ? "bg-blue-500 text-white"
                : " bg-gray-200 dark:bg-[#3D3D48]"
            }`}
          >
            <Image src={JS} alt="language-icon" className="mb-4" />
            <p className="leading-tight text-sm">JS</p>
          </div>
          {isUserSignedIn() && (
            <div
              onClick={() => setActive("collab")}
              className={` w-32 h-32 flex justify-center items-center flex-col rounded-md hover:cursor-pointer ${
                active === "collab"
                  ? "bg-blue-500 text-white"
                  : " bg-gray-200 dark:bg-[#3D3D48]"
              }`}
            >
              <Image
                src={Collab}
                alt="language-icon"
                className="mb-4 text-[#5F5BD7]"
                width={35}
                height={35}
                priority
              />
              <p className="leading-tight text-sm">Collaborate</p>
            </div>
          )}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-[#5F5BD7] text-white rounded-lg py-3 px-36 self-stretch mt-8 flex-grow-0 order-none flex-none justify-center items-center w-[393px] h-12"
        >
          Open
        </button>
      </div>
    </div>
  );
};
