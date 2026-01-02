import { LiquidGlassDay35 } from "@/components/Misc/LiquidGlassDay35";
import { Avatar, AvatarGroup, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Day35() {
  const laptop = useMediaQuery("(min-width:769px)");

  const MENU = ["How It Works", "Use Cases", "Pricing", "Learn"];

  const people = [
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
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
          className="h-screen w-screen bg-[#FFFFFF]"
          style={{
            backgroundImage: "url(/images/designs/day35bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between px-[42px] py-6 bg-zinc-50/10 border-b border-zinc-50/20">
            {/* LOGO */}
            <div className="flex items-center gap-4">
              <Image
                src={"/images/designs/day35logo.png"}
                layout="intrinsic"
                height={26}
                width={25}
              />
              <div className="sfpro-text text-[#FFFFFF] font-normal text-2xl">
                VIREON
              </div>
            </div>
            {/* MENU */}
            <div className="flex items-center justify-between gap-10">
              {MENU.map((item, key) => (
                <div
                  key={key}
                  className="sfpro-text text-[#DADDE2] cursor-pointer font-light"
                >
                  {item}{" "}
                  {item === "Learn" && <span className="text-xs">􀆈</span>}
                </div>
              ))}
            </div>
            {/* AUTH */}
            <div className="sfpro-text text-[#DADDE2] flex items-center gap-10">
              <button className="cursor-pointer font-light text-lg">
                Log In
              </button>
              <LiquidGlassDay35
                className="bg-zinc-200/10 rounded-[27px] px-6 py-3"
                radius="27"
              >
                <button className="cursor-pointer font-light text-lg">
                  Sign Up
                </button>
              </LiquidGlassDay35>
            </div>
          </div>
          {/* HERO SECTION */}
          <div className="my-20 flex flex-col items-center">
            <div className="flex items-center justify-center gap-5">
              <AvatarGroup max={3} className="sfpro-text">
                {people.map((item, key) => (
                  <Avatar
                    key={key}
                    alt="Remy Sharp"
                    src={item}
                    sx={{ width: 30, height: 30 }}
                  />
                ))}
              </AvatarGroup>
              <div className="text-center  sfpro-text text-zinc-200 font-light">
                5,000+ creatives already exploring new visual worlds
              </div>
            </div>
            <div className="text-center sfpro-text text-zinc-50 text-[80px] font-normal my-2">
              See Ideas Take Shape
            </div>
            <div className="text-center sfpro-text text-zinc-200/80 text-lg font-normal my-2">
              Create AI-Powered moodboards that turn abstract thoughts into
              visual direction.
              <br />
              Explore styles, atmosphere and concepts - before they even exists.
            </div>
            <div className="mt-4">
              <LiquidGlassDay35
                className="bg-zinc-700/20 rounded-[100px] pl-7 pr-2 py-2"
                radius="30"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-[300px] max-w-[300px] text-[#ffffff] outline-0 py-2 text-lg"
                />
                <LiquidGlassDay35
                  className="bg-zinc-500/30 rounded-[40px] px-6 py-3"
                  radius="27"
                >
                  <button className="text-zinc-100 cursor-pointer">
                    Join the Journey
                  </button>
                </LiquidGlassDay35>
              </LiquidGlassDay35>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
