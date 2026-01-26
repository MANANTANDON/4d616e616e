import React from "react";

const Day44 = () => {
  const MENU = ["Work", "Approach", "Journal", "Product", "Contact"];

  const handleButtonClick = () => {
    alert(
      "Our approach combines strategy, creativity, and collaboration to build meaningful digital experiences.",
    );
  };
  const OurApproachButton = () => (
    <button
      className="border border-zinc-200/40 rounded-4xl px-6 py-3 backdrop-blur-xl bg-zinc-500/20 text-zinc-200/80 font-normal cursor-pointer"
      onClick={handleButtonClick}
    >
      Our Approach
    </button>
  );
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="h-screen w-screen bg-zinc-900 px-10 py-8 hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day44/bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* HEADER */}
        <div className="border-amber-400 flex items-center justify-between">
          <div className="sfpro-text text-xl font-normal text-zinc-100">
            OPENWARD
          </div>
          <div className="sfpro-text text-lg font-light flex items-center gap-5 justify-center">
            {MENU.map((item, key) => (
              <a
                href="/100designs/day44"
                key={key}
                className={`flex items-center gap-5 ${item === "Work" ? "text-zinc-100" : "text-zinc-100/50"} hover:text-zinc-100`}
              >
                <span className="mt-1">{item}</span>
                <span className="text-zinc-100 text-4xl">
                  {key < MENU.length - 1 && "•"}
                </span>
              </a>
            ))}
          </div>
          <OurApproachButton />
        </div>
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-5 pt-[117px]">
          <h1 className="fr tracking-tighter text-6xl text-zinc-200/60 font-light">
            A <span className="text-zinc-200">shared view</span> of what's
            possible
          </h1>
          <h2 className="text-center text-zinc-200 font-light">
            We design thoughtful digital experiences shaped by collaboration and
            a belief that the
            <br />
            best work comes from looking ahead together with clarity and
            intention.
          </h2>
          <OurApproachButton />
        </div>
      </div>
    </>
  );
};

export default Day44;
