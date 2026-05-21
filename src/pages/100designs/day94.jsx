import Image from "next/image";
import React from "react";

export default function Day94() {
  const MENU = ["WORD", "CHARACTERS", "STORY", "SOUNDTRACK"];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className="border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="relative h-screen w-screen sfpro-text hidden lg:block py-[30px] px-10 bg-zinc-100"
        style={{
          backgroundImage: "url(/images/designs/day94/bg.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Image
              src={"/images/designs/day94/logo.png"}
              layout="intrinsic"
              height={24}
              width={34}
            />
            <h1 className="fr text-4xl tracking-tight font-light">RINGFALL</h1>
          </div>
          <div className="flex items-center gap-15">
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}
              </a>
            ))}
          </div>
          <button className="bg-[#000000] text-[#FFFFFF] px-6 py-2.5 rounded-[100px] cursor-pointer">
            Play now
          </button>
        </div>
        {/* Hero */}
        <div className="mt-15">
          <h2 className="fr text-center font-light text-7xl/18 tracking-tight">
            THE ROAD IS
            <br />
            LONG{" "}
            <span className="text-zinc-900/50">
              THE PARTY <br />
              WILL BE YOURS.
            </span>
          </h2>
          <div className="flex items-center justify-center mt-12">
            <div className="relative w-fit p-1">
              <button className="cursor-pointer bg-[#F81B00] text-zinc-100 px-8 py-4 text-lg font-light rounded-[100px]">
                Begin the journey
              </button>
              <div className="h-3 w-3 border-l-2 border-t-2 border-zinc-900 absolute top-0 left-0" />
              <div className="h-3 w-3 border-r-2 border-t-2 border-zinc-900 absolute top-0 right-0" />
              <div className="h-3 w-3 border-l-2 border-b-2 border-zinc-900 absolute bottom-0 left-0" />
              <div className="h-3 w-3 border-r-2 border-b-2 border-zinc-900 absolute bottom-0 right-0" />
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="absolute bottom-2.5 flex items-center justify-between left-10 right-10">
          <div>0%</div>
          <button className="bg-zinc-100 px-5 py-2 rounded-[100px] text-sm">
            􀄩
          </button>
          <div>V_1.2.0</div>
        </div>
      </div>
    </>
  );
}
