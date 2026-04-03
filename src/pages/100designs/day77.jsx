import Image from "next/image";
import React from "react";

export default function Day77() {
  const MENU = ["Home", "Explore", "Stories", "About"];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="h-screen w-screen sfpro-text py-9 px-[42px] hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day77/bg.png)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between animate-fadeIn">
          <div className="text-[#CCCCCC] flex items-center gap-12 text-lg">
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Image
              layout="intrinsic"
              height={25}
              width={16}
              src={"/images/designs/day77/logo.png"}
            />
            <h1 className="text-zinc-100 text-[30px] font-semibold tracking-tighter">
              Skyward
            </h1>
          </div>
          <button className="bg-[#FCBD00] tracking-tighter font-bold px-4 py-3 cursor-pointer relative text-lg">
            START EXPLORING
            <span className="absolute h-10 w-10 bg-[#010101] -bottom-5 -right-5 rotate-45 " />
          </button>
        </div>
        {/* Hero Section */}
        <div className="text-zinc-100 text-7xl tracking-tighter font-bold absolute top-70 left-[42px] animate-fadeInUp">
          <span className="text-[#FCBD00]">LOOK UP.</span>
          <br />
          THE WORLD IS
          <br />
          YOURS.
        </div>
        <div className="text-[#B8B8B8] text-xl/7 tracking-tighter font-light absolute top-120 right-[42px] animate-fadeInUp">
          <span className="text-zinc-100">
            Discover stories that move with you.
          </span>
          <br />
          <span className="text-zinc-100">-</span> moments of inspiration,
          creativity,
          <br />
          and ideas that stay with you long
          <br />
          after the journey begins.
        </div>
      </div>
    </>
  );
}
