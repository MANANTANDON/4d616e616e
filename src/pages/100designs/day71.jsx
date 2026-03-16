import React from "react";

export default function Day71() {
  const MENU = ["HOW IT WORKS", "SECURITY", "DOCS", "PRICING"];

  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="relative h-screen w-screen bg-zinc-900 sfpro-text px-[43px] py-8 hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day71/bg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <button className="bg-zinc-100 text-zinc-900 px-4 py-2 text-[13px] font-medium rounded-[100px] cursor-pointer">
              PRODUCT
            </button>

            {MENU.slice(0, 2).map((item, key) => (
              <a href="" key={key} className="text-zinc-100 text-[13px]">
                {item}
              </a>
            ))}
          </div>
          <div className="flex gap-0.5">
            <div className="h-2.5 w-2.5 bg-zinc-100" />
            <div className="h-2.5 w-2.5 bg-zinc-100" />
            <div className="h-2.5 w-2.5 bg-zinc-100" />
          </div>

          <div className="flex items-center gap-5">
            {MENU.slice(2).map((item, key) => (
              <a href="" key={key} className="text-zinc-100 text-[13px]">
                {item}
              </a>
            ))}
          </div>
        </div>
        {/* Hero Section */}
        <div className="absolute bottom-8 left-[43px] right-[43px] flex items-baseline-last justify-between">
          <div className="flex flex-col gap-[25px]">
            <div className="flex gap-5 items-center -mb-5">
              <div className="text-sm text-zinc-100">􀇥</div>
              <h2 className="text-zinc-100  text-sm font-light">END-TO-END</h2>
              <h2 className="bg-zinc-100/10 text-zinc-100 px-3 py-1 w-fit rounded-[100px] text-sm font-light tracking-widest">
                ENCRYPTED IMAGES
              </h2>
            </div>
            <h1 className="text-zinc-100 text-8xl tracking-tighter font-light">
              <span className="fr">
                En<i>cry</i>pt
              </span>
              <br />
              Your Images.
            </h1>
            <p className="text-zinc-100/50">
              Encrypt photos before sharing. Your images stay private until
              <br />
              the recipient unlocks it with the key
            </p>
            <button className="text-[13px] tracking-widest bg-zinc-100 font-semibold px-4 py-3 rounded-[100px] cursor-pointer w-fit">
              ENCRYPT & SEND{" "}
              <span className="bg-[#573E41] text-zinc-100 font-light px-4 py-1 rounded-[100px] ml-2">
                􀄫
              </span>
            </button>
          </div>
          <div>
            <p className="text-zinc-100 text-[20px]/5 font-light">
              Your images{" "}
              <span className="fr">
                <i>deserve</i>
              </span>{" "}
              the same level of <br />{" "}
              <span className="fr">
                <i>security</i>
              </span>{" "}
              as your messages.
            </p>
            <h3 className="text-zinc-100 text-xs font-semibold mt-3">
              SCROLL TO BEGIN
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
