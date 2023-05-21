"use client";
import { useState } from "react";
import AuthNavControls from "./authNavControls_comp";

function EditorNavBar() {
  const [auth, setAuth] = useState(false);
  return (
    <main className="font-nohemi">
      <div className="w-full  top-0 p-3 bg-[#DCDCE5] dark:bg-[#2F2F3A]">
        <div className="flex w-[95%] mx-auto justify-between items-center">
          <h1 className="dark:text-white text-[#5F5BD7] uppercase font-bold text-4xl">
            Carai
          </h1>
          {auth ? (
            <div className="flex justify-end">
              <AuthNavControls />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </main>
  );
}

export default EditorNavBar;
