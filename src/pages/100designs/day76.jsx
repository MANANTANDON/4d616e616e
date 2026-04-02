import React from "react";

export default function Day76() {
  const MENU = ["What We Do", "Work", "Approach", "Explore The Academy"];

  const CTAButton = () => (
    <button className="cursor-pointer text-zinc-100 text-xl bg-[#08C1D5] font-light px-6 py-3 rounded-[100px]">
      Train with Us
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
        className="h-screen w-screen bg-zinc-900 py-8 px-[35px] xl:px-[65px] sfpro-text hidden lg:block "
        style={{
          backgroundImage: "url(/images/designs/day76/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-[#F9FFFF] text-2xl font-light">
            Baseline<sup>®</sup>
          </h1>
          <div className="flex items-center  gap-[26px] text-[#F9FFFF] text-lg font-light">
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}
                {item !== "Explore The Academy" && (
                  <span className=" ml-[26px]">•</span>
                )}
              </a>
            ))}
          </div>
          <CTAButton />
        </div>
        {/* Hero Section */}
        <div className="text-zinc-100 text-[90px]/30 font-extrabold tracking-tighter pt-[165px]">
          <h1>Precision Built For</h1>
          <h1 className="w-fit relative z-1">
            The Course
            <span className="absolute -left-7 top-0 right-0 bottom-0 bg-[#08C1D5] -z-1 w-140 rotate-2" />
          </h1>
        </div>
        {/* Footer */}
        <div className="absolute bottom-8 left-[35px] xl:left-[65px] right-[65px] gap-7 flex flex-col">
          <p className="text-zinc-100 text-xl/8 font-light">
            Elite coaching for golfers who take their game seriously.
            <br />
            We work on the mechanics, the mindset, and the margins
            <br />
            that separate good rounds from great ones.
          </p>
          <div className="flex gap-[30px] items-center">
            <CTAButton />
            <a href="" className="text-zinc-100 text-lg font-light">
              Explore the Academy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
