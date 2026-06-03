import React from "react";

export default function Day99() {
  const MENU = ["Products", "About", "Features", "Support"];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className="border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="relative isolate h-screen w-screen sfpro-text hidden lg:block bg-zinc-100 px-[70px] py-[26px]"
        style={{
          backgroundImage: "url(/images/designs/day99/bg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <a href="" className="text-4xl text-zinc-100 tracking-tight">
            Aurevia
          </a>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-10 text-lg text-zinc-100">
              {MENU.map((item, key) => (
                <a href="" key={key}>
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-5 text-lg">
              <button className="text-zinc-100 font-light border border-zinc-100 px-6 py-2 rounded-[100px] cursor-pointer">
                Menu
              </button>
              <button className="bg-zinc-100  px-6 py-2 rounded-[100px] cursor-pointer tracking-tight">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
        {/* Hero */}
        <div className="flex flex-col gap-7 mt-30">
          <h2 className="text-zinc-100 text-7xl tracking-tight">
            Guided Journeys, <br />
            Clear Outcomes
          </h2>
          <p className="text-zinc-100/80 tracking-tight">
            Embrace a calmer approach to strategic growth. Serenitas guides
            <br />
            teams to clearer solutions and sustainable success.
          </p>
          <div className="flex items-center gap-5">
            <button className="bg-zinc-100  px-6 py-2 rounded-[100px] cursor-pointer tracking-tight text-lg">
              Discover Your Path
            </button>
            <a href="" className="text-zinc-100 text-3xl font-extralight">
              􀊕
            </a>
          </div>
        </div>
        {/* Floating Card */}
        <div className="absolute right-[70px] bottom-[100px] bg-zinc-600/10 backdrop-blur-lg p-7 rounded-[40px]">
          <h3 className="text-xl/6 font-semibold tracking-tight pb-2 border-b border-zinc-900">
            Calm & Strategic
            <br />
            Growth
          </h3>
          <p className="text-sm/5 pt-2">
            Harness clarity in your journey, with
            <br /> solutions designed for steady progress
            <br /> and lasting impact.
          </p>
        </div>
      </div>
    </>
  );
}
