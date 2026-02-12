import React from "react";

const Day59 = () => {
  const MENU = ["Demos", "About", "Blog", "Pages", "Contact"];

  const CTAButton = ({ text }) => (
    <button className="bg-[#2D2D2D] text-[#FFFFFF] px-4 py-2 rounded-4xl cursor-pointer sfpro-text">
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
      <div className="hidden lg:block">
        <div className=" bg-[#FEFEFE] flex items-center justify-between pt-[27px] pb-[50px] px-20 sfpro-text">
          <h1 className="text-[#2D2D2D] text-2xl font-semibold">Stravo</h1>
          <div className="flex gap-[50px]">
            {MENU.map((item, key) => (
              <a href="" key={key} className="text-[#2D2D2D]">
                {item}
              </a>
            ))}
          </div>
          <CTAButton text="Get started" />
        </div>
        {/* Hero Section */}
        <div
          className="h-screen w-screen bg-zinc-500 sfpro-text flex flex-col items-center gap-[30px]"
          style={{
            backgroundImage: "url(/images/designs/day59/bg.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-7xl text-[#2D2D2D] text-center font-bold tracking-tight">
            Smarter teams
            <br />
            start with Stravo
          </h2>
          <p className="text-xl text-[#2D2D2D] text-center font-medium">
            A modern platform to manage projects, align teams, <br /> and boost
            productivity - all in one place.
          </p>
          <div className="flex gap-4">
            <CTAButton text="Get Started 􀄫" />
            <button className="border border-[#2D2D2D]/20 text-[#2D2D2D] px-4 py-2 rounded-4xl cursor-pointer sfpro-text bg-[#FEFEFE]">
              {" "}
              Learn More 􀄫
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Day59;
