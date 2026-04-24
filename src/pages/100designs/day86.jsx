import React, { useState } from "react";

export default function Day85() {
  const MENU = ["Home", "How It Works", "Philosophy", "Use Cases"];
  const [language, setLanguage] = useState("EN");
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className="border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="relative h-screen w-screen sfpro-text hidden lg:block py-8 px-10 overflow-hidden"
        style={{
          backgroundImage: "url(/images/designs/day86/bg.png)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-zinc-100 font-light text-2xl tracking-widest">
            ATHERA
          </h1>
          <div className="flex items-center gap-7 bg-zinc-700/40 border border-zinc-500/30 backdrop-blur-md px-8 py-3.5 rounded-[100px]">
            {MENU.map((item, key) => (
              <a
                href=""
                key={key}
                className="text-zinc-100/80 text-base font-light hover:text-zinc-100"
              >
                {item}{" "}
                {key < MENU.length - 1 && <span className="ml-7">•</span>}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <select
              value={language}
              className="text-zinc-100 outline-none"
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="EN">EN</option>
              <option value="ES">ES</option>
              <option value="GR">GR</option>
              <option value="FR">FR</option>
            </select>
            <h2 className="text-zinc-100 cursor-pointer">􀊫</h2>
          </div>
        </div>
        {/* Hero */}
        <div className="flex items-center justify-center flex-col gap-10 mt-20">
          <h2 className="text-zinc-100 text-center text-6xl/18 tracking-widest fr font-extralight">
            A New Kind of Intelligence
            <br /> <span className="font-medium">- HUMAN AT HEART</span>
          </h2>
          <p className="text-center text-zinc-200 font-light">
            Athera is a collaborative AI designed to elevate thought, co-create
            <br /> ideas, and build with empathy. It's in sync with how you
            think and feel.
          </p>
          <button className="text-zinc-900 bg-zinc-100 px-6 py-3 rounded-[100px] font-medium cursor-pointer">
            See How it Works
          </button>
        </div>
        {/* Footer */}
        <div className="absolute bottom-8 left-10 right-10 flex items-center justify-center text-sm text-zinc-100/50">
          Reviews 1,042 Excellent Score
        </div>
      </div>
    </>
  );
}
