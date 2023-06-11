import { appAuth } from '@/composables/firebaseConfig/config';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const btnNav = [
  '/assets/sideBottomNavControls/logout.png',
  '/assets/sideBottomNavControls/settings.png',
];
function SideBottomNavControl() {
  const router = useRouter();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (appAuth.currentUser) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [appAuth]);

  return (
    <div className="flex flex-col justify-start items-center space-y-2">
      {auth ? (
        btnNav.map((e, i) => {
          return (
            <button
              key={i}
              className="hover:bg-gray-200 dark:hover:bg-gray-700 w-16 h-16 flex items-center justify-center hover:rounded-lg">
              <Image src={e} width={35} height={35} alt={`nav_btn_icon${i}`} />
            </button>
          );
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
