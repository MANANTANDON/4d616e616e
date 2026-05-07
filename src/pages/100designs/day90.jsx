import React from "react";

export default function Day90() {
  const MENU = ["PRODUCT", "SOLUTIONS", "RESOURCES", "PRICING"];
  const CTAButton = ({ text }) => (
    <button className="bg-zinc-100 px-6.5 py-2.5 font-light text-lg cursor-pointer">
      {text}
    </button>
  );
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className="border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="relative h-screen w-screen sfpro-text hidden lg:block overflow-hidden px-10 py-[18px] isolate"
        style={{
          backgroundImage: "url(/images/designs/day90/bg.png)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-zinc-900/30 z-0" />
        {/* Header */}
        <div className="relative z-10 flex items-center justify-between">
          <h1 className="text-3xl text-[#F3C379]">AUREX</h1>
          <div className="flex gap-8 text-zinc-50 font-medium">
            {MENU.map((item, key) => (
              <a href="" key={key} className="tracking-widest">
                {item}
              </a>
            ))}
          </div>
          <button className="bg-[#632E0F] text-[#F3C379] border border-[#F3C379] px-6 py-2 rounded-xl text-lg cursor-pointer hover:text-[#632E0F] hover:bg-[#F3C379]">
            Get Started
          </button>
        </div>
        {/* Hero */}
        <div className="relative flex flex-col items-center justify-center z-10 gap-5 mt-40">
          <h3 className="text-center text-zinc-50 text-lg font-medium tracking-widest">
            INTRODUCING AUREX
          </h3>
          <h2 className="text-center text-8xl font-semibold tracking-tighter text-zinc-100">
            Build like you
            <br />
            Own the Future
          </h2>
          <p className="text-zinc-50/80 text-center text-lg">
            Turn ideas into production-ready
            <br />
            systems faster than ever.
          </p>
          <div className="flex gap-7">
            <button className="bg-linear-to-b from-[#F3C379] to-[#FFB155] px-6 py-2.5 rounded-xl text-black font-medium border border-[#F3C379] text-lg shadow-[0_4px_20px_rgba(243,195,121,0.25)] cursor-pointer">
              Get Started
            </button>
            <button className="bg-zinc-50/70 border border-zinc-50 text-zinc-900 px-6 py-2.5 rounded-xl font-medium text-lg cursor-pointer">
              See How It Works
            </button>
          </div>
        </div>
        {/* Footer */}
        <div className="flex items-center justify-center absolute left-10 right-10 bottom-8">
          <h4 className="text-zinc-900 font-semibold tracking-widest">
            TRUSTED BY TEAMS WORLDWIDE
          </h4>
        </div>
      </div>
    </>
  );
}
