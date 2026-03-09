import Image from "next/image";
import React, { useEffect, useState } from "react";

const Day69 = () => {
  const MENU = ["Works", "About", "Contact"];
  const IMAGES = [
    "/images/designs/day69/img2.png",
    "/images/designs/day69/img3.png",
    "/images/designs/day69/img4.png",
  ];
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex items-center justify-center h-screen xl:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div className="h-screen w-screen bg-zinc-100 grid-cols-2 sfpro-text hidden xl:grid">
        {/* Left Grid */}
        <div className="p-4">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-medium">
              momentum<sup>®</sup>
            </h1>

            <h2 className=" text-zinc-900/40 font-medium">
              {time.getHours()}:{time.getMinutes()}:{time.getSeconds()} IN
            </h2>
            <div className="flex items-center gap-4">
              {MENU.map((item, key) => (
                <a
                  href=""
                  key={key}
                  className={`${item === "Works" ? "text-zinc-900" : "text-zinc-900/40"} hover:text-zinc-900`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          {/* Hero Section */}
          <div className="flex flex-col mt-18">
            <div className="mb-4">
              /{time.getDate()} - {time.getMonth()}
            </div>
            <h2 className="text-7xl/20 tracking-tight mb-5">
              Sports
              <br />
              Photography
            </h2>
            <p className="text-zinc-900/40 mb-[35px]">
              <span className="text-zinc-900">
                A showcase of our most dynamic sports photography
              </span>
              , captured across the biggest professional leagues in the USA.
              Over the past three years, our team has been on the sidelines of
              the NFL, NBA, MLB, NHL, and major national tournaments -
              documenting the intensity and iconic moments that define the game.
              <br />
              <br />
              <span className="text-zinc-900">
                From championship finals to season openers,
              </span>
              we bring a creative, high-impact perspective to sports
              storytelling.
            </p>
            <button className="bg-zinc-900 text-zinc-100 px-6 py-2.5 cursor-pointer border border-zinc-300/30 w-fit">
              View All 􀰾
            </button>
          </div>
          {/* Images */}
          <div className="grid grid-cols-3 mt-[50px]">
            {IMAGES.map((item, key) => (
              <div key={key}>
                <h2 className="text-zinc-900/40">/ 0{key + 1}</h2>
                <div className="relative overflow-hidden h-[255px] max-h-[255px] w-[217px] max-w-[217px] mt-[11px]">
                  <Image
                    src={item}
                    fill
                    objectFit="cover"
                    objectPosition="center"
                    alt="design"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Grid */}
        <div className="p-4">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/images/designs/day69/img1.png"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              alt="design"
            />

            <div className="text-zinc-100 absolute bottom-4 right-4 tracking-wide">
              Scroll to Explore
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Day69;
