import React from "react";

export default function Day92() {
  const MENU = ["Discover", "Lifestyle", "Contact"];
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
          backgroundImage: "url(/images/designs/day92/bg.png)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-[#ffffff]/70 to-transparent pointer-events-none z-0" />
        {/* Header */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <h1 className="text-2xl font-bold tracking-tight">Skyline</h1>
            {MENU.map((item, key) => (
              <a href="" key={key} className="font-light">
                {item}
              </a>
            ))}
          </div>
          <button className="bg-[#C0470E] px-6 py-2.5 rounded-[100px] text-zinc-50 cursor-pointer shadow-[inset_0_0_10px_rgba(244,244,245,0.9)] text-lg">
            Book Now
          </button>
        </div>
        {/* Hero  */}
        <div className="relative z-10 flex flex-col items-center gap-7 mt-20">
          <h2 className="fr text-center tracking-tighter font-light text-6xl">
            Where Ambition Meets
            <br />
            <span className="text-[#C23C23]">The Skyline</span>
          </h2>
          <p>
            A city built for dreamers and doers. Explore iconic stays, vibrant
            <br />
            neighbourhoods, and skyline views that inspire your next big move.
          </p>
          <div className="flex gap-5">
            <button className="cursor-pointer bg-zinc-100 pl-6 py-2.5 pr-1 rounded-[100px] text-[17px] tracking-tighter">
              Enter The Skyline{" "}
              <span className="bg-[#BB4617] text-zinc-50 rounded-[100px] px-3 py-2.5 text-sm shadow-[inset_0_0_10px_rgba(244,244,245,0.7)]">
                􀄯
              </span>
            </button>
            <button className="cursor-pointer text-[17px] bg-zinc-100/40 backdrop-blur-lg px-4 py-2.5 rounded-[100px] border border-zinc-100/70 tracking-tight">
              Browse Stays
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
