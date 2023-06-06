import Image from "next/image";
import { useRouter } from "next/navigation";

const btnNav = [
  "/assets/sideBottomNavControls/logout.png",
  "/assets/sideBottomNavControls/settings.png",
];
function SideBottomNavControl() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-start items-center space-y-2">
      {btnNav.map((e, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              if (i === 0) {
                router.push("/?view=login");
              }
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

export default SideBottomNavControl;
