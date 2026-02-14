import React from "react";

const Day61 = () => {
  const MENU = ["Product", "Company", "Solutions", "Resources", "Pricing"];
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between bg-[#F7F8F3] py-[30px] px-10 border-b-2 border-[#E6E7E2]">
        <h1 className="text-[#000000] fr text-2xl font-medium">Mimic</h1>
        <div className="flex items-center gap-[30px]">
          {MENU.map((item, key) => (
            <a
              href=""
              key={key}
              className={`${item === "Product" ? "text-[#000000] font-medium" : "text-[#55585E] "} hover:text-[#000000]`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <div
        className="h-screen w-screen bg-[#F7F8F3] sfpro-text "
        style={{
          backgroundImage: "url(/images/designs/day61/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Hero Section */}
        <div className="pt-[150px] px-10 flex flex-col gap-[34px]">
          <h2 className="text-zinc-100 fr text-7xl/20 font-medium">
            Generate Better
            <br />
            Data, Build
            <br />
            Better Ai
          </h2>
          <p className="text-[#999999] text-xl font-normal">
            Create high-quality synthetic datasets
            <br />
            that protect privacy while accelerating
            <br />
            your machine learning projects.
          </p>
          <button className="relative bg-linear-to-b from-[#191919] to-[#3E3E3E] border border-zinc-100/20 text-zinc-100 w-fit pl-6 pr-3 py-2.5 font-light flex items-center gap-3 cursor-pointer text-lg">
            Start Generating <span>􀰑</span>
            <div className="h-3 w-3 border-t border-l border-zinc-100  absolute left-0 top-0" />
            <div className="h-3 w-3 border-t border-r border-zinc-100  absolute right-0 top-0" />
            <div className="h-3 w-3 border-b border-l border-zinc-100  absolute left-0 bottom-0" />
            <div className="h-3 w-3 border-b border-r border-zinc-100  absolute right-0 bottom-0" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Day61;
