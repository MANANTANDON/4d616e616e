import React from "react";

export default function Day93() {
  const MENU = ["Features", "Pricing", "About", "Contact"];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className="border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="relative h-screen w-screen sfpro-text hidden lg:block py-[30px] px-10 bg-zinc-100"
        style={{
          backgroundImage: "url(/images/designs/day93/bg.png)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-15 bg-[#263636] py-3 pr-3 pl-6 rounded-xl">
            <h1 className="text-[#DAE2E4] text-4xl tracking-tighter font-semibold">
              Ollio
            </h1>
            <div className="flex items-center gap-7 text-[#F4F4F4] text-sm font-light">
              {MENU.map((item, key) => (
                <a href="" key={key}>
                  {item}
                </a>
              ))}
            </div>
            <button className="bg-[#F4F4F4] py-2 px-6 rounded-lg cursor-pointer tracking-tight">
              Join The Waitlist
            </button>
          </div>
        </div>
        {/* Hero */}
        <div className="flex flex-col items-center gap-10 mt-18">
          <div className="px-4 py-1 bg-[#26353520] text-[#263535] w-fit rounded-[100px] text-sm font-semibold">
            • Now avaliabe for MacOS
          </div>
          <h1 className="text-center text-[#263535] text-8xl/22 tracking-tighter font-light">
            Where Humans and <br /> Agents Create
          </h1>
          <p className="text-center text-[#263535] text-lg/6 font-light">
            The unified workspace for human-agents collaboration. Harness
            powerfull APIs
            <br /> to Build, Iterate, and scale your most overhead.
          </p>
          <button className="bg-[#263636] text-zinc-100 px-8 py-3.5 cursor-pointer rounded-xl">
            Explore Journey <span className="text-sm ml-2">􀆊</span>
          </button>
        </div>
      </div>
    </>
  );
}
