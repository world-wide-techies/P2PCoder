"use client";
import Image from "next/image";

const btnNav = [
  "/assets/sideBottomNavControls/logout.png",
  "/assets/sideBottomNavControls/settings.png",
];
function SideBottomNavControl() {
  return (
    <div className="flex flex-col justify-start items-center space-y-6 mt-12">
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

export default SideBottomNavControl;
