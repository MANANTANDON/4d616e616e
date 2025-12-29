import React from "react";
import { Charging } from "../Misc/Charging";
import { AppleMenu } from "./AppleMenu";
import { WifiMenu } from "./WifiMenu";
import { HeaderTimeCard } from "../Misc/HeaderTimeCard";

export const Header = ({ setShowApp, onShutdown }) => {
  const LeftMenu = ["Finder", "File", "Edit", "View", "Go", "Window", "Help"];
  return (
    <>
      <div className="flex items-center justify-between px-[18px] py-1 bg-linear-to-b from-zinc-900/30 via-zinc-900-10 to-transparent ">
        {/* MENUS */}
        <div className="flex items-center gap-5">
          <AppleMenu setShowApp={setShowApp} onShutdown={onShutdown} />
          {LeftMenu.map((item, key) => (
            <div
              className={`sfpro-text text-zinc-50 ${
                item === "Finder"
                  ? "font-semibold text-[14px]"
                  : "font-regular text-[13px]"
              } cursor-default`}
              key={key}
            >
              {item}
            </div>
          ))}
        </div>
        {/* OPTIONS */}
        <div className="flex items-center gap-5">
          <div className="sfpro-text text-zinc-50 font-regular text-[13px]">
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
