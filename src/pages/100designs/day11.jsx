import { Apple, Google, Instagram, Pinterest } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import React from "react";

export default function Day11() {
  const laptop = useMediaQuery("(min-width:769px)");
  const Menu = ["Product", "Solutions", "Pricing", "Resources"];
  const Company = [
    { name: "Apple", logo: <Apple /> },
    { name: "Google", logo: <Google /> },
    { name: "Instagram", logo: <Instagram /> },
    { name: "Pinterest", logo: <Pinterest /> },
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
          className="h-screen w-screen flex items-center justify-center"
          style={{
            backgroundImage: "url(/images/designs/shruti.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-7 py-2">
            <div className="font-semibold text-2xl">Claro</div>
            <div className="flex items-center gap-17">
              {Menu.map((item, key) => (
                <div
                  key={key}
                  className="font-normal text-zinc-500 hover:text-zinc-800 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className=" flex items-center gap-3">
              <button className="py-2.5 px-3 text-[#858585] cursor-pointer hover:text-zinc-800">
                Sign In
              </button>
              <button className="border border-[#D7D7D7] py-2.5 px-3 rounded-lg text-[#292929] cursor-pointer">
                Sign Up
              </button>
            </div>
          </div>
          {/* Hero Section */}
          <div className="w-fit flex flex-col items-center">
            <div className="sfpro font-semibold text-7xl">
              Find Your Calm in
            </div>
            <div className="sfpro font-semibold text-7xl">
              the{" "}
              <span className="fr font-light">
                <i>Complexity</i>
              </span>
            </div>
            <div className="w-100 my-5">
              <div className="text-center text-zinc-500 font-medium text-lg">
                Our platform handles the intricate data and workflows so you can
                stop firefighting and start focusing on what matters.
              </div>
            </div>

            <div className="w-100 my-5 flex items-center gap-3">
              <button className="bg-[#3C3C3C] w-full  text-[#F2F2F2] py-2.5 rounded-lg cursor-pointer">
                Book a Free Demo
              </button>
              <button className="bg-transparent border border-[#3C3C3C] text-[#3C3C3C] py-2.5 rounded-lg w-full  cursor-pointer">
                Watch Overview
              </button>
            </div>
          </div>
          {/* Hero Section Footer */}
          <div className="absolute  bottom-15 left-0 right-0 flex items-center justify-center gap-10">
            <div className="font-normal text-zinc-200">Trusted By Teams At</div>
            <div className="flex items-center gap-7">
              {Company.map((item, key) => (
                <div
                  key={key}
                  className="flex items-center justify-center gap-2"
                >
                  <div className="text-zinc-200 text-3xl -mt-1">
                    {item.logo}
                  </div>
                  <div className="text-zinc-200 text-3xl ">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
