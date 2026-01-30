import React from "react";

const Day48 = () => {
  const MENU = ["SPACES", "LOCATION", "MEMBERSHIPS"];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="h-screen w-screen bg-zinc-800 py-10 px-[150px] hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day48/bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between sfpro-text text-zinc-50/80">
          <h1 className="text-lg">
            CONDUCT<sup>TM</sup>
          </h1>
          <div className="flex items-center gap-10 tracking-tighter font-light">
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}
                <span className="ml-1 text-sm">􀆈</span>
              </a>
            ))}
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-[30px] sfpro-text pt-[125px]">
          <h2 className="text-center text-zinc-50/80 text-6xl font-medium tracking-tight">
            WORKSPACES
            <br />
            DESIGNED FOR FOCUS
          </h2>
          <p className="text-center text-zinc-100/80  text-lg">
            Private offices and meeting rooms built for teams who
            <br />
            value quiet, clarity, and getting work done.
          </p>
          <button className="text-zinc-50 bg-linear-to-r from-[#AF5018] via-[#CD7438] to-[#AF5018] px-8 py-3 border border-[#CD7438] cursor-pointer">
            BOOK A TOUR 􀁵
          </button>
        </div>
      </div>
    </>
  );
};

export default Day48;
