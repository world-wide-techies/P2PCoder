"use client";
import { useEffect } from "react";
import TabBarItems from "./tabBarItem";

function TabBarControls({ items, handleActiveTab, handleCloseTab, handleRenameTab }) {
  if (!Array.isArray(items)) {
    return null;
  }

  return (
    <main className="font-nohemi">
      <div className="flex w-full bg-[#DCDCE5] dark:bg-[#2F2F3A] h-full items-center pl-4">
        <div className="flex space-x-1">
          {items.map((e, l) => {
            return (
              <TabBarItems
                title={e.title}
                active={e.active}
                key={l}
                onClose={(event) => {
                  handleCloseTab(l, event);
                }}
                onClick={(event) => {
                  handleActiveTab(l, event);
                }}
                onDoubleClick={(event) => {
                  handleRenameTab(l, event);
                }}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default TabBarControls;
