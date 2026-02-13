import React from "react";

const Day60 = () => {
  const MENU = ["Products", "Features", "Integrations", "Pricing"];

  const CTAButton = ({ text, classname }) => (
    <button
      className={`${classname} px-5 py-2.5 cursor-pointer text-lg border border-zinc-100/10`}
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
        className="h-screen w-screen bg-zinc-800 sfpro-text py-[43px] px-[100px] hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day60/bg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between animate-fadeInDown">
          <div className="flex items-center gap-[50px]">
            <h1 className="text-zinc-100/90 font-bold text-2xl">WordPilot</h1>
            <div className="text-zinc-100/70 flex items-center gap-[26px] font-light text-sm">
              {MENU.map((item, key) => (
                <a href="" key={key}>
                  {item}
                </a>
              ))}
            </div>
          </div>
          <CTAButton text="Contact 􀰑" classname="bg-[#1C1C1C] text-zinc-100 " />
        </div>
        {/* Hero Section */}
        <div className="flex flex-col gap-[33px] py-[130px] animate-fadeInUp">
          <div className="text-zinc-100 font-light text-xs bg-zinc-90/10 border border-zinc-50/20 w-fit px-3 py-1 rounded-4xl">
            3.2M+ AI-assisted documents written monthly with WordPilot{" "}
          </div>
          <h2 className="text-zinc-100 text-7xl">
            Automation <br /> Unleashed
          </h2>
          <p className="text-zinc-100/70">
            Automate Tasks, Sync Teams, And Keep
            <br />
            Projects On Track-Effortlessly
          </p>
          <div className="flex items-center gap-6">
            <CTAButton
              text="Explore Integration 􀰑"
              classname="text-[#1C1C1C] bg-zinc-100 "
            />
            <CTAButton text="Contact" classname="bg-[#1C1C1C] text-zinc-100 " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Day60;
