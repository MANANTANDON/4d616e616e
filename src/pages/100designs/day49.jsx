import Image from "next/image";
import React from "react";

const Day49 = () => {
  const MENU = ["Work", "Services", "Approach", "Studio", "Journal"];

  const IMG = [
    { name: "/images/designs/day49/10.png", height: 30, width: 40 },
    { name: "/images/designs/day49/20.png", height: 35, width: 84 },
    { name: "/images/designs/day49/30.png", height: 32, width: 40 },
    { name: "/images/designs/day49/40.png", height: 10, width: 150 },
  ];

  const CTAButton = ({ text }) => (
    <button className="bg-zinc-100 text-[#070604] font-light px-6 py-2 rounded-4xl cursor-pointer shadow-[inset_0_-3px_6px_rgba(0,0,0,0.12)] border border-[#AAAAA8]">
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
        className="h-screen w-screen bg-zinc-800 py-[22px] px-[95px]  hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day49/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-center gap-10">
          <div className="sfpro-text flex items-center justify-center gap-10 text-[#070604] font-light">
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}
              </a>
            ))}
          </div>
          <CTAButton text={"Start a Conversation"} />
        </div>
        {/* Hero Section */}
        <div className="pt-[170px] flex flex-col gap-[27px]">
          <h1 className="sfpro-text bg-linear-to-b from-[#FBF9FA] to-[#BAB7B0] bg-clip-text text-transparent text-7xl/20 tracking-tighter">
            A clear path for <br />
            meaningful brands
          </h1>
          <p className="sfpro-text text-zinc-100 text-xl">
            We partner with ambitious teams to shape digital experiences
            <br />
            with direction, depth, and long-term vision.
          </p>
          <div className="flex gap-5">
            <button className="bg-zinc-900 text-zinc-100 font-light px-6 py-2 rounded-4xl cursor-pointer  border border-zinc-100/70">
              Start a Conversation
            </button>
            <CTAButton text="See Selected Work" />
          </div>
          <div className="flex flex-col gap-5 mt-10">
            <div className="sfpro-text text-zinc-100/80 text-xl font-medium">
              Selected partners we've worked with:
            </div>
            <div className="flex gap-7">
              {IMG.map((item, key) => (
                <Image
                  key={key}
                  src={item.name}
                  height={item.height}
                  width={item.width}
                  layout="intrinsic"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Day49;
