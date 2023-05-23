"use client";

import EditorNavBar from "@/components/navbar_components/editorNavbar_comp";
import SideNavBarControl from "@/components/navbar_components/sidebar_components/sideBarNavControl";
import TabBarControls from "@/components/navbar_components/tabbar_components/tabBarControls_comp";
import { useEffect, useState } from "react";

const barItems = [{ id: 1, title: "Welcome", active: true }];

function Home() {

  const [items, setItems] = useState([]);

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

    currentTabChild.addEventListener('submit', tabRenameSubmitHandler, { once: true })
    currentTabChild.addEventListener('focusout', tabRenameFocusHandler, { once: true })

    function tabRenameSubmitHandler(e){
      currentTabChild.removeEventListener('focusout', tabRenameFocusHandler);
      e.preventDefault();
      const newName = e.target[0].value;
      setTabName(newName);
    }

    function tabRenameFocusHandler(e){
      currentTabChild.removeEventListener('submit', tabRenameSubmitHandler);
      const currentName = e.target.value;
      setTabName(currentName);
    }

    function setTabName(name){
      const newItems = items.map((item, idx) => ({
        ...item,
        title: idx === index ? name : item.title,
      }));
      setItems(newItems);
      currentTab.replaceChildren(name);
    }
  }

  return (
    <>
      <main className="h-full bg-[#DCDCE5] dark:bg-[#2F2F3A]">
        <div className="relative h-full border-gray-200 border-b-[1px] ">
          <EditorNavBar />
        </div>
        <div className="relative flex w-full">
          <div className="">
            <SideNavBarControl
              handleTopNavClicks={(i) => {
                handleButtonClicks(i);
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
              handleRenameTab={(i, event) => {
                event.stopPropagation();
                handleTabRename(i, event);
              }}
            />
          </div>
          <div className="bg-[#DCDCE5] dark:bg-[#2F2F3A]"></div>
        </div>
      </main>
    </>
  );
}

export default Home;
