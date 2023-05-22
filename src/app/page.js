"use client";

import EditorNavBar from "@/components/navbar_components/editorNavbar_comp";
import SideNavBarControl from "@/components/navbar_components/sidebar_components/sideBarNavControl";
import TabBarControls from "@/components/navbar_components/tabbar_components/tabBarControls_comp";
import { useEffect, useState } from "react";

function Home() {
  const barItems = [{ id: 1, title: "Welcome", active: true }];

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
    let currentName = currentTab.textContent;

    // Creating Form/Input to collect new tab name
    let form = document.createElement('form');
    currentTab.replaceChildren(form);
    let inputField = document.createElement('input');
    inputField.value = currentName;
    form.appendChild(inputField);
    currentTab.firstChild[0].focus();
    currentTab.firstChild[0].select();

    // Add Submit Event
    currentTab.firstChild.addEventListener('submit', tabRenameHandler)

    // Rename Handler
    function tabRenameHandler(e){
      e.preventDefault();
      let newName = e.target[0].value;

      const newItems = items.map((item, idx) => ({
        ...item,
        title: idx === index ? newName : item.title,
      }));
      setItems(newItems);
      
      currentTab.replaceChildren(newName);
    }

    // On Click Away from Tab Renaming
    window.addEventListener('click', () => {
      currentTab.replaceChildren(currentName);
      removeEventListener('submit', tabRenameHandler);
    })
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
