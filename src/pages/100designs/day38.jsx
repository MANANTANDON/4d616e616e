import { useMediaQuery } from "@mui/material";
import React from "react";

export default function Day38() {
  const laptop = useMediaQuery("(min-width:769px)");
  const MENU = ["HOME", "PROJECTS", "ABOUT", "BLOG"];

  const userHandler = () => {
    alert("We will get to you soon !");
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
        <>
          {/* Header */}
          <div className="bg-zinc-100 flex items-center justify-between pt-[23px] px-4 pb-[45px]">
            <div className="sfpro-text text-2xl">
              NORRÉ<sup>®</sup>
            </div>
            <div className="sfpro-text flex items-center gap-15 font-light">
              {MENU.map((item, key) => (
                <div key={key} className="cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
            <button
              className="border border-zinc-900/20 px-5 py-2 rounded-[100px] sfpro-text flex items-center gap-3 font-light cursor-pointer"
              onClick={userHandler}
            >
              <span>CONTACT</span>
              <span className="bg-zinc-900 text-zinc-100 px-2.5 py-1.5 rounded-[100px] font-light shrink-0">
                􀰾
              </span>
            </button>
          </div>
          <div
            className="relative h-[calc(100vh-122px)] w-screen bg-zinc-900"
            style={{
              backgroundImage: "url(/images/designs/day38/bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/*HEADING*/}
            <div className="sfpro-text text-zinc-100 text-6xl font-extralight px-[62px] pt-24">
              Norré<sup>®</sup> Studio
            </div>
            {/* Footer Text */}
            <div className="absolute bottom-0 left-0 right-0 px-[62px] pb-15 flex items-center justify-between">
              <div className="sfpro-text text-zinc-100 text-7xl/22 font-semibold">
                We Create <br />
                Brands That Stick
              </div>
              <div className="sfpro-text text-zinc-100 text-xl font-light flex flex-col gap-10">
                <div>
                  We help founders grow through bold
                  <br />
                  design, sharp strategy, and smart
                  <br />
                  marketing that drives recognition, <br />
                  engagement, and long-term brand loyalty.
                </div>
                <button
                  className="border border-zinc-100/30 px-5 py-2 rounded-[100px] sfpro-text flex items-center gap-3 font-light cursor-pointer w-fit backdrop-blur-lg bg-zinc-500/10"
                  onClick={userHandler}
                >
                  <span>Get In Touch</span>
                  <span className="bg-zinc-100 text-zinc-900 px-2.5 py-1.5 rounded-[100px] font-light shrink-0">
                    􀰾
                  </span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
