import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Day17() {
  const laptop = useMediaQuery("(min-width:769px)");
  const Menu = [
    "FEATURES",
    "SOLUTION",
    "HOW IT WORKS",
    "PRICING",
    "RESOURCES",
    "GET STARTED",
  ];
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
          className="h-screen w-screen bg-[#FFFFFF] relative"
          style={{
            backgroundImage: "url(/images/designs/day17bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute top-0 left-0 right-0 flex items-center justify-center gap-15 py-[35px]">
            {Menu.slice(0, 3).map((item, key) => (
              <div
                key={key}
                className="sfpro-text text-[#FFFFFA] font-light text-sm cursor-pointer"
              >
                {item}
              </div>
            ))}
            <Image
              src={"/images/designs/day17logo.png"}
              layout="intrinsic"
              height={35}
              width={35}
            />
            {Menu.slice(3).map((item, key) => (
              <div
                key={key}
                className="sfpro-text text-[#FFFFFA] font-light text-sm cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 py-7 px-20">
            <div className="pb-7 border-b border-[#FFFFFF50]">
              <div className="sfpro-text text-[#FFFFFF] text-4xl xl:text-5xl">
                Step Through. Work Smater.
              </div>
              <div className="sfpro-text text-[#FFFFFF70] text-4xl xl:text-5xl mt-2">
                Cross the threshold into AI-driven efficiency.
              </div>
            </div>
            <div className="mt-7 flex justify-between">
              <div className="sfpro-text text-xs text-[#C4C2C3]">
                A SYSTEM THAT LEARNS, ADAPTS, AND ACCELERATES YOUR SUCCESS.
              </div>
              <div>
                <div className="sfpro-text text-xs text-[#C4C2C3]">
                  Step into the fututre of automation. Our AI-driven platform
                  optimizes
                </div>
                <div className="sfpro-text text-xs text-[#C4C2C3]">
                  workflows, predicts outcomes, and accelerates decision-making-
                </div>
                <div className="sfpro-text text-xs text-[#C4C2C3]">
                  effortlessely.
                </div>
                <div className="sfpro-text text-xs text-[#C4C2C3] mt-5">
                  AI that doesn't just assist-it anticipates, learns, and
                  executes with
                </div>
                <div className="sfpro-text text-xs text-[#C4C2C3]">
                  precision.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
