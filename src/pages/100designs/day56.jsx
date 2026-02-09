import Image from "next/image";
import React from "react";

const Day56 = () => {
  const MENU = ["Home", "Library", "Sleep", "Focus"];

  const people = [
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
  ];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="h-screen w-screen bg-zinc-800 sfpro-text py-[17px] px-[70px] hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day56/bg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-zinc-100 text-lg font-medium">Auralis</h1>
          <div className="flex items-center gap-8 text-zinc-100">
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}
              </a>
            ))}
          </div>
          <button className="bg-zinc-800/30  text-zinc-100 px-4 py-1.5 rounded-4xl cursor-pointer font-medium">
            Start
          </button>
        </div>
        {/* Hero Section */}
        <div className=" flex flex-col items-center gap-[17px] pt-60">
          <div className="flex items-center gap-2 bg-linear-to-b from-zinc-100/40 to-zinc-100/10 w-fit p-2 rounded-lg">
            <h2 className="text-zinc-100">Backed by</h2>
            <span className="bg-[#FF6600] text-zinc-100 px-2 py-0.5 flex items-center justify-center rounded-md w-fit">
              Y
            </span>
          </div>
          <h3 className="bg-linear-to-b from-[#FFFFFF] from-60% to-[#BABCD9] to-100% bg-clip-text text-transparent text-9xl font-semibold tracking-tighter text-center w-fit [text-stroke:1px_#FFFFFF] [-webkit-text-stroke:1px_#FFFFFF]">
            Listen To <br />
            Nature
          </h3>
          <p className="text-center text-[#FFFFFF] text-xl/6 font-light ">
            Immersive soundscapes designed to
            <br />
            calm your nerves system, improve
            <br />
            focus, and restore deep sleep.
          </p>
        </div>
        {/* Footer  */}
        <div className="absolute bottom-5 left-[70px] right-[70px] flex items-center justify-between">
          {/* people */}
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <div className="relative h-[45px] w-[45px] rounded-4xl overflow-hidden -mr-2 border-2 border-[#B17AA1]">
                <Image
                  src={people[0]}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="relative h-[65px] w-[65px] rounded-4xl overflow-hidden z-1 border-2 border-[#B17AA1]">
                <Image
                  src={people[1]}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="relative h-[45px] w-[45px] rounded-4xl overflow-hidden -ml-2 border-2 border-[#B17AA1]">
                <Image
                  src={people[2]}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
            <h3 className="text-zinc-100 ">"Helped me sleep in 10 mins."</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative overflow-hidden h-[46px] w-[90px] rounded-[10px]">
              <Image
                src="/images/designs/day56/bg.png"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <h2 className="text-zinc-100 font-semibold text-4xl tracking-tighter">
              2,314
            </h2>
            <h3 className="text-zinc-100/50 text-center">
              people listening
              <br />
              right now
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Day56;
