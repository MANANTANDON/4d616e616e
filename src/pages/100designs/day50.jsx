import Image from "next/image";
import React from "react";

const Day50 = () => {
  const MENU = ["About us", "Properties", "Agents", "Services", "Blogs"];
  const LINKS = [
    "􀝊 Experienced Agents",
    "􀉚 Instant Bookings",
    "􀓎 Fast Response Time",
    "􀑁 Market Trends",
  ];

  const CTAButton = ({ text }) => (
    <button className="sfpro-text text-zinc-100 bg-zinc-200/20 px-6 py-2 rounded-4xl text-lg cursor-pointer font-light">
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
        className="h-screen w-screen bg-zinc-800 p-7 hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day50/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="sfpro-text flex items-center justify-between">
          <div className="flex gap-2">
            <Image
              src={"/images/designs/day50/logo.png"}
              height={26}
              width={31}
              layout="intrinsic"
            />
            <div className="text-zinc-200 text-4xl tracking-tighter">
              Estatix
            </div>
          </div>

          <div className="flex items-center gap-[50px]">
            <div className="flex items-center gap-5">
              {MENU.map((item, key) => (
                <a href="" key={key} className="text-zinc-200/80 text-[17px]">
                  {item}
                </a>
              ))}
            </div>
            <CTAButton text={"Talk with Agent"} />
          </div>
        </div>
        {/* Hero Section */}
        <div className="sfpro-text flex flex-col gap-[30px] pt-[130px]">
          <div className=" flex items-center gap-1.5 text-sm text-zinc-100 bg-zinc-200/10 w-fit py-1.5 pl-2 pr-3 rounded-4xl">
            <div className="bg-zinc-200/20 p-1 rounded-4xl">􀋃</div>
            <h3>10K+ Trusted Customers</h3>
          </div>
          <h1 className="text-6xl font-medium tracking-tighter text-zinc-200">
            Find long-term value
            <br />
            in every property
          </h1>
          <p className="text-zinc-100/80 text-lg/7">
            We give your site simplicity, and speed with layouts
            <br />
            that make browsing smooth and decisions easy.
          </p>
          <div className="flex items-center gap-5">
            <CTAButton text="Book a Free Call" />
            <a href="" className="text-zinc-100">
              Browse Listing 􀄫
            </a>
          </div>
        </div>
        {/* Footer Links*/}
        <div className="absolute bottom-7 left-7 right-7 flex gap-7 sfpro-text ">
          {LINKS.map((item, key) => (
            <a
              href=""
              key={key}
              className="w-full text-zinc-100/70 border-b-2 border-zinc-100/50 pb-2"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Day50;
