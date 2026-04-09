import Image from "next/image";
import React from "react";

const Day80 = () => {
  const MENU = ["Growth Funding", "Growth Intelligence", "Our Company"];

  const CTAButton = ({ text, css }) => (
    <button className={`${css} rounded-[100px] cursor-pointer`}>{text}</button>
  );
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="h-screen w-screen sfpro-text hidden lg:block py-8 px-[42px]"
        style={{
          backgroundImage: "url(/images/designs/day80/bg.png)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <Image
            layout="intrinsic"
            height={40}
            width={40}
            src={"/images/designs/day80/logo.png"}
          />
          <div className="text-zinc-100 font-light flex gap-[35px]">
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <CTAButton
              text="Login"
              css="bg-[#021913] text-[#05F8B6] px-12 py-2"
            />
            <CTAButton
              text="Get Started"
              css="bg-[#05F8B6] text-zinc-900 px-6 py-2"
            />
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex flex-col gap-3 pt-[170px]">
          <h2 className="bg-[#1A1A1A] w-fit rounded-[100px] text-sm pl-2 py-2 pr-4 text-zinc-100 cursor-pointer">
            <span className="bg-[#054F30] px-2 py-0.5 rounded-[100px] mr-1">
              2.0
            </span>{" "}
            Coming Soon 􀰑
          </h2>
          <p className="text-zinc-100 text-6xl/15 tracking-tight font-medium">
            Turn Your Photos
            <br />
            Into Neon
            <br />
            Wireframe Art
          </p>
          <p className="text-zinc-100/60 font-light">
            Create futuristic AI visuals from an <br />
            image instantly.
          </p>
          <div className="flex items-center gap-4 mt-10">
            <CTAButton
              text="Upload Image"
              css="bg-[#05F8B6] text-zinc-900 px-6 py-2"
            />
            <CTAButton
              text="Get Started"
              css="bg-[#021913] text-[#05F8B6] px-8 py-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Day80;
