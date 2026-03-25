import React from "react";

export default function Day73() {
  const MENU = ["Home", "Product", "Vision", "Stories"];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="bg-[#F8F8F8] sfpro-text flex flex-col items-center py-3.5 gap-3">
          <div className="w-fit bg-[#EBEBEB] flex items-center gap-3.5 px-3 py-2 rounded-lg">
            <div className="border-2 border-[#2A2A2A] p-0.5 rounded-lg">
              <div className="bg-[#2A2A2A] h-3 w-3 rounded-[100px]" />
            </div>
            {MENU.map((item, key) => (
              <a
                href=""
                key={key}
                className={`${item === "Home" ? "text-zinc-900" : "text-[#545454]"} text-sm font-medium hover:text-zinc-900`}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="bg-[#EEEEEE] rounded-[100px] text-xs text-[#808080] font-bold pl-1 pr-2 py-1 flex items-center gap-1 mt-5">
            <div className="bg-zinc-900 text-zinc-100 px-2 py-1 rounded-[100px] text-[9px] shadow-2xl">
              􀋦
            </div>
            10,000+ users worldwide
          </div>
          <h2 className="text-center text-5xl xl:text-6xl tracking-tighter font-medium">
            Seamless, Intelligence-Powered
            <br /> Technology That Simplifies Your World
          </h2>
          <p className="text-[#6F6F6F] text-center text-base/5">
            From your morning routine to your evening wind-down, intelligent
            technology
            <br />
            handles the complexity so you never have to think twice.
          </p>
        </div>
        <div
          className="h-screen w-screen bg-zinc-900 flex justify-center"
          style={{
            backgroundImage: "url(/images/designs/day73/bg.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <button
            className="w-fit h-fit bg-zinc-900 text-zinc-100 px-6 py-3 rounded-xl 
shadow-[0_10px_30px_rgba(0,0,0,0.6),inset_0_2px_6px_rgba(255,255,255,0.15)]"
          >
            Get early access
          </button>
        </div>
      </div>
    </>
  );
}
