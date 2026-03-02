import React from "react";

export default function Day67() {
  const MENU = ["Work", "Story", "Process"];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="h-screen w-screen bg-zinc-100 sfpro-text py-[50px] px-20 hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day67/bg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[55px]">
            <a
              href=""
              className="text-zinc-100 font-medium text-xl tracking-tighter"
            >
              SOLACE.
            </a>
            {MENU.map((item, key) => (
              <a
                href=""
                key={key}
                className="text-zinc-100 text-md font-extralight"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-[55px]">
            <a href="" className="text-zinc-100 text-lg font-light">
              Login
            </a>
            <button className="text-zinc-100 border border-zinc-100/30 px-6 py-1.5 text-lg font-light cursor-pointer relative">
              Sign In
              <div className="absolute h-3 w-3 border-l border-t border-zinc-100 left-0 top-0" />
              <div className="absolute h-3 w-3 border-r border-t border-zinc-100 right-0 top-0" />
              <div className="absolute h-3 w-3 border-l border-b border-zinc-100 left-0 bottom-0" />
              <div className="absolute h-3 w-3 border-r border-b border-zinc-100 right-0 bottom-0" />
            </button>
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-9 mt-[110px]">
          <h1 className="fr text-zinc-100 tracking-tighter font-extralight text-6xl text-center">
            Where shadows give
            <br />
            birth to Stories.
          </h1>
          <p className="text-zinc-100/70 font-normal text-lg/6 text-center">
            From uncertainity to clarity, we design digital
            <br />
            worlds that carry emotion in every detail.
          </p>
          <button className="bg-zinc-100 px-6 py-3 cursor-pointer font-medium">
            Explore Projects
          </button>
        </div>
      </div>
    </>
  );
}
