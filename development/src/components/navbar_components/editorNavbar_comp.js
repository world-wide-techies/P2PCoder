'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import moon from '../../../public/assets/onboardingIcons/moon.png';
import sun from '../../../public/assets/onboardingIcons/sun.png';
import userIcon from '../../../public//assets/authNavBarControls/peers-2.png';
import { useTheme } from 'next-themes';
import { useTabContext } from '@/composables/tabContext';
import { appAuth } from '@/composables/firebaseConfig/config';

function EditorNavBar() {
  const [auth, setAuth] = useState(true);
  const { theme, setTheme } = useTheme();
  const { items } = useTabContext();

  useEffect(() => {
    if (appAuth.currentUser) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [appAuth]);

  return (
    <main className="font-nohemi">
      <div className="w-full  top-0 p-3 bg-[#DCDCE5] dark:bg-[#2F2F3A]">
        <div className="flex w-[98%] mx-auto justify-between items-center">
          <h1 className="dark:text-white text-[#5F5BD7] uppercase font-bold text-4xl">
            Carai
          </h1>
          {auth ? (
            <div className="flex justify-end space-x-4 items-center">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'dark' ? (
                  <Image alt="moon" src={moon} width={20} height={20} />
                ) : (
                  <Image alt="sun" src={sun} width={20} height={20} />
                )}
              </button>
              <button onClick={() => {}}>
                <Image
                  src={userIcon}
                  width={50}
                  height={50}
                  alt="navigation icon"
                />
              </button>
            </div>
          ) : (
            <div className="flex justify-end">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'dark' ? (
                  <Image alt="moon" src={moon} width={18} height={18} />
                ) : (
                  <Image alt="sun" src={sun} width={20} height={20} />
                )}
              </button>
              {!auth && (items.length > 1 || items[0]?.title !== 'Welcome') && (
                <>
                  <button className="ml-6 mr-3 py-3 px-6 rounded-lg bg-[#5F5BD7] text-white text-lg font-normal flex items-center">
                    Sign Up
                  </button>
                  <button className=" py-3 px-6 rounded-lg  text-lg font-normal flex items-center text-[#121212] bg-[#CDCDDA]">
                    Log In
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default EditorNavBar;
