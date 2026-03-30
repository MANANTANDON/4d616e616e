import { Instagram, LinkedIn, X } from "@mui/icons-material";
import React from "react";

const Day74 = () => {
  const MENU = ["Work", "Approach", "Insights", "Contact"];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className=" h-screen w-screen px-14 py-[34px] sfpro-text hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day74/bg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-zinc-100 text-3xl font-light">
            Baseline<sup>®</sup>
          </h1>
          <div className="flex items-center gap-[29px] text-lg text-zinc-100">
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}
              </a>
            ))}
          </div>
          <div className="flex gap-[15px] text-zinc-100">
            <div className="bg-zinc-100/15 h-10 w-10 flex items-center justify-center rounded-xl border border-zinc-100/40 cursor-pointer">
              <Instagram />
            </div>
            <div className="bg-zinc-100/15 h-10 w-10 flex items-center justify-center rounded-xl border border-zinc-100/40 cursor-pointer">
              <LinkedIn />
            </div>
            <div className="bg-zinc-100/15 h-10 w-10 flex items-center justify-center rounded-xl border border-zinc-100/40 cursor-pointer">
              <X />
            </div>
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex flex-col gap-10 pt-[170px]">
          <h2 className="text-zinc-100 text-8xl/20 tracking-tight font-semibold">
            Design That
            <br />
            Drives Results
          </h2>
          <p className="text-zinc-100/80 text-xl/7">
            We help ambitious brands turn their ideas into <br />{" "}
            high-performing digital experiences.
          </p>
          <div className="flex gap-7 items-center">
            <button className="cursor-pointer bg-zinc-100 px-7 py-3 font-medium">
              Start Your Project
            </button>
            <a href="" className="text-zinc-100 text-lg">
              See Out Work
            </a>
          </div>
        </div>
        {/* Footer Section */}
        <div className="absolute bottom-14 right-[34px] left-[34px] flex items-baseline-last justify-between">
          <div className="flex items-center gap-2 text-zinc-100 text-lg font-light">
            <span>􀄩</span>Scroll to Explore
          </div>
          <div className="bg-zinc-900/20 backdrop-blur-2xl border border-zinc-200/50 px-6 py-4 w-70 rounded-[30px]">
            <div className="flex items-center justify-between text-zinc-100/70 cursor-pointer">
              <h2>Explore Latest Projects</h2>
              <div>􀄯</div>
            </div>
            <h2 className="mt-3 text-2xl text-zinc-100">Memories in Blur</h2>
            <h3 className="text-zinc-100/70">18 March, 2026</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Day74;
