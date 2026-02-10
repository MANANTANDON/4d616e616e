import React from "react";

export default function Day57() {
  const MENU = ["Current Tour", "Journal", "Archives", "Latest Release"];

  const SCHEDULE = [
    { city: "Prague, CZ", date: "25.01.2026" },
    { city: "Warsaw, PL", date: "26.01.2026" },
    { city: "Sofia, BG", date: "28.01.2026" },
    { city: "London, UK", date: "30.01.2026" },
    { city: "Berlin, GE", date: "02.02.2026" },
    { city: "Paris, FR", date: "04.02.2026" },
  ];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="h-screen w-screen bg-zinc-800 sfpro-text px-[42px] py-[30px] hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day57/bg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-zinc-100 text-center font-extrabold tracking-tighter text-3xl">
            TAME
            <br />
            IMPALA
          </h1>
          <div className="flex items-center gap-5">
            {MENU.map((item, key) => (
              <div className="flex items-center gap-5">
                <a
                  href=""
                  className={`font-extralight hover:text-zinc-100 ${item === "Current Tour" ? "text-zinc-100" : "text-zinc-100/70"} text-base`}
                >
                  {item}
                </a>
                {key !== 3 && <span className="text-zinc-100 text-3xl">•</span>}
              </div>
            ))}
          </div>
          <button className="bg-zinc-50/20 backdrop-blur-md text-zinc-100 px-6 py-2 rounded-4xl border border-zinc-50/30 cursor-pointer">
            Tour Gallery
          </button>
        </div>
        {/* Hero Section */}
        <div className="flex flex-col items-center mt-20">
          <h1 className="text-zinc-100 font-normal tracking-tighter text-8xl">
            Tame Impala:
          </h1>
          <h2 className="text-[#C9C9C9] text-6xl tracking-tighter">
            The Slow Rush Tour
          </h2>
          <p className="text-zinc-100 font-extralight text-lg text-center mt-[35px]">
            An immersive audio-visual journey through time and sound. Experience
            the headline show
            <br />
            of the summer with enhanced acoustics and mind-blowing visuals.
          </p>
          <button className="bg-zinc-100 text-zinc-900 px-6 py-4 rounded-4xl cursor-pointer shadow-[0_5px_0_0_#223D94] text-lg tracking-tighter mt-[40px]">
            Reserve Your Seat
          </button>
        </div>
        {/* Footer */}
        <div className=" absolute bottom-6 left-[42px] right-[42px] flex items-center justify-between">
          {SCHEDULE.map((item, key) => (
            <div className="flex flex-col items-center" key={key}>
              <h2 className="text-lg font-medium text-zinc-100">{item.city}</h2>
              <h3 className="fr text-2xl text-zinc-100 font-extralight">
                <i>{item.date}</i>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
