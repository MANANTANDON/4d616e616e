import React from "react";

export default function Day85() {
  const MENU = ["WORK", "APPROACH", "ABOUT", "JOURNAL"];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className="border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="relative h-screen w-screen sfpro-text hidden lg:block overflow-hidden"
        style={{
          backgroundImage: "url(/images/designs/day87/bg.png)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-linear-to-b from-[#070707] to-transparent py-8 px-10 ">
          <div className="flex items-center gap-4">
            <h1 className="text-[#ECD09E] fr text-3xl font-light tracking-widest">
              KATHA
            </h1>
            <h2 className="text-[#ECD09E] text-sm border-l border-[#ECD09E] pl-4">
              {" "}
              STORIES THAT STAY
            </h2>
          </div>
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-7 font-medium">
              {MENU.map((item, key) => (
                <a href="" key={key} className="text-zinc-100 text-sm">
                  {item}
                </a>
              ))}
            </div>
            <button className=" bg-linear-to-br from-[#EFC891] to-[#D3A16C] px-6 py-4 rounded-[100px] border border-[#D3A16C] font-semibold tracking-tight cursor-pointer text-sm">
              LET'S CREATE
            </button>
            <button className="px-4 py-3.75 rounded-[100px] border border-[#D3A16C] font-semibold tracking-tight cursor-pointer text-sm text-[#D3A16C]">
              􀜓
            </button>
          </div>
        </div>
        <div className="px-20 flex flex-col gap-10 mt-30">
          <div>
            <h1 className="fr text-zinc-100 text-7xl font-light tracking-tight">
              People don't
              <br />
              remember facts.
            </h1>
            <h1 className="fr text-[#F4CB9D] text-7xl mt-3 font-light tracking-tight">
              <i>
                They remember
                <br />
                feelings.
              </i>
            </h1>
          </div>
          <p className="text-zinc-100 mt-7">
            We craft brand stories that move hearts,
            <br />
            spark conversation and build legacies.
          </p>
          <div className="flex items-center gap-4">
            <h2 className="text-sm text-zinc-100 font-semibold tracking-widest ">
              WATCH OUT STORY
            </h2>
            <button className="px-4 py-3 rounded-[100px] bg-[#D3A16C] font-semibold tracking-tight cursor-pointer text-sm text-zinc-900">
              􀊄
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
