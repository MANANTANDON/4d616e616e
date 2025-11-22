import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Day23() {
  const MENU = ["Features", "Integrations", "How It Works", "Resources"];
  const handleButtonClick = () => {
    alert("User Subscribed!");
  };
  return (
    <>
      <div
        className="h-screen w-screen bg-[#FFFFFF]"
        style={{
          backgroundImage: "url(/images/designs/day23bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container maxWidth="lg" className="relative">
          <div className="xl:-mx-6 py-3">
            {/* Header */}
            <div className="flex items-center justify-between p-2 border border-zinc-300/40 rounded-[100px] bg-zinc-800/10">
              {/* Logo*/}
              <div className="flex items-center gap-2 ml-3">
                <Image
                  src="/images/designs/day23logo.png"
                  layout="intrinsic"
                  height={35}
                  width={35}
                />
                <div className="sfpro-text text-[#FFFFFF] font-semibold text-2xl">
                  notekat.ai
                </div>
              </div>
              {/* MENU */}
              <div className="flex items-center gap-7">
                {MENU.map((item, key) => (
                  <div
                    className="sfpro-text text-[#FFFFFF] cursor-pointer font-noraml"
                    key={key}
                  >
                    {item}
                  </div>
                ))}
              </div>
              {/* Button */}
              <div className="flex items-center gap-3">
                <button className="sfpro-text text-[#FFFFFF] font-semibold cursor-pointer">
                  Sign In
                </button>
                <button
                  className="sfpro-text text-[#FFFFFF] font-semibold cursor-pointer border border-zinc-300/40 bg-zinc-200/10 hover:bg-zinc-200/30 px-6 py-3 rounded-[30px]"
                  onClick={handleButtonClick}
                >
                  Get Started
                </button>
              </div>
            </div>
            {/* Hero Section */}
            <div className=" sfpro-text flex flex-col gap-8 py-25">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/designs/day23img.png"
                  layout="intrinsic"
                  height={32}
                  width={100}
                />
                <div className="text-[#FFFFFF] font-normal">
                  Works with popular online meeting platforms
                </div>
              </div>
              <div className="text-[#FFFFFF] font-bold text-7xl/16 xl:text-8xl/22 tracking-tight">
                AI notes
                <br />
                that write <br />
                themselves
              </div>

              <div className="text-[#FFFFFF] font-normal">
                Let your meetings flow while we capture every key point, <br />
                decision and action item automatically.
              </div>
              <button
                className="w-fit bg-[#131925] hover:bg-[#13192599] text-[#FFFFFF] px-10 py-5 rounded-[100px] cursor-pointer text-lg"
                onClick={handleButtonClick}
              >
                Get Started - Free Forever
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
