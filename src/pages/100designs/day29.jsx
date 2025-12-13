import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Day29() {
  const laptop = useMediaQuery("(min-width:769px)");
  const MENU = ["Product", "Solution", "Pricing", "Docs", "Resources"];
  const INFO = [
    "• 1200+ users",
    "• 98% satisfaction rate",
    "• 50% faster workflows",
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
          className="h-screen w-screen bg-[#0f0f0f]"
          style={{
            backgroundImage: "url(/images/designs/day29bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-10 py-7 animate-fadeInDown">
            <div className="text-[#AFB6BC] text-2xl fr">
              <span className="sfpro-text mr-1 text-2xl">􀆿</span>ClarityAI
            </div>
            <div className="flex items-center gap-10">
              {MENU.map((item, key) => (
                <div
                  key={key}
                  className="sfpro-text text-[#AFB6BC] text-lg font-light"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-5">
              <button className="text-[#AFB6BC] text-lg cursor-pointer">
                log in
              </button>
              <button className="text-[#AFB6BC] text-lg px-4 py-2 bg-zinc-600/40 border border-zinc-400 cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 px-10 animate-fadeInUp">
            <div className="border border-zinc-400 p-2  bg-zinc-600/40 flex items-center gap-4 w-fit">
              <div className="sfpro-text text-[#FFFEFB] font-light">
                Watch Demo
              </div>
              <div className="relative h-[38px] w-[62px] border border-zinc-400">
                <Image
                  src="/images/designs/day29bg.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
                <div className="absolute sfpro-text text-[#FFFEFB] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  􀐣
                </div>
              </div>
            </div>
            <div className="flex justify-between items-baseline-last py-4 border-b border-zinc-100/40">
              <div className="sfpro-text text-[#D4D5D7] text-6xl/20 font-medium tracking-[-5px]">
                Where Intelligence
                <br />
                Meets Simplicity.
              </div>
              <div className="sfpro-text text-[#AFB6BC] text-lg font-extralight">
                A calm AI experience designed to help you
                <br /> work better, think faster and stay focused.
              </div>
            </div>
            <div className="my-4 flex items-center justify-between">
              <div className="flex items-center gap-5 text-[#AFB6BC]">
                {INFO.map((item, key) => (
                  <div key={key} className="sfpro-text">
                    {item}
                  </div>
                ))}
              </div>
              <div>
                <button className="text-[#000000] text-lg px-4 py-2 bg-zinc-50 cursor-pointer">
                  Try it for Free
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
