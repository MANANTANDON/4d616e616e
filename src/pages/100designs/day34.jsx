import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Day34() {
  const laptop = useMediaQuery("(min-width:769px)");
  const MENU = ["Concept", "Experience", "Vision", "Technology", "Journal"];
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
        <div className="h-screen w-screen bg-[#F76208]">
          <div className="flex items-center justify-center py-[19px]">
            {/* HEADER */}
            <div className="bg-zinc-100/10 flex items-center gap-10 w-fit py-2.5 pl-8 pr-2.5 rounded-[100px] border border-zinc-100/40 ">
              {MENU.map((item, key) => (
                <div
                  key={key}
                  className="sfpro-text text-zinc-100 text-lg cursor-pointer"
                >
                  {item} <span className="text-sm">􀆈</span>
                </div>
              ))}
              <button className="text-[#F76208] bg-zinc-100 sfpro-text py-2 px-4 rounded-[50px] cursor-pointer font-normal text-lg">
                Enter Experience <span className="text-sm">􀆊</span>
              </button>
            </div>
            {/* HERO CONTENT */}
            <div className="absolute left-40 top-50 sfpro-text text-zinc-100 text-xl">
              It begins by changing how you
              <br />
              see the world, expanding
              <br />
              perception beyond the familiar.
            </div>
            <div className="absolute left-20 top-90 sfpro-text text-zinc-100 text-xl">
              It begins by changing
              <br />
              how you see the
              <br />
              world, expanding
              <br />
              perception beyond
              <br /> the familiar.
            </div>
            <div className="absolute right-20 top-60 sfpro-text text-zinc-100 text-xl">
              As emotions deepens,
              <br />
              interaction stops being
              <br />
              mechanical and starts feeling
              <br />
              intuitive and human.
              <br />
              <br />
              Interfaces disappear,
              <br />
              replaced by experiencing that
              <br />
              flow naturally with your
              <br />
              movement and intent.
            </div>
            {/* FOOTER CONTENT */}
            <div className="absolute -bottom-18 left-0 right-0 sfpro-text text-center text-[245px] font-extrabold text-zinc-100 tracking-tighter">
              NEONSHIFT
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
              <Image
                src={"/images/designs/day34.png"}
                layout="intrinsic"
                height={700}
                width={630}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
