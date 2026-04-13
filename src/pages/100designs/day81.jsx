import Image from "next/image";
import React from "react";

export default function Day81() {
  const MENU = ["About", "Product", "Integrations", "Blogs"];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div className="h-screen w-screen bg-zinc-100 sfpro-text py-5 px-[50px] hidden lg:block">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline-last gap-2">
            <Image
              src={"/images/designs/day81/logo.png"}
              height={30}
              width={30}
              layout="intrinsic"
            />
            <h1 className="text-2xl font-bold tracking-tight text-[#111111]">
              Codecraft_
            </h1>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-10">
              {MENU.map((item, key) => (
                <a
                  href=""
                  key={key}
                  className="text-[#111111] font-medium tracking-tight text-base"
                >
                  {item}
                </a>
              ))}
            </div>
            <button className="cursor-pointer text-base font-medium border border-zinc-400/50 px-6 py-2.5 rounded-xl">
              Contact
            </button>
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-[25px] pt-7">
          <h2 className="fr  text-center text-6xl/18 font-medium tracking-tight">
            Turn Ideas into <br /> Intelligent Systems.
          </h2>
          <p className="text-lg/5 font-medium tracking-tight">
            Build, automate and scale your workflow with AI that works
            <br /> quietly in the background, so you can focus on what matters.
          </p>
          <button className="cursor-pointer text-base font-medium bg-zinc-900 text-zinc-100 px-6 py-2.5 rounded-xl">
            Get Started Free
          </button>
          <div className="mt-10 px-[50px] w-screen">
            <div className="h-[600px] w-full relative overflow-hidden">
              <Image
                src={"/images/designs/day81/bg.png"}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
