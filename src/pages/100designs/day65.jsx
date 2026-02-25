import React from "react";

const Day65 = () => {
  const MENU = ["Discover", "Blog", "Pricing", "Features"];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="sfpro-text h-screen w-screen bg-zinc-800 py-[50px] px-12 hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day65/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-zinc-100 font-semibold text-2xl tracking-tighter">
            PromptStash
          </h1>
          <div className="flex gap-[25px]">
            {MENU.map((item, key) => (
              <div className="flex items-center gap-[25px]">
                <a href="" key={key} className="text-zinc-100 text-lg">
                  {item}
                </a>
                {key < MENU.length - 1 && (
                  <div className="h-1.5 w-1.5 bg-zinc-100" />
                )}
              </div>
            ))}
          </div>
          <button className="bg-zinc-600/20 border border-zinc-100/50 px-6 py-2.5 text-lg text-zinc-100">
            Get Early Access
          </button>
        </div>
        {/* Hero Section */}
        <div className="flex flex-col gap-6 pt-[130px]">
          <h2 className="text-zinc-100 text-8xl tracking-tighter font-light fr">
            Your prompt library,
            <br />
            finally origanised.
          </h2>
          <p className="text-zinc-100/80 text-lg tracking-tight">
            Every Midjourney style you.ve every made, stored and ready to use
            again.
            <br />
            No jumping around apps, no forgotten notes, just your work, when you
            need it.
          </p>
          <div className="flex items-center gap-6">
            <button className="bg-zinc-100 px-6 py-2.5 text-zinc-900 text-lg font-medium tracking-tight cursor-pointer border-2 border-zinc-500/20">
              Get Early Access
            </button>
            <a href="" className="text-lg text-zinc-100">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Day65;
