"use client";
import Image from "next/image";

const btnNav = [
  "/assets/sideTopNavBar/code.png",
  "/assets/sideTopNavBar/add.png",
  "/assets/sideTopNavBar/user.png",
];
function SideTopNavControl() {
  return (
    <div className="flex flex-col justify-start items-center space-y-6">
      {btnNav.map((e, i) => {
        return (
          <button key={i} onClick={() => {}}>
            <Image src={e} width={35} height={35} alt={`nav_btn_icon${i}`} />
          </button>
        );
      })}
    </div>
  );
}

export default SideTopNavControl;
