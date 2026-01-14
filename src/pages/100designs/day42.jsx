import { Rating, useMediaQuery } from "@mui/material";
import React from "react";

export default function Day42() {
  const laptop = useMediaQuery("(min-width:769px)");

  const MENU = ["About us", "Projects", "Services", "Pricing", "Blogs"];
  const FOOTERDATA = [
    "􀯰 Brand Identity",
    "􁗉 Art Direction",
    "􀦥 Logo Design",
    "􀤆 Web Designing",
  ];
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
          className="h-screen w-screen bg-zinc-900 pt-[22px] px-[26px] sfpro-text"
          style={{
            backgroundImage: "url(/images/designs/day42/bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Header */}
          <div className=" flex items-center justify-between ">
            <a
              href="/100designs/day42"
              className="text-zinc-100 text-4xl font-medium tracking-tight"
            >
              Designhub<sup>®</sup>
            </a>
            <div className="flex items-center gap-9 bg-zinc-100/10 px-6 py-3 rounded-[100px]">
              {MENU.map((item, key) => (
                <h2
                  key={key}
                  className="text-zinc-100 font-light cursor-pointer"
                >
                  {item}
                </h2>
              ))}
            </div>
            <button className="bg-zinc-100/10 px-6 py-3 rounded-[100px] text-zinc-100 cursor-pointer">
              Talk With Designers 􀄫
            </button>
          </div>
          {/* Hero Section */}
          <div className="flex flex-col gap-7 pt-50">
            <div className="flex items-center gap-2">
              <Rating
                value={5}
                readOnly
                sx={{
                  "& .MuiRating-iconFilled": {
                    color: "#FFFFFF",
                  },
                }}
              />
              <h1 className="text-zinc-100 font-medium text-lg">4.9/5</h1>
            </div>
            <p className="text-zinc-50 text-7xl tracking-tighter">
              We create design that <br />
              helps brands to grow.
            </p>
            <p className="text-zinc-50/80">
              A design studio crafting simple brands, useful websites,
              <br />
              and products made to last for modern digital business.
            </p>
            <div className="flex items-center gap-6">
              <button className="bg-zinc-100/10 px-6 py-3 rounded-[100px] text-zinc-100 cursor-pointer">
                Book a Free Call 􀄫
              </button>
              <button className=" rounded-[100px] text-zinc-100 cursor-pointer">
                See Pricing 􀄫
              </button>
            </div>
          </div>
          {/* Footer  */}
          <div className="absolute bottom-5 left-[26px] right-[26px] flex items-center justify-between gap-10 ">
            {FOOTERDATA.map((item, key) => (
              <div
                className="text-zinc-100/70 text-lg w-full border-b border-zinc-100/70 pb-2 cursor-progress"
                key={key}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
