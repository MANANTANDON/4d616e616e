import React from "react";
import { Charging } from "../Misc/Charging";
import { AppleMenu } from "./AppleMenu";
import { WifiMenu } from "./WifiMenu";
import { HeaderTimeCard } from "../Misc/HeaderTimeCard";

export const Header = ({ setShowApp, onShutdown }) => {
  const LeftMenu = ["Finder", "File", "Edit", "View", "Go", "Window", "Help"];
  return (
    <>
      <div className="flex items-center justify-between px-[15px]  bg-linear-to-b from-zinc-900/30 via-zinc-900-10 to-transparent ">
        {/* MENUS */}
        <div className="flex items-center">
          <AppleMenu setShowApp={setShowApp} onShutdown={onShutdown} />
          {LeftMenu.map((item, key) => (
            <div
              className={`sfpro-text text-zinc-50 ${
                item === "Finder"
                  ? "font-semibold text-[14px]"
                  : "font-regular text-[13px]"
              } cursor-default hover:bg-zinc-900/10 py-1 px-3 rounded-[100px]`}
              key={key}
            >
              {item}
            </div>
          ))}
        </div>
        {/* OPTIONS */}
        <div className="flex items-center">
          <div className="sfpro-text text-zinc-50 font-regular text-[13px] hover:bg-zinc-900/10 py-1 px-3 rounded-[100px] cursor-default">
            4d616e616e 54616E646F6E
          </div>
          {/* Wifi  */}
          <WifiMenu />
          {/* Charing  */}
          <Charging />
          {/* Time  */}
          <HeaderTimeCard />
        </div>
      </div>
    </>
  );
};
