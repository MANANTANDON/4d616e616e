import { Container, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Day30() {
  const laptop = useMediaQuery("(min-width:769px)");
  const MENU = ["Work", "Services", "About", "Reel", "Journal"];
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
            backgroundImage: "url(/images/designs/day30bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container
            maxWidth="lg"
            className="border-r border-l border-zinc-200/20 h-screen relative "
          >
            {/* Header */}
            <div className="flex items-center justify-center gap-12 border-b border-zinc-200/20 -mx-6 py-7">
              {MENU.map((item, key) => (
                <div
                  key={key}
                  className="sfpro-text text-zinc-200/90 text-xl font-light flex items-center gap-3"
                >
                  {item}
                  <span className="text-xs mt-1">
                    {(item === "Work" ||
                      item === "Services" ||
                      item === "Journal") &&
                      "􀆈"}
                  </span>
                </div>
              ))}
            </div>
            {/* Hero Section */}
            <div className="py-40">
              <div className="bg-zinc-200/20 backdrop-blur-md w-fit px-5 py-2 rounded-[30px] border border-zinc-200/40 sfpro-text text-zinc-50">
                Creative film & visual storytelling studio
              </div>

              <div className="sfpro-text text-7xl font-normal tracking-tighter bg-linear-to-b from-zinc-50 to-zinc-50/30 bg-clip-text text-transparent my-10">
                We craft films that
                <br /> stay with people.
              </div>
              <div className="sfpro-text text-zinc-300 font-light my-10">
                We partner with brands, agencies and artists to create cinematic
                <br /> stories that feel honest, human and impossible to ignore.
              </div>
              <div className="flex items-center gap-5">
                <button className="bg-zinc-100 px-5 py-2 rounded-[40px] sfpro-text cursor-pointer">
                  Watch our reel
                </button>
                <button className="bg-zinc-900/60 backdrop-blur-md border border-zinc-100/20 text-zinc-100 px-5 py-2 rounded-[40px] sfpro-text cursor-pointer">
                  Book a discovery call
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center">
              <div className="bg-zinc-400/30 backdrop-blur-md w-fit px-5 py-1.5 rounded-[30px] border border-zinc-200/20 sfpro-text text-zinc-50 mb-5">
                Watch Reel
              </div>
              <Image
                src={"/images/designs/day30banner.png"}
                layout="intrinsic"
                height={53}
                width={1180}
              />
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
