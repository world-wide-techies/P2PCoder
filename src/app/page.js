"use client";

import EditorNavBar from "@/components/navbar_components/editorNavbar_comp";
import SideNavBarControl from "@/components/navbar_components/sidebar_components/sideBarNavControl";
import TabBarControls from "@/components/navbar_components/tabbar_components/tabBarControls_comp";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Login from "../app/login/page";

import Modal from "react-modal";
Modal.setAppElement("div");
const barItems = [{ id: 1, title: "Welcome", active: true }];

function Home() {
  const [items, setItems] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const storedItems = window.localStorage.getItem("barItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    } else {
      setItems(barItems);
    }
  }, []);
  useEffect(() => {
    if (items.length == 0) {
      setItems(barItems);
    } else {
      window.localStorage.setItem("barItems", JSON.stringify(items));
    }
  }, [items]);

  const handleButtonClicks = (i) => {
    if (i == 0) {
      const newItems = items.map((item) => ({
        ...item,
        active: false,
      }));
      setItems([
        ...newItems,
        { id: items.length + 1, title: "untitled", active: true },
      ]);
    }
  };

  const handleLoginClick = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleLogoutClick = () => {
    router.push("/");
  };

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
      active:
        idx === index
          ? false
          : idx === index - 1 && items.length < index + 1
          ? true
          : idx === index + 1
          ? true
          : false,
    }));
    newItems.splice(index, 1);
    setItems(newItems);
  };
  return (
    <>
      <main className="relative h-full bg-[#DCDCE5] dark:bg-[#2F2F3A]">
        <div className="relative h-full border-gray-200 border-b-[1px] ">
          <EditorNavBar />
        </div>
        <div className="relative flex w-full">
          <div className="">
            <SideNavBarControl
              handleTopNavClicks={(i) => {
                handleButtonClicks(i);
              }}
              handleNavLoginClick={() => {
                handleLoginClick();
              }}
              handleNavLogoutClick={() => {
                handleLogoutClick();
              }}
            />
          </div>
          <div className="ml-[96px] w-full">
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

          <Modal
            style={{
              overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "transparent",
              },

              content: {
                marginInline: "auto",
                width: "700px",
                height: "650px",
              },
            }}
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
          >
            <Login></Login>
          </Modal>

          <div className="bg-[#DCDCE5] dark:bg-[#2F2F3A]"></div>
        </div>
      </main>
    </>
  );
}

export default Home;
