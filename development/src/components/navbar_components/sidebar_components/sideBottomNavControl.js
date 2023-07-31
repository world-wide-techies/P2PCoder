import { appAuth } from "@/composables/firebaseConfig/config";
import { handleLogout } from "@/composables/signOutFunction";
import { isUserSignedIn } from "@/composables/verifySignedIn";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const btnNav = [
  "/assets/sideBottomNavControls/logout.png",
  "/assets/sideBottomNavControls/settings.png",
];
function SideBottomNavControl() {
  const router = useRouter();
  const [auth, setAuth] = useState(false);
  const user = appAuth.currentUser;
  useEffect(() => {
    if (isUserSignedIn()) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [user]);

  const signUserOut = async () => {
    const response = await handleLogout();
    setAuth(isUserSignedIn());
    response.success ? router.push("/?view=login") : "";
  };

  return (
    <div className="flex flex-col justify-start items-center space-y-2">
      {auth ? (
        btnNav.map((e, i) => {
          if (e.includes("logout")) {
            return (
              <button
                key={i}
                onClick={signUserOut}
                className="hover:bg-gray-200 dark:hover:bg-gray-700 w-16 h-16 flex items-center justify-center hover:rounded-lg"
              >
                <Image
                  src={e}
                  width={35}
                  height={35}
                  alt={`nav_btn_icon${i}`}
                />
              </button>
            );
          }
        })
      ) : (
        <button className="hover:bg-gray-200 dark:hover:bg-gray-700 w-16 h-16 flex items-center justify-center hover:rounded-lg">
          <Image
            src="/assets/sideBottomNavControls/settings.png"
            width={35}
            height={35}
            alt="nav_btn_icon_settings"
          />
        </button>
      )}
    </div>
  );
}

export default SideBottomNavControl;
