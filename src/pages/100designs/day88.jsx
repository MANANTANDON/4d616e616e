import React from "react";

export default function Day88() {
  const MENU = ["Home", "Products", "Pricing", "Features", "Resources"];
  const DETAILS = [
    { icon: "􀙫", title: "Lifelike Speech", desc: "in Seconds" },
    { icon: "􀞛", title: "Voice Cloning", desc: "with Control" },
    { icon: "􀆪", title: "Global Research", desc: "every Language" },
  ];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className="border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="relative h-screen w-screen sfpro-text hidden lg:block overflow-hidden px-[90px] py-6"
        style={{
          backgroundImage: "url(/images/designs/day88/bg.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-[#3A3732]">Velora</h1>
          <div className="flex items-center gap-10 text-[#3A3732] font-medium">
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-8">
            <button className="text-[#3A3732] font-semibold cursor-pointer">
              Log in
            </button>
            <button className="bg-[#5F7D63] text-[#ECFFEB] border border-[#687665] px-7 py-2 rounded-lg cursor-pointer font-medium ">
              Get Started
            </button>
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex flex-col gap-7 mt-40">
          <p className="text-7xl font-semibold tracking-tighter text-[#2C3D2B]">
            The Best Ideas Begin <br />
            When{" "}
            <span className="fr font-normal">
              <i>You Pause</i>
            </span>
          </p>
          <p className="text-[#6A6C61] text-lg font-medium">
            From quiet moments to meaningful direction, we
            <br /> discover ideas that truly matter most.
          </p>
          <div className="flex items-center gap-7">
            <button className="bg-[#5F7D63] text-[#ECFFEB] border border-[#687665] px-6 py-3 rounded-lg cursor-pointer font-normal ">
              Start for Free 􀄯
            </button>
            <button className=" text-[#31342B] border border-[#E4E1D8] px-6 py-3 rounded-lg cursor-pointer font-normal ">
              Get Started
            </button>
          </div>
        </div>
        {/* Footer */}
        <div className="absolute left-[90px] right-[90px] bottom-10 flex gap-10">
          {DETAILS.map((item, key) => (
            <div className=" flex items-center gap-3" key={key}>
              <div className="text-2xl text-[#35372A] bg-[#F4E7DF] border border-[#EDE4DD] px-3 py-2.5 rounded-[100px]">
                {item.icon}
              </div>
              <div>
                <div className="text-[#45403A] font-semibold">{item.title}</div>
                <div className="text-[#79746E] text-sm">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
