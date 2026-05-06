import React from "react";

export default function Day89() {
  const MENU = ["What We Do", "Work", "Approach", "Insights", "Contacts"];
  const CTAButton = ({ text }) => (
    <button className="bg-zinc-100 px-6.5 py-2.5 font-light text-lg cursor-pointer">
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
        className="relative h-screen w-screen sfpro-text hidden lg:block overflow-hidden px-[60px] py-10"
        style={{
          backgroundImage: "url(/images/designs/day89/bg.png)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-zinc-100 text-3xl font-light">
            Baseline<sup>®</sup>
          </h1>
          <div className="text-zinc-100 flex gap-10 font-light">
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <CTAButton text="Train with Us" />
            <button className="bg-[#F1622A] py-2.5 px-4 text-lg text-zinc-100 cursor-pointer">
              􀄯
            </button>
          </div>
        </div>
        {/* Footer */}
        <div className="absolute left-10 right-10 bottom-[60px] flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <h3 className="text-zinc-50/60 font-light text-2xl">
              Creative training for the dedicated.
            </h3>
            <h2 className="text-zinc-50 text-4xl/12 font-light">
              Basketball built on skill,
              <br />
              discipline, and court vision.
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-zinc-50 text-lg font-light">
              We work with driven players to sharpen fundamentals,
              <br />
              elevate their game, and develop the mental edge that
              <br />
              seperated good from great.
            </p>
            <div className="flex items-center gap-4">
              <CTAButton text="Train with Us" />
              <a href="" className="text-zinc-100">
                Explore Our Academy
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
