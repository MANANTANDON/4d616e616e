import React from "react";

const Day79 = () => {
  const MENU = ["What's included", "For players", "For coaches", "FAQ"];

  const INFO = [
    {
      icon: "􀡵",
      title: "Real-Time Match Analysis",
      description: "Fast, actionable insights.",
    },
    {
      icon: "􀠐",
      title: "Full-Game Health Monitoring",
      description: "Combining movement and stamina for a complete picture.",
    },
    {
      icon: "􀋦",
      title: "Personalised Performance Insights",
      description: "Tailored recommendations based on your playing styles.",
    },
  ];

  const CTAButton = ({ text }) => (
    <button className="cursor-pointer bg-zinc-100 pl-5 py-1.5 pr-1.5 flex items-center gap-2 text-lg font-light tracking-tighter w-fit">
      {text}{" "}
      <span className="bg-zinc-900 text-zinc-100 px-3 py-2 text-base">􀄯</span>
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
        className="h-screen w-screen sfpro-text hidden lg:block py-8 px-[42px]"
        style={{
          backgroundImage: "url(/images/designs/day79/bg.png)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-zinc-100 font-light text-2xl">CourtSense</h1>
          <div className="text-zinc-100 flex items-center gap-2 font-light">
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}{" "}
                {key < MENU.length - 1 && <span className="ml-2">•</span>}
              </a>
            ))}
          </div>
          <CTAButton text="Join Waitlist" />
        </div>
        {/* Hero Section */}
        <p className="text-zinc-100 text-6xl tracking-tighter font-light flex flex-col gap-5 pt-20">
          <span>Play Smarter.</span>
          <span className="font-bold">Dominate the Court.</span>
        </p>
        {/* Footer Section */}
        <div className="absolute bottom-8 left-[42px] right-[42px] flex items-baseline-last justify-between">
          <div className="text-zinc-100 flex flex-col gap-4">
            {INFO.map((item, key) => (
              <div
                key={key}
                className="bg-zinc-100/10 hover:bg-zinc-100/20 backdrop-blur-xl cursor-auto flex items-center gap-5 p-5"
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <div className="text-lg font-semibold">{item.title}</div>
                  <div className="text-sm font-light">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-[25px]">
            <p className="text-zinc-100 text-xl/7 font-extralight">
              CourtSense reads your game in real time, turning
              <br /> raw performance into a clear picture of exactly
              <br /> where excel and what you can improve.
            </p>
            <CTAButton text="Book a Free Demo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Day79;
