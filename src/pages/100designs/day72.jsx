import React from "react";

export default function Day72() {
  const MENU = ["Home", "Product", "Solution"];
  const CONTENT = [
    { value: "92%", text: "Faster Build Time" },
    { value: "3x", text: "Higher Creative Output" },
    { value: "< 42 hrs", text: "From Idea to Launch" },
  ];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="h-screen w-screen bg-zinc-900 sfpro-text pt-5 px-[90px] hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day72/bg.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-zinc-100 font-black text-4xl">O</h3>
          <div className="flex items-center gap-[7px]">
            {MENU.map((item, key) => (
              <a
                href=""
                key={key}
                className={`${item === "Home" ? "text-zinc-900 bg-zinc-100" : " bg-zinc-300/20 text-zinc-100 backdrop-blur-lg"} text-lg py-2 px-4 rounded-[100px] hover:text-zinc-900 hover:bg-zinc-100`}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex gap-[7px]">
            <button className="bg-zinc-300/20 text-zinc-100 backdrop-blur-lg text-lg py-2 px-5 rounded-[100px] cursor-pointer">
              Sign up for beta
            </button>
            <button className="text-zinc-900 bg-zinc-100 text-lg py-2 px-9 rounded-[100px] cursor-pointer">
              Download
            </button>
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex items-center justify-between mt-[184px]">
          <div className="flex flex-col gap-5">
            <div className="bg-zinc-300/20 text-zinc-100 backdrop-blur-sm text-sm py-2.5 pl-2.5 pr-4 rounded-[100px] w-fit">
              <span className="bg-zinc-100 text-zinc-900 p-1 rounded-[100px] px-1.5 mr-1">
                New
              </span>{" "}
              OX 2.0 is out now
            </div>
            <h2 className="text-6xl text-zinc-100 tracking-tighter">
              Built Where
              <br />
              Code <span className="text-zinc-100/50">Meets</span>
              <br />
              Imagination.
            </h2>
            <p className="text-lg/6  text-zinc-100/50">
              We turn complex sustems into seamless
              <br />
              digital experiences powered by intelligence,
              <br />
              shaped by design.
            </p>
            <button className="text-zinc-900 bg-zinc-100 text-lg py-2 px-6 rounded-[100px] cursor-pointer w-fit mt-5">
              Start Building
            </button>
          </div>
          <div className="flex flex-col gap-10">
            {CONTENT.map((item, key) => (
              <div key={key}>
                <div className="text-zinc-100 text-4xl tracking-tighter">
                  {item.value}
                </div>
                <div className="text-zinc-100/60 mt-3">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
