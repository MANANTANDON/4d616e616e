import React from "react";

const Day45 = () => {
  const MENU = ["Product", "Security", "Docs", "Company"];

  const handleClick = () => {
    alert("access granted !");
  };

  const RequestAccessButton = ({ classname }) => (
    <button
      className={`bg-zinc-800 text-zinc-100  rounded-4xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(255,255,255,0.6)] cursor-pointer ${classname}`}
      onClick={handleClick}
    >
      Request Access
    </button>
  );

  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="h-screen w-screen bg-zinc-900 py-6 hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day45/bg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-center">
          <div className="bg-[#F5F5F5] flex items-center gap-[121px] pl-5 pr-2.5 py-[7px] relative">
            <h1 className="fr text-3xl">Aegis</h1>
            <div className="flex items-center gap-[18px] sfpro-text font-medium">
              {MENU.map((item, key) => (
                <a href="/100designs/day45" key={key}>
                  {item}
                </a>
              ))}
            </div>
            <RequestAccessButton classname="px-6 py-3.5" />

            <div className="bg-[#FFFFFF] h-2 w-2 rounded-4xl absolute top-1.5 left-1.5" />
            <div className="bg-[#FFFFFF] h-2 w-2 rounded-4xl absolute bottom-1.5 left-1.5" />
            <div className="bg-[#FFFFFF] h-2 w-2 rounded-4xl absolute top-1 right-1" />
            <div className="bg-[#FFFFFF] h-2 w-2 rounded-4xl absolute bottom-1 right-1" />
          </div>
        </div>
        {/* Hero Section */}
        <div className=" flex flex-col items-center justify-center gap-[22px] py-[90px]">
          <h3 className="fr text-center text-6xl/18 font-light">
            Treasury Infrastructure
            <br />
            for Web3 Organizations
          </h3>
          <p className="sfpro-text text-center text-xl font-medium text-[#393A3C]">
            Manage, govern and protect digital assets
            <br /> with instutional-grade clarity.
          </p>
          <RequestAccessButton classname="text-xl px-8 py-4.5" />
        </div>
      </div>
    </>
  );
};

export default Day45;
