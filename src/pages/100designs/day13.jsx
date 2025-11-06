import Image from "next/image";
import React from "react";
export default function Day13() {
  const MENU = [
    {
      first: "Services",
      second: "Digital Design",
      third: "Art Direction",
      fourth: "Web Development",
    },
    {
      first: "Location",
      second: "Manan, Chandigarh",
      third: "Tuesday, 14:52",
      fourth: "(+5 IST)",
    },
    {
      first: "Socials",
      second: "Instagram",
      third: "X (Twitter)",
      fourth: "Youtube",
    },
  ];
  return (
    <>
      <div className="h-screen w-screen bg-[#EAEAEA] overflow-auto flex items-center justify-center pt-40 md:pt-20 pb-5">
        <div
          className="h-[805px] h-max-[805px] w-[600px] w-max-[600px] bg-[#FFFFFF] relative overflow-hidden rounded-[28px] border-2 border-zinc-900"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        >
          <Image
            src={"/images/designs/saturn.png"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="absolute top-8 left-0 right-0 px-8 flex items-center justify-between">
            <div className="text-[#F0EEEF] text-xs font-extralight">
              {" "}
              Veil Studio<sup className="sfpro">􀀦</sup>
            </div>
            <div className="sfpro text-xl text-[#FDFBFC] font-extralight">
              􀜓
            </div>
          </div>
          <div className="absolute top-22 left-0 right-0 px-8">
            <div className="text-[#95A1B9] text-xs font-extralight">
              Worked with 100+ brands around the world
            </div>
            <div className="text-[#EFEFEF] text-4xl font-extralight my-2.5">
              We build for the curious.
            </div>
            <div className="text-[#D1CFD0] text-[13px] font-extralight">
              We are tight knit team of marketers, designers and developers
            </div>
            <div className="text-[#D1CFD0] text-[13px] font-extralight">
              helping founders and startups secure funding and scale.
            </div>
            <div className="mt-3">
              <button className="backdrop-blur-md bg-zinc-200/10 text-[#FCFCFE] text-[10px] font-extralight px-4 py-2 rounded-[100px] border border-zinc-100/40">
                Start a project
              </button>
            </div>
          </div>
          <div className="absolute bottom-8 md:bottom-3 left-0 right-0 px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {MENU.map((item, key) => (
                <div>
                  <div className="text-zinc-100/30 text-[10px]">
                    {item.first}
                  </div>
                  <div className="text-[#D8D8D8] font-extralight text-[9px] md:text-[11px] my-1">
                    {item.second}
                  </div>
                  <div className="text-[#D8D8D8] font-extralight text-[9px] md:text-[11px] my-1">
                    {item.third}
                  </div>
                  <div className="text-[#D8D8D8] font-extralight text-[9px] md:text-[11px]">
                    {item.fourth}
                  </div>
                </div>
              ))}
            </div>
            <div className="sfpro text-zinc-100/30 text-[40px] md:text-[80px] font-extralight">
              􀰾
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
