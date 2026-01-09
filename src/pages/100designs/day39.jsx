import { Container, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Day39() {
  const laptop = useMediaQuery("(min-width:769px)");
  const MENU = ["How it works", "Features", "Pricing"];

  const handleClick = () => {
    alert("lets go !!!");
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
          className="h-screen w-screen relative"
          style={{
            backgroundImage: "url(/images/designs/day39/bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Header */}
          <div className="pt-5">
            <Container
              maxWidth="md"
              className="flex items-center justify-between"
            >
              <a
                href="/100designs/day39"
                className="sfpro-text text-zinc-200 font-normal text-2xl"
              >
                NudgeAI
              </a>
              <nav className="sfpro-text text-zinc-200/90 font-light flex items-center gap-10 cursor-pointer">
                {MENU.map((item, key) => (
                  <a href="/100designs/day39" key={key}>
                    {item}
                  </a>
                ))}
              </nav>
              <div className="sfpro-text text-zinc-200 flex items-center gap-5">
                <button className="cursor-pointer" onClick={handleClick}>
                  Log in
                </button>
                <button
                  className="cursor-pointer bg-zinc-100/10 px-5 py-2.5 rounded-[100px] border border-zinc-100/20"
                  onClick={handleClick}
                >
                  Sign up
                </button>
              </div>
            </Container>
          </div>
          {/* Hero Section */}
          <div className="flex flex-col items-center gap-6 pt-20">
            <div className="sfpro-text text-8xl text-zinc-200 tracking-tight font-light">
              AI that helps you go
              <br />
              beyond the horizon.
            </div>
            <div className="sfpro-text text-xl text-zinc-100/60">
              From writing, planning, and research to complete workflow
              automation,
              <br /> our AI handles the heavy lifting so you can focus on
              execution.
            </div>
            <div className="flex items-center gap-3 sfpro-text">
              <button
                className="cursor-pointer bg-zinc-100/10 px-5 py-2.5 rounded-[100px] border border-zinc-100/20 text-zinc-100"
                onClick={handleClick}
              >
                See It in Action
              </button>
              <button
                className="cursor-pointer bg-zinc-100 px-5 py-2.5 rounded-[100px] border border-zinc-100 text-zinc-900"
                onClick={handleClick}
              >
                Start Your Journey 􀰾
              </button>
            </div>
            <div className="flex flex-col items-center gap-5 mt-10">
              <h1 className="sfpro-text text-zinc-100/60 text-xl">
                Trusted by best
              </h1>
              <div className="flex items-center gap-10">
                {Array.from(Array(4)).map((item, key) => (
                  <Image
                    src={`/images/designs/day39/${key + 1}.png`}
                    alt="logos"
                    key={key}
                    height={30}
                    width={100}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-20 left-20 text-zinc-100/70 bg-zinc-200/10 backdrop-blur-sm px-3 py-1.5 rounded-[100px] border border-zinc-100/20">
            Automate tasks and workflows
          </div>
          <div className="absolute bottom-10 left-80 text-zinc-100/70 bg-zinc-900/10 backdrop-blur-sm px-3 py-1.5 rounded-[100px] border border-zinc-100/20">
            Create contents and posts
          </div>
          <div className="absolute bottom-20 right-80 text-zinc-100/70 bg-zinc-900/10 backdrop-blur-sm px-3 py-1.5 rounded-[100px] border border-zinc-100/20">
            Reseach and generate ideas
          </div>
          <div className="absolute bottom-10 right-20 text-zinc-100/70 bg-zinc-200/10 backdrop-blur-sm px-3 py-1.5 rounded-[100px] border border-zinc-100/20">
            Create emails and documents
          </div>
        </div>
      )}
    </>
  );
}
