import React from "react";

const Day54 = () => {
  const MENU = ["Features", "How It Works", "FAQ", "Pricing"];

  const CTAButton = ({ text }) => (
    <button className="bg-[#030504] text-[#EDEDED] px-6 py-2.5 rounded-2xl font-medium text-lg cursor-pointer border border-zinc-100/80">
      {text}
    </button>
  );

  const CTAButtonTwo = ({ text }) => (
    <button className=" font-medium text-lg cursor-pointer">{text}</button>
  );
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="h-screen w-screen bg-zinc-800 sfpro-text py-10 px-[120px] hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day54/bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-2xl">Flowstate</h1>
          <div className="flex items-center gap-5 font-regular xl:ml-30">
            {MENU.map((item, key) => (
              <a href="" key={key} className="text-lg">
                {item}
              </a>
            ))}
          </div>
          <div className="flex gap-[30px]">
            <CTAButtonTwo text="Login" />
            <CTAButton text="Get Started" />
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center py-[130px] gap-[25px]">
          <h2 className="bg-slate-500/50 text-zinc-100 tracking-widest font-medium w-fit px-4 py-1 rounded-4xl backdrop-blur-lg">
            INFRASTRUCTURE FOR NEXT FINANCIAL YEAR
          </h2>
          <h2 className="text-7xl tracking-tighter font-semibold text-center">
            Trust-first infrastructure
            <br />
            for digital finance
          </h2>
          <p className="text-center font-medium tracking-tighter text-[#575B76] text-lg/6">
            Flowstate is the calm operating system for moderm teams, helping you
            turn ideas
            <br /> into shipped products without chaos.
          </p>
          <div className="flex gap-[30px]">
            <CTAButtonTwo text="Learn More" />
            <CTAButton text="Get Started" />
          </div>
        </div>
        {/* Footer */}
        <div className="absolute bottom-15 flex items-center justify-center left-0 right-0">
          <h2 className="text-lg text-zinc-300/90">
            Trusted by experts at leading companies
          </h2>
        </div>
      </div>
    </>
  );
};

export default Day54;
