import Image from "next/image";
import React from "react";

const Day55 = () => {
  const MENU = ["How It Works", "Use Cases", "Pricing", "Research Feed"];
  const COMPANIES = [
    { src: "/images/designs/day55/1.png", height: 30, width: 100 },
    { src: "/images/designs/day55/2.png", height: 26, width: 100 },
    { src: "/images/designs/day55/3.png", height: 20, width: 100 },
    { src: "/images/designs/day55/4.png", height: 32, width: 100 },
    { src: "/images/designs/day55/5.png", height: 20, width: 50 },
  ];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="sfpro-text h-screen w-screen bg-zinc-800 py-8 px-[45px] hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day55/bg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-zinc-50 font-light text-2xl">
            POLARIS<sup>®</sup>
          </h1>
          <div className="text-zinc-50 font-light  flex items-center gap-[35px] ">
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}
              </a>
            ))}
          </div>
          <div className="flex gap-[29px]">
            <button className="text-zinc-50 cursor-pointer">Sign Up</button>
            <button className="border border-zinc-100/40 px-6 py-2 rounded-4xl bg-zinc-50/10 text-zinc-50 cursor-pointer">
              Login
            </button>
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex flex-col gap-6 pt-[140px]">
          <h1 className="text-zinc-50 text-7xl tracking-tighter font-light">
            Polaris AI
          </h1>
          <h2 className="text-zinc-50/70 text-4xl tracking-tighter font-light -mt-4">
            Designed for seekers.
          </h2>
          <p className="text-zinc-50 text-base/7">
            We connect the dots for you, using the full. picture to deliver
            <br />
            insight that's thoughtfull, because the best discoveries don't
            <br />
            come from more data - they come from better understanding.
          </p>
          <div className="flex gap-[27px]">
            <button className="bg-zinc-50 text-[#1B191A] px-6 py-2 rounded-4xl tracking-tighter cursor-pointer text-lg">
              Ask a Question
            </button>
            <button className="text-lg text-zinc-50 cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
        {/* Footer Section */}
        <div className="absolute bottom-8 left-[45px] right-[45px] flex items-center justify-between border-t border-zinc-50/20 pt-4">
          <h3 className="text-zinc-50">
            Some of the companies that use our product
          </h3>
          {COMPANIES.map((item, key) => (
            <Image
              key={key}
              src={item.src}
              height={item.height}
              width={item.width}
              layout="intrinsic"
              className="opacity-55"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Day55;
