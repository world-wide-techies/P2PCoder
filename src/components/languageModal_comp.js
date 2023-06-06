import Image from "next/image";
import React from "react";
import HTML from "../../public/assets/languageIcons/HTML5 (1).png";
import CSS from "../../public/assets/languageIcons/CSS3.png";
import JS from "../../public/assets/languageIcons/Javascript.png";

export const LanguageModal = () => {
  return (
    <div className="w-[456px] h-[328px] bg-[#2F2F3A] rounded-2xl border-[#504F5F] border-solid font-bold ">
      <div className="p-8">
        <h1 className="text-3xl leading-8 mb-8">Choose A Language</h1>
        <div className="flex gap-3">
          <div className="bg-[#3D3D48] w-32 h-32 flex justify-center items-center flex-col rounded-md">
            <Image src={HTML} alt="language-icon" className="mb-4" />
            <p className="leading-tight text-sm">HTML</p>
          </div>
          <div className="bg-[#3D3D48] w-32 h-32 flex justify-center items-center flex-col rounded-md">
            <Image src={CSS} alt="language-icon" className="mb-4" />
            <p className="leading-tight text-sm">CSS</p>
          </div>
          <div className="bg-[#3D3D48] w-32 h-32 flex justify-center items-center flex-col rounded-md">
            <Image src={JS} alt="language-icon" className="mb-4" />
            <p className="leading-tight text-sm">JS</p>
          </div>
        </div>
        <button className="bg-[#5F5BD7] rounded-lg py-3 px-36 self-stretch mt-8 flex-grow-0 order-none flex-none justify-center items-center w-[393px] h-12">
          Start Coding
        </button>
      </div>
    </div>
  );
};
