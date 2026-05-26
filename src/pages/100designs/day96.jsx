import React from "react";

export default function Day96() {
  const MENU = ["About", "Our Work", "Contact"];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className="border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="relative isolate h-screen w-screen sfpro-text hidden lg:block bg-zinc-100 px-[50px] py-10"
        style={{
          backgroundImage: "url(/images/designs/day96/bg.png)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between animate-fadeInDown">
          <h1 className="text-zinc-100 text-3xl font-semibold tracking-tight flex items-baseline-last gap-3">
            Atleier <span className="text-xs">􀀁</span>
          </h1>
          <div className="flex items-center gap-30 xl:gap-50 text-zinc-100 text-lg font-light">
            {MENU.map((item, key) => (
              <a href="" key={key} className="cursor-pointer">
                {item}
              </a>
            ))}
          </div>
          <a
            href=""
            className="flex items-center gap-2 text-zinc-100 text-xl font-light"
          >
            Menu <div className="font-extralight">􀜓</div>
          </a>
        </div>
        <div className="animate-fadeIn absolute bottom-55 left-[50px] text-zinc-100 font-semibold text-2xl/9 tracking-tight">
          <p>
            UI/UX Design
            <br />
            Mobile App Design
            <br />
            Framer Development
            <br />
            Brand Identity
          </p>
        </div>
        <div className=" animate-fadeIn absolute top-65 right-[50px] text-zinc-100 tracking-tight">
          <h2 className="font-bold text-xl">©2026</h2>
          <h4 className="text-base/5 ">
            Creating immersive websites and brand
            <br />
            systems for modern companies that stand
            <br /> out through visuals, motion, and digital
            <br />
            experiences.
          </h4>
        </div>
        {/* Footer */}
        <div className="animate-fadeInUp absolute -bottom-8 left-[50px] right-[50px] flex items-center justify-center">
          <h2 className=" flex items-baseline-last text-zinc-100 text-[130px] xl:text-[200px] font-semibold tracking-tighter gap-5 xl:gap-10">
            Atelier <div className="text-[50px] xl:text-[80px]">􀀁</div> Studio
          </h2>
        </div>
      </div>
    </>
  );
}
