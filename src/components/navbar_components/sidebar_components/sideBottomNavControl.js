"use client";
import { user } from "@/composables/verifySignedIn";
import Image from "next/image";
import { useRouter } from "next/navigation";

const btnNav = [
  "/assets/sideBottomNavControls/settings.png",
  "/assets/sideBottomNavControls/logout.png",
  "/assets/sideBottomNavControls/settings.png",
];
function SideBottomNavControl() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleLogoutClick = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col justify-start items-center space-y-6 mt-12">
      {btnNav.map((e, i) => {
        if ((i === 0 && user) || (i === 1 && !user)) {
          return null;
        }

        return (
          <button
            key={i}
            onClick={
              i === 0
                ? handleLoginClick
                : i === 1
                ? handleLogoutClick
                : () => {}
            }
            className="hover:bg-gray-200 dark:hover:bg-gray-700 w-16 h-16 flex items-center justify-center hover:rounded-lg"
          >
            <Image src={e} width={35} height={35} alt={`nav_btn_icon${i}`} />
          </button>
        );
      })}
    </div>
  );
}

export default SideBottomNavControl;
