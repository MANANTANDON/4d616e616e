import React from "react";

export default function Day96() {
  const MENU = ["Features", "Show It Works", "Science", "Pricing", "Blog"];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className="border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="relative isolate h-screen w-screen sfpro-text hidden lg:block bg-zinc-100 px-10 py-[35px]"
        style={{
          backgroundImage: "url(/images/designs/day97/bg.png)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-zinc-100 text-3xl font-extralight tracking-tight">
            Zenora
          </h1>
          <div className="text-zinc-100 flex items-center gap-5 font-light">
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}{" "}
                {MENU.length !== key + 1 && <span className="ml-5">•</span>}
              </a>
            ))}
          </div>
          <button className="bg-zinc-100/10 text-zinc-100 px-6 py-2.5 rounded-[100px] backdrop-blur-lg border border-zinc-100/20 cursor-pointer">
            Start Your Journey
          </button>
        </div>

        {/* Hero */}
        <div className="mt-40 flex flex-col gap-7">
          <h2 className="text-zinc-100/50 text-xl tracking-tight font-light">
            􀬚 Powered by advanced AI
          </h2>
          <h3 className="fr text-zinc-100 text-7xl font-light tracking-tight">
            Create stunning images
            <br />
            from imagination.
          </h3>
          <p className="text-zinc-100/80 font-light text-lg/6">
            Zenora is the AI image generator built for creators.
            <br />
            Bring ideas to life in seconds with beautiful, high-resolution
            visuals.
          </p>
          <div className="flex items-center gap-7">
            <button className="px-6 py-2.5 rounded-full bg-linear-to-r from-[#EE9BB7] to-[#948FD2] text-white font-medium shadow-lg cursor-pointer text-lg">
              Start Creating
            </button>
            <a href="" className="text-zinc-100 text-lg">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
