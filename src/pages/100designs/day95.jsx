import React from "react";

export default function Day95() {
  const MENU = ["What We Do", "Work", "Approach", "Insights", "Contact"];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className="border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="relative isolate h-screen w-screen sfpro-text hidden lg:block bg-zinc-100"
        style={{
          backgroundImage: "url(/images/designs/day95/bg.png)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-zinc-900/30 -z-10" />
        {/* Header */}
        <div className="flex items-center justify-between px-[51px] py-[25px] bg-linear-to-b from-zinc-900/40 to-transparent">
          <h1 className="text-zinc-100 text-3xl font-extralight">
            POLARIS<sup>®</sup>
          </h1>
          <div className="flex items-center gap-10 text-zinc-100">
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}
              </a>
            ))}
          </div>
          <button className="text-zinc-100 border border-zinc-400 py-2.5 px-6 rounded-[100px] cursor-pointer backdrop-blur-md">
            @polaris.agency
          </button>
        </div>
        {/* Hero */}
        <div className="px-[51px] mt-50 flex flex-col gap-5">
          <h2 className="text-3xl font-light text-zinc-50/70">
            Creative direction for the ambitious.
          </h2>
          <p className="text-5xl/16 font-light text-zinc-50">
            Design agency focused on
            <br />
            UX and AI-solutions
          </p>
        </div>
        {/* Footer */}
        <div className="absolute bottom-[30px] left-[51px] right-[51px] flex items-baseline-last justify-between">
          <div className="flex flex-col gap-7">
            <p className="text-base text-zinc-100 tracking-tighter font-extralight">
              We Partner with visionary brands to tell sharper stories,
              <br />
              build smarter identities and design for maximum impact.
              <br />
              Our work turns attention into action.
            </p>
            <div className="flex items-center gap-7">
              <button className="text-zinc-100 border border-zinc-400 py-3 px-8 rounded-[100px] cursor-pointer backdrop-blur-md text-sm font-light">
                Work with Us
              </button>
              <a href="" className="text-zinc-100 font-extralight">
                Explore Our Work
              </a>
            </div>
          </div>
          <div>
            <a href="" className="text-zinc-100 text-lg font-light">
              Scroll to Explore
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
