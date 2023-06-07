'use client';

import Welcome from '@/components/welcome_comp';
import EditorNavBar from '@/components/navbar_components/editorNavbar_comp';
import SideNavBarControl from '@/components/navbar_components/sidebar_components/sideBarNavControl';
import TabBarControls from '@/components/navbar_components/tabbar_components/tabBarControls_comp';
import { useSearchParams, useRouter } from 'next/navigation';
import { Modal } from '@/components/modal';
import { LanguageModal } from '@/components/languageModal_comp';
import { useTabContext } from '@/composables/tabContext';
import CodingEditor from '@/components/codingEditor';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import runIcon from '../../public/assets/languageIcons/runIcon.svg';
import Image from 'next/image';
import PeerSession from '@/components/PeerOverlay_comp';

function Home() {
  const { items, setItems } = useTabContext();
  const view = useSearchParams().get('view');
  const router = useRouter();

  const handleTabActive = (tab) => {
    const index = items.findIndex((i, k) => k === tab);
    const newItems = items.map((item, idx) => ({
      ...item,
      active: idx === index,
    }));
    setItems(newItems);
  };
  const handleTabClose = (tab) => {
    const index = items.findIndex((i, k) => k === tab);
    const newItems = items.map((item, idx) => ({
      ...item,
      active: setActive(idx, index),
    }));
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const setActive = (idx, index) => {
    if (idx === index) {
      return false;
    } else if (idx === index - 1) {
      return index + 1 <= items.length - 1 ? false : true;
    } else if (idx === index + 1) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <main className="h-full bg-[#DCDCE5] dark:bg-[#2F2F3A]">
        <ToastContainer />
        <div className="relative h-full border-gray-200 border-b-[1px] ">
          <EditorNavBar />
        </div>
        <div className="relative flex w-full">
          <div>
            <SideNavBarControl
              handleTopNavClicks={(i) => {
                handleButtonClicks(i);
              }}
            />
          </div>
          <div className="ml-24 w-[80%]">
            <TabBarControls
              items={items}
              handleActiveTab={(i, event) => {
                event.stopPropagation();
                handleTabActive(i);
              }}
              handleCloseTab={(i, event) => {
                event.stopPropagation();
                handleTabClose(i);
              }}
            />
          </div>
          {(items.length > 1 || items[0]?.title !== 'Welcome') && (
            <button className="bg-green-700 flex  items-center my-1 px-4 rounded-md text-white space-x-3">
              <Image src={runIcon} alt="run" />
              <p>Run</p>
            </button>
          )}
        </div>
        <div className="bg-white dark:bg-[#1E1E2A]  ml-24 w-[92%]  h-screen flex flex-col justify-start  ">
          <>
            {view == 'chooseLanguage' ? (
              <Modal
                onClose={() => {
                  router.push('/');
                }}>
                <LanguageModal
                  onClose={() => {
                    router.push('/');
                  }}
                />
              </Modal>
            ) : (
              <div></div>
            )}
            {items[0]?.active && items[0].title === 'Welcome' ? (
              <div className="p-11">
                <Welcome />
              </div>
            ) : items.filter((e) => e.active)[0] ? (
              //<CodingEditor language={items.filter((e) => e.active)[0].ext} />
              <PeerSession />
            ) : (
              <div className="p-11">
                <Welcome />
              </div>
            )}
          </>
        </div>
      </main>
    </>
  );
}

export default Home;
