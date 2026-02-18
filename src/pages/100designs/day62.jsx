import React from "react";

const Day62 = () => {
  const MENU = ["Discover", "Blog", "Pricing", "Features"];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="h-screen w-screen bg-zinc-100 sfpro-text hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day62/bg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="pt-[38px] px-20 xl:px-[150px] ">
          <div className="flex items-center justify-between pl-6 py-3 pr-3 border border-zinc-100/30 rounded-[100px]">
            <div className=" text-zinc-100 font-semibold">NEXUSMIND</div>
            <div className="text-zinc-100 flex items-center gap-[27px]">
              {MENU.map((item, key) => (
                <div className="flex items-center gap-[27px]">
                  <a href="" key={key} className="font-light">
                    {item}
                  </a>
                  {item !== "Features" && (
                    <div className="h-[4.5px] w-[4.5px] bg-zinc-100/50" />
                  )}
                </div>
              ))}
            </div>
            <button className="text-zinc-100 bg-zinc-700/20 border border-zinc-100/20 backdrop-blur-3xl py-4 px-6 rounded-4xl cursor-pointer">
              Request a Demo
            </button>
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-7 pt-[70px]">
          <div className="flex gap-2 text-zinc-100 bg-zinc-400/20 pr-4 py-2 pl-2 rounded-4xl items-center backdrop-blur-xl">
            <div className="bg-zinc-100 text-zinc-900 px-2.5 py-1.5 rounded-4xl">
              Latest
            </div>
            Now avaliabe for MacOS
          </div>
          <h1 className="text-zinc-100 text-7xl text-center font-normal tracking-tighter">
            Where Humans{" "}
            <span className="text-zinc-100/70 font-light">and</span> <br />{" "}
            <span className="text-zinc-100/70 font-light">Agents</span> Create
          </h1>
          <p className="text-center text-zinc-100/70 text-lg">
            The unified workspace for human-agent collaboration. Harness
            powerfull APIs to build, <br />
            iterate, and scale your most ambitions projects without the
            infrastructure overhead.
          </p>
          <div className="text-lg flex gap-[27px]">
            <button className="text-zinc-900 bg-zinc-100 px-6 py-3 rounded-4xl border border-zinc-400 cursor-pointer">
              Start Building
            </button>
            <button className="text-zinc-100 cursor-pointer">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Day62;
