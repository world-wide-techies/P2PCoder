"use client";

import closeIcon from "../../public/assets/githubGoogleError/closecircle.svg";

import Image from "next/image";
import errorIcons from "../../public/assets/githubGoogleError/error.svg";

function GithubGoogleComponent() {
  return (
    <>
      <div className="w-full bg-[#FCE9E9] font-nohemi flex items-center justify-center border border-[#E42721] h-14 rounded-md">
        <Image src={errorIcons} alt="close icon" className="w-6 h-6 mx-2" />

        <h1 className="text-[#E42721] mx-2">
          An account with this email already exists
        </h1>
        <Image src={closeIcon} alt="close icon" className="w-6 h-6 mx-2" />
      </div>
    </>
  );
}

export default GithubGoogleComponent;
