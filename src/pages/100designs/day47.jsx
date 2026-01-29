import React from "react";

const Day47 = () => {
  const MENU = ["Product", "Pricing", "Cereer", "Contact"];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="h-screen w-screen bg-zinc-800 hidden lg:block py-[50px] px-[70px]"
        style={{
          backgroundImage: "url(/images/designs/day47/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between animate-fadeInDown">
          <h1 className="fr text-3xl tracking-tighter font-light text-[#152735]">
            <i>Oasis.</i>
          </h1>
          <div className="sfpro-text flex items-center gap-15 font-light text-[#152735]">
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}
              </a>
            ))}
          </div>
          <button className="sfpro-text bg-linear-to-b from-[#254456] to-[#0A1920] text-white px-8 py-3 rounded-full cursor-pointer font-light">
            Schedule call
          </button>
        </div>
        {/* Hero Section */}
        <div className=" flex flex-col gap-5 pt-[170px] animate-fadeInUp">
          <h2 className="fr tracking-tighter text-8xl font-light text-[#152735]">
            A <i>calmer</i> way to
            <br />
            ship software.
          </h2>
          <h3 className="text-[#15273590] text-xl">
            A{" "}
            <span className="text-[#152735] font-medium">focused platform</span>{" "}
            for teams that
            <br />
            value clarity over chaos.
          </h3>
          <button className="sfpro-text bg-zinc-50 shadow-[0_2px_6px_rgba(0,0,0,0.08)] w-fit px-8 py-3 rounded-4xl cursor-pointer">
            Explore
          </button>
        </div>
        {/* Footer */}
        <div className="absolute bottom-5 right-[70px] animate-fadeInUp">
          <h2 className="sfpro-text text-zinc-50 tracking-widest font-light">
            START YOUR JOURNEY
          </h2>
        </div>
      </div>
    </>
  );
};

export default Day47;
