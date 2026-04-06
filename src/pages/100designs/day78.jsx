import React from "react";

const Day78 = () => {
  const MENU = ["EXPERIMENTS", "APPLICATIONS", "TECHNOLOGY", "MANIFESTO"];
  const FOOTER = [
    "From artistic reasoning to high-dimensional abstraction. Oraculum lives at the intersection of logic and longing.",
    "We build AI not to replace human minds - but to honor them. Our model learn not from noice, but from nuance.",
    "Oraculum is not just artificial intelligence - it is encoded intitution, shaped in silence and shadow. A system that remembers beauty.",
  ];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="h-screen w-screen sfpro-text hidden lg:block p-[34px]"
        style={{
          backgroundImage: "url(/images/designs/day78/bg.png)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="tracking-widest text-xl text-[#FBFFFF] font-light">
            ORACULUM
          </h1>
          <div className="flex items-center gap-[50px] tracking-wider text-[#FBFFFF] font-light">
            {MENU.map((item, key) => (
              <a href="">{item}</a>
            ))}
          </div>
          <button className="bg-zinc-200/10 text-[#FBFFFF] px-6 py-2.5 cursor-pointer rounded-sm font-light tracking-tighter">
            CONTACT
          </button>
        </div>
        {/* Hero Section */}
        <div className="flex flex-col gap-6 mt-[260px]">
          <p className="text-[#FFFEFF] text-5xl/15 tracking-tighter">
            Where Thought
            <br />
            Becomes Sculpture
          </p>
          <div className="bg-zinc-200/40 w-fit p-1 rounded-md">
            <button className="bg-zinc-100 rounded-sm px-8 py-2.5 text-lg tracking-tighter cursor-pointer font-light">
              Get Started 􀄫
            </button>
          </div>
        </div>
        {/* Footer Section */}
        <div className="absolute bottom-[34px] right-[34px] left-[34px] flex gap-10">
          {FOOTER.map((item, key) => (
            <p
              key={key}
              className="border-t border-zinc-100/40 pt-3 text-sm text-zinc-100/70"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Day78;
