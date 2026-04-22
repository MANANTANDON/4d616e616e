import React from "react";

export default function Day84() {
  const MENU = ["Demo", "Origin", "Compare", "Pricing"];

  const CTAButton = ({ classname, text }) => (
    <button
      className={`${classname} cursor-pointer px-8 py-2 rounded-md font-medium tracking-tight`}
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
        className="relative h-screen w-screen sfpro-text hidden lg:block py-4 px-[70px] overflow-hidden"
        style={{
          backgroundImage: "url(/images/designs/day84/bg.png)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-zinc-900/30 z-10" />

        {/* Header */}
        <div className="relative z-20 flex items-center justify-between border-b border-zinc-100/10 pb-4">
          <h1 className="text-zinc-100 font-medium text-2xl fr tracking-widest">
            SATHI
          </h1>

          <div className="flex items-center gap-[25px] text-zinc-100">
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}
                {item === "Compare" && <span className="text-xs ml-1">􀆈</span>}
              </a>
            ))}
          </div>

          <CTAButton
            text="Book a demo"
            classname="bg-zinc-800/30 backdrop-blur-md text-zinc-100 border border-zinc-100/20"
          />
        </div>

        {/* Hero */}
        <div className="relative z-20 flex flex-col gap-6 mt-45">
          <h2 className="fr text-zinc-100 text-6xl tracking-tighter font-normal">
            See The True Impact Of
            <br />
            Your affiliate Program
          </h2>

          <p className="text-zinc-100/80">
            The new standards of Shopify brand turning affiliate into a
            <br />
            primary revenue driver. SATHI turns Creator programs into
            <br />
            measurable, defensible performance engines.
          </p>

          <div className="flex items-center gap-5">
            <CTAButton
              text="Start a Free Trial"
              classname="bg-zinc-100 text-zinc-900 border border-zinc-100"
            />

            <CTAButton
              text="Book a demo"
              classname="bg-zinc-800/30 backdrop-blur-md text-zinc-100 border border-zinc-100/20"
            />
          </div>
        </div>
        {/* Footer */}
        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center z-20">
          <h2 className="text-[#FFFFFF] font-semibold text-sm">
            Brands running profitable affiliate programs with SATHI.
          </h2>
        </div>
      </div>
    </>
  );
}
