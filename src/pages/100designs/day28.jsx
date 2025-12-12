import { useMediaQuery } from "@mui/material";
import React from "react";

export default function Day28() {
  const laptop = useMediaQuery("(min-width:769px)");
  const MENU = ["Home", "Features", "Solutions", "Pricing", "Contact"];
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
        <div className="h-screen w-screen bg-zinc-50 overflow-auto">
          {/* Header */}
          <div className="bg-[#F2F2F2] flex items-center justify-between py-2 px-7">
            <div className="sfpro-text font-bold text-3xl text-[#585858]">
              LOGO
            </div>
            <div className="flex items-center gap-10">
              {MENU.map((item, key) => (
                <div
                  className="sfpro-text font-light cursor-pointer text-[#1E1E1E]"
                  key={key}
                >
                  {item}
                </div>
              ))}
              <button className="sfpro-text text-xl bg-[#7F0F01] text-zinc-50 font-light cursor-pointer px-10 py-2 border-2">
                Get Started
              </button>
            </div>
          </div>
          {/* Hero Section */}
          <div
            className="h-screen w-screen"
            style={{
              backgroundImage: "url(/images/designs/day28bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="relative h-screen w-screen"
              style={{
                backgroundImage: "url(/images/designs/day28lines.png)",
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute bg-[#F2F2F2] h-[441px] right-0 bottom-[98px] w-[1018px] p-5 flex flex-col justify-between">
                <div className="fr text-7xl/20 text-[#363C48] font-normal">
                  Build the Future of <br />
                  Your City with
                  <br />
                  Intelligence
                </div>
                <div className="flex items-center justify-between">
                  <div className="sfpro-text text-[#000000] text-lg font-light">
                    <div>Turn real world complexity into clarity.</div>
                    <div>
                      AI-powered insights for infrastructure, planning and urban
                      innovation.
                    </div>
                  </div>
                  <div>
                    <button className="sfpro-text text-xl bg-[#7F0F01] text-zinc-50 font-light cursor-pointer px-12 py-2 border-2">
                      Get Started
                    </button>
                    <button className="sfpro-text text-xl bg-[#7F0F01] text-zinc-50 font-light cursor-pointer px-3 py-2 border-2">
                      􀰑
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
