import React from "react";

const Day66 = () => {
  const MENU = ["Work", "Services", "Studio", "Journal", "Contact"];
  const FooterText = [
    "Quiet design. Strong impact.",
    "Built to last, not to shout.",
    "Where clarity meets emotion.",
  ];

  const CTAButton = ({ text, classname }) => (
    <button
      className={`${classname} font-normal bg-zinc-100 px-6 py-2 rounded-[100px] cursor-pointer`}
    >
      {text}
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
        className="h-screen w-screen bg-zinc-900 py-5 sfpro-text hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day66/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-center animate-fadeInDown">
          <div className="flex items-center gap-12 ">
            <div className="flex items-center gap-12 text-lg font-normal text-zinc-100">
              {MENU.map((item, key) => (
                <a href="" key={key}>
                  {item}
                </a>
              ))}
            </div>
            <CTAButton text="Let's talk" classname="text-lg" />
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex items-center justify-center flex-col mt-[200px] animate-fadeIn">
          <h1 className="text-center text-7xl/19 text-zinc-100 tracking-tight">
            Designing presence
            <br />
            in a noisy world.
          </h1>
          <p className="text-center text-zinc-200 text-xl font-extralight mt-[21px]">
            We help modern brands feel timeless through digital
            <br />
            experiences inspired by nature, clarity, and intention.
          </p>
          <div className="mt-[50px] flex gap-4 items-center ">
            <button className="text-xl font-light bg-zinc-400/20 text-zinc-100 backdrop-blur-2xl border border-zinc-100/30 px-6 py-2 rounded-[100px] cursor-pointer">
              Start a project
            </button>
            <CTAButton text="View our work" classname="text-xl" />
          </div>
        </div>
        {/* Footer */}
        <div className="absolute left-[55px] right-[55px] bottom-[30px] flex items-center justify-between text-zinc-100 font-light text-xl animate-fadeInUp">
          {FooterText.map((item, key) => (
            <h2 key={key}>{item}</h2>
          ))}
        </div>
      </div>
    </>
  );
};

export default Day66;
