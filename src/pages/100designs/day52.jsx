import { Instagram, X, YouTube } from "@mui/icons-material";
import React from "react";

const Day52 = () => {
  const MENU = ["How it works", "Examples", "Contact"];

  const date = new Date();

  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="h-screen w-screen bg-zinc-800 p-[60px] hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day52/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="sfpro-text flex items-center gap-[18px] ">
          <h1 className="text-[#ECECEC] border-r-2 border-[#3F3F3F] pr-3 font-semibold text-lg">
            ASAC
          </h1>
          <div className="text-[#D3D3D3] flex items-center gap-[18px] font-light">
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}
              </a>
            ))}
          </div>
        </div>
        {/* Hero Section  */}
        <div className="sfpro-text flex flex-col gap-[25px] pt-[140px]">
          <div className="bg-[#272727] rounded-md w-fit px-5 py-2 text-[#F8F8F8]">
            <h2>ASCII Art Generator</h2>
          </div>
          <p className="text-zinc-100 text-5xl tracking-tighter">
            Convert Your Images
            <br />
            into Our High-Quality
            <br />
            ASCII Art Designs
          </p>
          <p className="text-[#B0B0B0] font-light">
            Easily transform your photos into stunning text-based art that
            <br />
            captures detail and bring unique digital charm to your images.
          </p>
          <div className="flex gap-3">
            <button className="bg-zinc-100 rounded-sm w-fit px-5 py-2 text-zinc-900 border border-zinc-100/10 cursor-pointer">
              Try It Out Now
            </button>
            <button className="bg-[#272727] rounded-sm w-fit px-5 py-2 text-[#F8F8F8] border border-zinc-100/10 cursor-pointer">
              Explore Gallery
            </button>
          </div>
        </div>
        {/* Footer */}
        <div className="sfpro-text absolute bottom-[60px] left-[60px] right-[60px] flex items-center justify-between">
          <div className="text-[#575757] font-light text-sm">
            © {date.getFullYear()} ASAC | Developer by 4d616e616eT
            <br />
            All rights reserved.
          </div>
          <div className="text-zinc-100 flex items-center gap-2">
            <div className="bg-linear-to-br from-zinc-800/80 to-zinc-100/30 backdrop-blur-sm border border-zinc-100/10 px-2 py-2 rounded-lg flex items-center justify-center cursor-pointer">
              <X fontSize="small" />
            </div>
            <div className="bg-linear-to-br from-zinc-800/80 to-zinc-100/30 backdrop-blur-sm border border-zinc-100/10 px-2 py-2 rounded-lg flex items-center justify-center cursor-pointer">
              <YouTube fontSize="small" />
            </div>
            <div className="bg-linear-to-br from-zinc-800/80 to-zinc-100/30 backdrop-blur-sm border border-zinc-100/10 px-2 py-2 rounded-lg flex items-center justify-center cursor-pointer">
              <Instagram fontSize="small" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Day52;
