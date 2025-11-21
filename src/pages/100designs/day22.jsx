import { Container, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Day22() {
  const laptop = useMediaQuery("(min-width:769px)");
  const MENU = ["HOW IT WORKS", "USE CASES", "INSIGHTS", "PRICING"];
  const handleSignin = () => {
    alert("User Logged in!");
  };
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
          className="h-screen"
          style={{
            backgroundImage: "url(/images/designs/day22bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Header */}
          <div
            className="absolute left-0 right-0 top-0 mt-[60px] py-3 px-3 z-10"
            style={{
              borderTop: "0.5px solid #FFFFFF50",
              borderBottom: "0.5px solid #FFFFFF50",
            }}
          >
            <Container maxWidth="xl">
              <div className="mx-18 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-4">
                  <div>
                    <Image
                      src={"/images/designs/day22logo.png"}
                      layout="intrinsic"
                      height={55}
                      width={57}
                    />
                  </div>
                  <div className="sfpro-text text-[#FFFFFF] font-medium text-2xl">
                    METIS
                  </div>
                </div>
                {/* Menu */}
                <div className="flex items-center gap-8">
                  {MENU.map((i, key) => (
                    <div
                      className="sfpro-text font-normal text-[#FFFFFF] text-sm cursor-pointer"
                      key={key}
                    >
                      {i}
                    </div>
                  ))}
                </div>
                {/* Button */}
                <button
                  className="bg-zinc-800/40 border border-zinc-500 py-3 px-4 rounded-md text-zinc-200 cursor-pointer"
                  onClick={handleSignin}
                >
                  Sign in
                </button>{" "}
              </div>
            </Container>
          </div>
          {/* Hero Section */}
          <Container maxWidth="xl" className="h-screen">
            <div
              className="relative  h-screen mx-18 flex items-center justify-center px-3"
              style={{
                borderLeft: "0.5px solid #FFFFFF50",
                borderRight: "0.5px solid #FFFFFF50",
              }}
            >
              <div className="w-full flex justify-between">
                <div>
                  <div className="sfpro-text text-[#FFFFFF] font-semibold text-5xl/16 xl:text-6xl/20">
                    Explore deeper
                    <br /> Think smarter
                  </div>
                  <div className="sfpro-text text-[#FFFFFF] font-extralight my-7">
                    Our systen naos your thinking, reveals patterns, and
                    <br /> accelerates decisions with clarity.
                  </div>
                  <div className="flex gap-4">
                    <button className="sfpro-text bg-[#FFFFFF] text-ld font-medium rounded-md py-3 px-6 cursor-pointer">
                      Start free trial
                    </button>
                    <button className="sfpro-text bg-zinc-800/30 px-6 py-3 rounded-md border border-zinc-300/60 text-zinc-300 font-medium cursor-pointer">
                      See pricing
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-10 xl:gap-15">
                  <div className="text-right sfpro-text text-[#CACBCD]">
                    <span className="fr text-2xl font-light text-[#FCFCFC]">
                      40%
                    </span>{" "}
                    <br />
                    better clarity in decision flow
                  </div>
                  <div className="text-right sfpro-text text-[#CACBCD]">
                    <span className="fr text-2xl font-light text-[#FCFCFC]">
                      10,000+
                    </span>{" "}
                    <br />
                    sessions analysed
                  </div>
                  <div className="text-right sfpro-text text-[#CACBCD]">
                    <span className="fr text-2xl font-light text-[#FCFCFC]">
                      1.5M+
                    </span>{" "}
                    <br />
                    data points processed
                  </div>
                </div>
              </div>

              <div className="absolute left-0 right-0 bottom-0 h-[150px] xl:h-[210px]">
                <div className="relative w-full">
                  <div
                    className="h-1 w-1 absolute border-l border-b border-[#FFFFFF]"
                    style={{ left: "-0.5px", bottom: "0px" }}
                  />
                  <div
                    className="h-1 w-1 absolute border-r border-b border-[#FFFFFF]"
                    style={{ left: "-4px", bottom: "0px" }}
                  />
                  <div
                    className="h-1 w-1 absolute border-l border-t border-[#FFFFFF]"
                    style={{ left: "-0.5px", top: "0px" }}
                  />
                  <div
                    className="h-1 w-1 absolute border-r border-t border-[#FFFFFF]"
                    style={{ left: "-4px", top: "0px" }}
                  />

                  <div
                    className="h-1 w-1 absolute border-r border-b border-[#FFFFFF]"
                    style={{ right: "-0.5px", bottom: "0px" }}
                  />
                  <div
                    className="h-1 w-1 absolute border-l border-b border-[#FFFFFF]"
                    style={{ right: "-4px", bottom: "0px" }}
                  />
                  <div
                    className="h-1 w-1 absolute border-r border-t border-[#FFFFFF]"
                    style={{ right: "-0.5px", top: "0px" }}
                  />
                  <div
                    className="h-1 w-1 absolute border-l border-t border-[#FFFFFF]"
                    style={{ right: "-4px", top: "0px" }}
                  />
                </div>
              </div>
            </div>
          </Container>
          {/* Footer Section */}
          <div
            className="absolute left-0 right-0 bottom-0 h-[150px] xl:h-[210px] py-3 px-3 flex flex-col items-center justify-center"
            style={{
              borderTop: "0.5px solid #FFFFFF50",
            }}
          >
            <Container
              maxWidth="xl"
              className="sfpro-text text-[#AFB5B5] flex flex-col items-center justify-center relative"
            >
              <div>􀆇</div>
              <div>Swipe up to see more</div>
            </Container>
          </div>
        </div>
      )}
    </>
  );
}
