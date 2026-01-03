import Image from "next/image";
import React from "react";

export default function Day36() {
  const MENU = ["Home", "Practices", "Journal", "Community"];
  const IMAGES = [
    "/images/designs/day36/1.png",
    "/images/designs/day36/2.png",
    "/images/designs/day36/3.png",
    "/images/designs/day36/4.png",
  ];
  return (
    <>
      <div
        className="h-screen w-screen bg-[#FFFFFF] px-[50px]"
        style={{
          backgroundImage: "url(/images/designs/day36/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between py-[45px] ">
          <div className="flex items-center gap-2">
            <Image
              src={"/images/designs/day36/logo.png"}
              layout="intrinsic"
              height={30}
              width={30}
            />
            <div className="sfpro-text text-zinc-100">Stillroot</div>
          </div>
          <div className="flex items-center gap-15">
            {MENU.map((item, key) => (
              <div
                key={key}
                className="sfpro-text text-zinc-100 text-lg cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        {/* Hero Section */}
        <div className="py-[100px]">
          <div className="fr text-8xl text-zinc-100 font-normal">
            Be Still
            <br />
            Grow Wildly
          </div>
          <div className="sfpro-text text-zinc-100/70 text-lg font-normal py-5">
            A new kind of space for rest, reflection and radical inner
            <br />
            growth. Balance isn't a goal - it's your starting point.
          </div>
          <div className="flex items-center gap-10">
            <button className="sfpro-text bg-[#FFF9DF] text-zinc-900 font-medium px-6 py-3 rounded-[10px] cursor-pointer">
              Download App
            </button>
            <button className="sfpro-text text-zinc-100 border-b border-zinc-100 cursor-pointer">
              Discover Us
            </button>
          </div>
        </div>
        {/* Footer */}
        <div className="py-5">
          <div className="sfpro-text text-zinc-100/80 font-normal text-xl pb-7">
            Our Trusted Partners
          </div>
          <div className="flex items-center gap-10">
            {IMAGES.map((item, key) => (
              <Image src={item} layout="intrinsic" height={18} width={120} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
