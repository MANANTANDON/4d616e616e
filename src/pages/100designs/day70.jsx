import { BuildTwoTone } from "@mui/icons-material";
import React from "react";

const Day70 = () => {
  const MENU = ["HOW IT WORKS", "FEATURES", "PRICING", "FAQ"];
  return (
    <>
      <div className="flex items-center justify-center h-screen xl:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="h-screen w-screen bg-zinc-900 py-[25px] px-[58px] sfpro-text  hidden xl:block"
        style={{
          backgroundImage: "url(/images/designs/day70/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h1 className="text-zinc-100 text-xl">
            SENTI
            <br />
            NENT AI
          </h1>
          <div className="bg-zinc-900/10 backdrop-blur-2xl text-zinc-100 px-6 py-3 flex items-center gap-0.5 rounded-[100px] border border-zinc-100/20 ml-40">
            {MENU.map((item, key) => (
              <a
                href=""
                key={key}
                className="bg-zinc-100/15 backdrop-blur-xl rounded-[100px] px-4.5 py-2 tracking-widest"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="bg-zinc-900/10 backdrop-blur-2xl text-zinc-100 p-3 flex items-center gap-0.5 rounded-[100px] border border-zinc-100/20">
            <button className="bg-zinc-100/15 backdrop-blur-xl rounded-[100px] px-4.5 py-2 tracking-widest cursor-pointer">
              SIGN IN
            </button>
            <button className="bg-zinc-100 backdrop-blur-xl text-zinc-900 rounded-[100px] px-4.5 py-2 tracking-widest cursor-pointer">
              START NOW
            </button>
          </div>
        </div>
        {/* Hero Section */}
        <div className="absolute bottom-[57px] left-[58px] right-[58px] flex flex-col items-center justify-center gap-[30px]">
          <div className="bg-zinc-100/20 px-3 py-1 rounded-[100px] text-sm text-zinc-100 -mb-5">
            WE CREATE,BUILD,SHIP
          </div>
          <h1 className="text-zinc-100 text-center text-8xl tracking-tighter">
            Creative
            <br />
            department for
            <br />
            brands
          </h1>
          <h2 className="text-zinc-100/50 text-lg -mt-5 font-light">
            Scale your creative capacity
          </h2>
          <div className="flex items-center gap-2.5">
            <button className="bg-zinc-100 px-6 py-3 rounded-[100px] text-sm cursor-pointer">
              START FREE TRAIL
            </button>
            <button className="bg-zinc-100/20 text-zinc-100 backdrop-blur-lg border border-zinc-100/50 px-6 py-3 rounded-[100px] text-sm cursor-pointer">
              SEE THE DASHBOARD
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Day70;
