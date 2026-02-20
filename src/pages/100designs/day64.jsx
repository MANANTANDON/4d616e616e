import Image from "next/image";
import React from "react";

const Day64 = () => {
  const date = new Date();
  const MENU = ["HOME", "PRODUCT", "TECHNOLOGY", "ABOUT"];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div className="h-screen w-screen bg-zinc-500 sfpro-text hidden lg:block">
        <div className="relative h-screen w-screen overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-top"
          >
            <source src="/images/designs/day64/bg-video.mp4" type="video/mp4" />
          </video>

          {/* Content */}
          <div className="relative z-20 sfpro-text py-[25px] px-[60px] h-full">
            {/* HEADER */}
            <div className="flex items-center justify-between animate-fadeInDown">
              <h1 className="text-zinc-100 font-bold text-2xl">
                <a href="">4RX</a>
              </h1>
              <div className="flex items-center gap-[50px]">
                {MENU.map((item, key) => (
                  <a
                    href=""
                    key={key}
                    className=" text-zinc-100 font-light text-base tracking-widest"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            {/* Footer */}
            <div className="absolute bottom-[50px] left-[25px] right-[25px]">
              <div className="flex items-center justify-between w-full mb-20 animate-fadeIn">
                <h2 className="text-zinc-100 flex w-full justify-end text-xl">
                  {date.getFullYear()}
                </h2>
                <h2 className="text-zinc-100 w-full flex justify-end text-xl">
                  {" "}
                  {date.getDate()} - {date.getMonth()}
                </h2>
              </div>
              <div className="flex items-center justify-between animate-fadeInUp">
                <h2 className="text-zinc-100 text-8xl font-bold tracking-tight">
                  Protection,
                  <br />
                  Reimagined
                </h2>
                <div className="flex flex-col gap-[30px]">
                  <div className="relative h-[60px] max-h-[60px] w-[130px] max-w-[130px] rounded-xl border border-zinc-100/40 overflow-hidden">
                    <Image
                      src={"/images/designs/day64/bg.png"}
                      objectFit="cover"
                      objectPosition="center"
                      layout="fill"
                    />
                    <button className="absolute inset-0 flex items-center justify-center text-zinc-100/60 text-xl cursor-pointer hover:text-zinc-100">
                      􀊕
                    </button>
                  </div>
                  <p className="text-zinc-100 font-light text-base/5">
                    A new standard in performance gear crafted with
                    <br />
                    intelligent design and mordern materials.
                  </p>
                  <button className="text-zinc-100 flex items-center gap-2 text-sm cursor-pointer bg-zinc-100/10 w-fit pr-4 pl-2 py-2 rounded-4xl mt-[40px]">
                    <div className="bg-linear-to-br from-[#EFB15C] via-[#E1633B] to-[#070709] px-1 py-0.5 rounded-[100px]">
                      􂷸
                    </div>{" "}
                    DISCOVER MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Day64;
