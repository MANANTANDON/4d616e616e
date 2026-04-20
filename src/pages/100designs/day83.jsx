import Image from "next/image";
import React from "react";

export default function Day83() {
  const MENU = ["PRODUCT", "IDEA", "WHY US?", "PRICING"];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="h-screen w-screen sfpro-text hidden lg:block py-[30px] px-[50px]"
        style={{
          backgroundImage: "url(/images/designs/day83/bg.png)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between ">
          <Image
            src={"/images/designs/day83/logo.png"}
            height={29}
            width={30}
            layout="intrinsic"
          />
          <div className="bg-[#2E2526] w-fit flex items-center gap-4 pl-8 pr-3 py-3 rounded-[100px]">
            <div className="text-[#DFDFDF] font-light tracking-tighter flex items-center gap-7 text-sm">
              {MENU.map((item, key) => (
                <a href="" key={key}>
                  {item}
                </a>
              ))}
            </div>
            <div>
              <button className="text-[#2E2526] bg-[#DFDFDF] text-base font-light tracking-tighter rounded-[100px] px-6 py-1.75 cursor-pointer">
                BOOK A CALL
              </button>
              <button className="text-[#DFDFDF] border border-[#DFDFDF] text-sm font-light rounded-[100px] px-3 py-2.5 cursor-pointer">
                􀰑
              </button>
            </div>
          </div>
          <div />
        </div>
        {/* Hero Section */}
        <div className="flex justify-between mt-22">
          <h2 className="text-[#DFDFDF] text-5xl/18 font-light tracking-tight">
            The boring parts of your <br /> workflow - automated.
            <br />
            Finally.
          </h2>
          <h2 className="text-[#DFDFDF] text-3xl tracking-tight">
            Set it once. Let it run.
          </h2>
        </div>
        {/* Footer */}
        <div className="flex items-baseline-last justify-between absolute left-[50px] right-[50px] bottom-[30px]">
          <div className="bg-zinc-100/10 p-3 w-fit rounded-3xl backdrop-blur-xl border border-zinc-100/20">
            <div className="overflow-hidden rounded-2xl group cursor-pointer">
              <Image
                src={"/images/designs/day83/image.png"}
                layout="intrinsic"
                width={305}
                height={216}
                className="transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
          </div>
          <p className="text-[#DFDFDF] text-4xl/11 font-normal tracking-tight">
            We handle the repetitive work
            <br />
            so your team can focus on the 20%
            <br />
            that actually moves the needle.
          </p>
        </div>
      </div>
    </>
  );
}
