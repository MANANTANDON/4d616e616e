import React from "react";

export default function Day68() {
  const MENU = ["PRODUCT", "MANIFESTO", "LOGIN"];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="h-screen w-screen bg-zinc-800 sfpor-text hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day68/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="border-b border-zinc-900/10 flex items-center justify-between py-7 px-[34px]">
          <h2 className="font-semibold text-xl">SUMI</h2>
          <div className="flex items-center gap-[70px]">
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}
              </a>
            ))}
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex items-center flex-col pt-[100px] gap-[27px]">
          <h3 className="text-zinc-900/40 text-xs tracking-widest font-medium">
            NEURAL ARCHITECTURE V 2.0.4
          </h3>
          <h1 className="text-8xl">Order from Chaos</h1>
          <p className="text-center text-lg/6 font-normal text-zinc-900/80">
            The first neural interface for yout enterprise memory. We turn your
            <br />
            fragmented data lakes into a navigable star map.
          </p>
          <div className="flex flex-col items-center">
            <button className="bg-zinc-900 text-zinc-100 text-sm px-8 py-4.5 font-extralight rounded-md cursor-pointer shadow-2xl w-fit">
              REQUEST BETA ACCESS
            </button>
            <h6 className="text-[9px] font-medium text-zinc-900/80 mt-1">
              Native 1-click integration: Slack, Jira & Drive.
            </h6>
          </div>
        </div>
        {/* Footer */}
        <div className=" absolute bottom-0 left-0 right-0 border-t border-zinc-900/10 flex items-center justify-between py-7 px-[34px]">
          <h2 className="text-sm text-zinc-900/50">System Status: Online</h2>
          <h2 className="text-sm text-zinc-900/50">v.2.0.4 [Beta]</h2>
        </div>
      </div>
    </>
  );
}
