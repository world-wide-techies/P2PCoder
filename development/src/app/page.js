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
import Collab from '@/components/collab_comp';

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

  const handleTabRename = (tab, event) => {
    const index = items.findIndex((i, k) => k === tab);
    const currentTab = event.target;
    const initialName = currentTab.textContent;

    const form = document.createElement('form');
    currentTab.replaceChildren(form);
    const inputField = document.createElement('input');
    inputField.value = initialName;
    form.appendChild(inputField);
    const currentTabChild = currentTab.firstChild;
    currentTabChild[0].focus();
    currentTabChild[0].select();

    currentTabChild.addEventListener('submit', tabRenameSubmitHandler, {
      once: true,
    });
    currentTabChild.addEventListener('focusout', tabRenameFocusHandler, {
      once: true,
    });

    function tabRenameSubmitHandler(e) {
      currentTabChild.removeEventListener('focusout', tabRenameFocusHandler);
      e.preventDefault();
      const newName = e.target[0].value;
      setTabName(newName);
    }

    function tabRenameFocusHandler(e) {
      currentTabChild.removeEventListener('submit', tabRenameSubmitHandler);
      const currentName = e.target.value;
      setTabName(currentName);
    }

    function setTabName(name) {
      const newItems = items.map((item, idx) => ({
        ...item,
        title: idx === index ? name : item.title,
      }));
      setItems(newItems);
      currentTab.replaceChildren(name);
    }
  };

  return (
    <>
      <main className="h-full bg-[#DCDCE5] dark:bg-[#2F2F3A]">
        <ToastContainer />
        <div className="relative h-full border-gray-300 border-b-[1px] dark:border-gray-700 ">
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
              handleRenameTab={(i, event) => {
                event.stopPropagation();
                handleTabRename(i, event);
              }}
            />
          </div>
        </div>
        <div className="bg-white dark:bg-[#1E1E2A]  ml-24 w-[92.9%] h-screen flex flex-col justify-start">
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
              <Collab />
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
