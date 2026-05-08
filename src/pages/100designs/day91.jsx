import Image from "next/image";
import React from "react";

export default function Day91() {
  const MENU = ["SCIENCE", "PROCESS", "COMMUNITY", "CONTACT"];

  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className="border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="relative h-screen w-screen sfpro-text hidden lg:block py-[30px] px-10"
        style={{
          backgroundImage: "url(/images/designs/day91/bg.png)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-center">
          <div className="border-[0.5px] border-[#FFF7E4] text-[#FFF7E4] flex items-center gap-10 font-extralight px-10 py-3.5 bg-zinc-900/10 backdrop-blur-3xl">
            <a href="">
              <Image
                src="/images/designs/day91/logo.png"
                height={17}
                width={60}
              />
            </a>
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}
              </a>
            ))}
          </div>
        </div>
        {/* Hero */}
        <div className="flex justify-between mt-75">
          <h1 className="fr text-[#FFF7E4] text-5xl">
            The right person exists.
          </h1>
          <h2 className="fr text-[#FFF7E4] text-4xl">
            We find them before you
            <br />
            know you need them.
          </h2>
        </div>
        {/* Footer */}
        <div className="absolute left-10 right-10 bottom-[30px] flex items-center justify-between">
          <p className="text-[#CFC9BB] font-extralight text-base/5.5">
            Most companies post jobs and wait.
            <br />
            We map talent networks in real time,identifying <br />
            who's ready to move, before they update their resume.
          </p>
          <button className="cursor-pointer bg-[#FFF7E4] text-[#2D2E29] py-6 px-4">
            Start Finding{" "}
            <span className="bg-[#2d2e29] text-[#FFF7E4] px-4 py-4 ml-2">
              􀰑
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
