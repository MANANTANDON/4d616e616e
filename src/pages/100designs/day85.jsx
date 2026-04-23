import React from "react";

export default function Day85() {
  const MENU = ["Home", "Approach", "Journal", "Product", "Contact"];
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
          backgroundImage: "url(/images/designs/day85/bg.png)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-zinc-100 tracking-tighter">OPENWARD</h1>
          <div className="flex items-center gap-5">
            {MENU.map((item, key) => (
              <a
                href=""
                key={key}
                className="flex items-center text-zinc-100/60 hover:text-zinc-100"
              >
                {item}{" "}
                {key < MENU.length - 1 && (
                  <span className="text-3xl ml-5 text-zinc-100/30">•</span>
                )}
              </a>
            ))}
          </div>
          <button className="bg-zinc-400/20 text-zinc-100 border border-zinc-100/40 px-6 py-2.5 rounded-[100px] cursor-pointer">
            Our Approach
          </button>
        </div>
        {/* Hero  */}
        <div className="flex items-center flex-col mt-20 gap-10">
          <h2 className="bg-zinc-200/20 text-zinc-100 border border-zinc-100/30 px-6 py-2 rounded-[100px] w-fit font-light text-sm backdrop-blur-lg">
            Over <span className="font-semibold">100,000+</span> mindfull
            moments logged.
          </h2>
          <h3 className="fr tracking-tighter text-zinc-100 text-7xl/22 font-extralight text-center">
            Discover{" "}
            <span className="font-medium">daily guided meditations,</span>{" "}
            <br />
            and <span className="font-medium">tools to reconnect</span> with
            yourself.
          </h3>
          <p className="text-center text-zinc-100 text-lg/7">
            {" "}
            we designed thoughtful digital experience shaped by collaboration
            and belief that you
            <br /> can you create the best version of yourself if you stay,
            mindful and grounded.
          </p>
          <button className="bg-zinc-100 text-zinc-900 border border-zinc-100 px-8 py-3 rounded-[100px] cursor-pointer text-xl font-medium tracking-tight">
            Our Approach
          </button>
        </div>
      </div>
    </>
  );
}
