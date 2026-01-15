import { useMediaQuery } from "@mui/material";
import React from "react";

export default function Day43() {
  const laptop = useMediaQuery("(min-width:769px)");
  const MENU = ["Work", "Services", "Studio", "Journal", "Contact"];
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
          className="h-screen w-screen bg-zinc-900 py-5 sfpro-text"
          style={{
            backgroundImage: "url(/images/designs/day43/bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-center gap-11 ">
            {MENU.map((item, key) => (
              <button
                key={key}
                className="text-zinc-100 text-lg font-light cursor-pointer"
              >
                {item}
              </button>
            ))}
            <button className="text-zinc-900 bg-zinc-100 text-lg font-normal cursor-pointer px-5 py-2 rounded-[100px]">
              Let's Talk
            </button>
          </div>
          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center text-zinc-100 pt-40">
            <h2 className="font-medium text-base">
              􀋃 Loved by 350+ modern brands.
            </h2>
            <h2 className="text-center text-7xl tracking-tight mt-10 mb-5">
              Designing Presence
              <br />
              in a noisy world.
            </h2>
            <p className="text-center text-lg font-light mt-5 mb-7">
              We help mordern brands feel timeless through digital
              <br />
              experiences inspired by nature, clarity and intention.
            </p>
            <div className="flex gap-5">
              <button className="bg-zinc-100/10 backdrop-blur-md cursor-pointer px-6 py-2.5 rounded-[100px] border border-zinc-100/30 text-lg font-light">
                Start a project
              </button>
              <button className="text-zinc-900 bg-zinc-100 text-lg font-normal cursor-pointer px-6 py-2.5 rounded-[100px]">
                View Our Work
              </button>
            </div>
          </div>
          {/* Footer Section */}
          <div className="flex text-zinc-100 justify-between items-center font-light text-xl absolute bottom-5 left-5 right-5">
            <h2>Quiet design. Strong impact.</h2>
            <h2>Build to last, not to shout.</h2>
            <h2>Where clarity meets emotion.</h2>
          </div>
        </div>
      )}
    </>
  );
}
