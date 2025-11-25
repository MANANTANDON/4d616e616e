import { useMediaQuery } from "@mui/material";
import React from "react";

export default function Day25() {
  const laptop = useMediaQuery("(min-width:769px)");
  const MENU = ["Vision", "Work", "Research", "Journal", "Collaborate"];
  return (
    <>
      {!laptop && (
        <div className="flex items-center justify-center h-screen">
          <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
            Switch to Desktop
          </div>
        </div>
      )}
      {laptop && (
        <div
          className="h-screen w-screen bg-[#FFFFFF]"
          style={{
            backgroundImage: "url(/images/designs/day25bg.JPG)",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between sfpro-text px-10 py-5">
            <div className="flex items-center gap-14">
              <div className="text-[#F3EDED] font-light tracking-[7px] text-xl">
                <a href="">AUREON</a>
              </div>
              <div className="flex items-center gap-8">
                {MENU.map((item, key) => (
                  <div
                    key={key}
                    className="text-[#FFFFFF] font-extralight cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button className="text-[#F3EDED] font-extralight cursor-pointer">
                Log In
              </button>
              <button className="bg-[#F3EDED] rounded-xs px-4.5 py-2 text-base font-normal cursor-pointer">
                Start Your Journey
              </button>
            </div>
          </div>
          {/* Hero Section */}
          <div className="px-10 my-32">
            <div className="relative inline-flex h-12 w-fit items-center justify-center text-[#F3E9E0]">
              <span className="relative z-10 font-extralight text-[#F3EDED]/70 text-lg">
                Building the future at the edge of imagination.
              </span>
              <span
                className="pointer-events-none absolute inset-0
               bg-linear-to-r from-transparent via-zinc-200/20 to-transparent
               mask-[linear-gradient(#000,#000),linear-gradient(#000,#000)]
               mask-size-[100%_calc(100%-4px),100%_100%]
               mask-position-[0_2px,0_0]
               mask-no-repeat
               mask-exclude
               [-webkit-mask-composite:xor]"
              />
            </div>
            <div className="text-8xl/26 text-[#F3EDED]/80 mt-6">
              Where light
              <br />
              meets possibility.
            </div>
            <div className="font-extralight text-[#F3EDED]/70 text-lg my-12">
              We explore the intersection of human experience and emerging
              <br />
              technology to create ideas that illuminate new worlds.
            </div>
            {/* Button */}
            <div className="flex items-center gap-3">
              <button className="bg-[#F3EDED] rounded-xs px-4.5 py-2 text-base font-normal cursor-pointer">
                Start Your Journey
              </button>
              <button className="relative inline-flex h-12 w-52 items-center justify-center text-[#F3E9E0] cursor-pointer">
                <span className="relative z-10 text-base font-light">
                  Explore Our Vision
                </span>
                <span
                  className="pointer-events-none absolute inset-0
               bg-linear-to-r from-transparent via-zinc-200/20 to-transparent
               mask-[linear-gradient(#000,#000),linear-gradient(#000,#000)]
               mask-size-[100%_calc(100%-4px),100%_100%]
               mask-position-[0_2px,0_0]
               mask-no-repeat
               mask-exclude
               [-webkit-mask-composite:xor]"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
