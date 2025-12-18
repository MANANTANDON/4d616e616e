import { LiquidGlass } from "@/components/Misc/LiquidGlass";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Day33() {
  const laptop = useMediaQuery("(min-width:769px)");
  const MENU = ["Explore", "Features", "Journey", "Company"];
  return (
    <>
      {!laptop && (
        <div className="flex items-center justify-center h-screen">
          <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
            Switch to Desktop
          </div>
        </div>
      )}
      {laptop && (
        <div
          className="h-screen w-screen bg-[#FFFFFF]"
          style={{
            backgroundImage: "url(/images/designs/day33bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* HEADER */}
          <div className="flex items-center justify-center py-[34px]">
            <div
              className="flex items-center gap-10 pl-[15px] pr-[26px] py-[11px]
                bg-zinc-500/30 backdrop-blur-md rounded-[100px]"
            >
              <a href="">
                <Image
                  src={"/images/designs/manan.png"}
                  layout="intrinsic"
                  height={35}
                  width={54}
                />
              </a>
              {MENU.map((item, key) => (
                <div key={key} className="text-zinc-100 text-lg cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          </div>
          {/* Hero Footer */}
          <div className="absolute bottom-0 left-0 right-0 px-12 py-7">
            <LiquidGlass x1="0%" y1="0%" x2="100%" y2="0%">
              <div className="w-fit text-zinc-200">• UNLEASHED 2025</div>
            </LiquidGlass>
            <div className="flex items-center justify-between mt-4">
              <div className="text-zinc-100/70 font-normal text-[52px]/16 ">
                Where{" "}
                <span className="text-[#FFFFFF]">Intelligence Ventures</span>{" "}
                <br /> Beyond the Horizon
              </div>
              <div className="flex flex-col gap-4">
                <div className="sfpro-text text-zinc-100/80 text-[17px]">
                  a new era of discovery powered by adaptive AI-designed to
                  navigate
                  <br />
                  complexity, reveal patterns, and guide exploration across the
                  unknown.
                </div>
                <div className="flex gap-4 items-center">
                  <button className="sfpro-text bg-[#FFFFFF] px-4 py-2.5 rounded-[30px] cursor-pointer font-medium">
                    Begin the Journey 􀄫
                  </button>

                  <button className="sfpro-text bg-zinc-700/80 px-3 py-[7px] rounded-[100px] border border-zinc-100/30 text-zinc-200 backdrop-blur-md cursor-pointer">
                    􀊄
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
