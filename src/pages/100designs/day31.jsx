import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Day31() {
  const laptop = useMediaQuery("(min-width:769px)");
  const MENU = ["Home", "Pricing", "Docs", "Node API", "Smart Contracts"];
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
          className="h-screen w-screen bg-[#999999]"
          style={{
            backgroundImage: "url(/images/designs/day31bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between py-7 px-10">
            <div className="flex items-center gap-3 text-3xl text-zinc-50 sfpro-text font-light">
              <Image
                src={"/images/designs/day31logo.png"}
                layout="intrinsic"
                height={30}
                width={30}
              />
              Harmoniq
            </div>
            <div className="flex items-center gap-10 text-zinc-50">
              {MENU.map((item, key) => (
                <div
                  key={key}
                  className="text-xl text-zinc-50 sfpro-text font-light cursor-pointer"
                >
                  {item}
                </div>
              ))}
              <button className="text-lg text-zinc-900 sfpro-text font-medium bg-zinc-100 px-7 py-2.5 rounded-[100px] cursor-pointer">
                Start Building
              </button>
            </div>
          </div>
          {/* Footer */}
          <div className="absolute bottom-15 left-0 right-0 px-10">
            <div className="sfpro-text text-zinc-100 font-extralight text-lg">
              <span className="text-[#E7316E]">􃈰</span> New version launched
            </div>
            <div className="text-zinc-100 text-8xl font-medium my-7 tracking-tight">
              The smarter way to
              <br />
              build on Ethereum.
            </div>
            <div className="sfpro-text text-zinc-100 font-extralight text-xl my-7">
              High-speed APIs, secure nodes, analytics, and automation - <br />{" "}
              everything you need to ship on Ethereum with confidence.
            </div>
            <div className="flex items-center gap-7">
              <button className="text-lg text-zinc-900 sfpro-text font-medium bg-zinc-100 px-7 py-3 rounded-[100px] cursor-pointer">
                Get Started
              </button>
              <button className="text-lg text-zinc-100 sfpro-text font-medium bg-zinc-700/40 border border-zinc-400/20 px-7 py-3 rounded-[100px] cursor-pointer">
                View Docs
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
