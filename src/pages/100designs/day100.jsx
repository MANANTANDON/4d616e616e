import React from "react";

export default function Day99() {
  const MENU = ["Home", "Solutions", "Resources", "Pricing"];

  const CTAButton = ({ text, classname }) => (
    <button
      className={`text-zinc-100 px-6 py-2 rounded-[100px] cursor-pointer font-light ${classname}`}
    >
      {text}
    </button>
  );
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className="border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="relative isolate h-screen w-screen sfpro-text hidden lg:block bg-zinc-100 px-[70px] py-[30px]"
        style={{
          backgroundImage: "url(/images/designs/day100/bg.png)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl text-zinc-100 tracking-tight">AETHERIS</h1>
          <div className="text-zinc-100 flex items-center gap-15 font-light">
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}
              </a>
            ))}
          </div>
          <CTAButton text="Initialise Cluster" classname="bg-[#362C35]" />
        </div>
        {/* Hero */}
        <div className="flex flex-col gap-7 mt-30">
          <div className="text-sm text-zinc-100 bg-[#3A2933] px-4 py-1.5 w-fit rounded-[100px] tracking-wider">
            <span>􀋃</span> Powering 500+ Gen-AI startups <span>􀆊</span>
          </div>
          <h2 className="text-zinc-100 text-8xl tracking-tight">
            Intelligence <br />
            without borders
          </h2>
          <p className="text-zinc-100/80">
            Harness a global mesh of high-performance GPUs to deply
            <br />
            foundation models anywhere on Earth.
          </p>
          <div className="flex gap-5">
            <CTAButton text="Initialise Cluster" classname="bg-[#362C35]" />
            <CTAButton text="Learn More" classname=" border border-[#362C35]" />
          </div>
        </div>
      </div>
    </>
  );
}

// 100 Days done...
