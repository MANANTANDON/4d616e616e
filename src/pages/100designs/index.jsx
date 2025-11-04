import Image from "next/image";
import React from "react";

export default function Index() {
  const URL = "https://www.manantandon.com/100designs";
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(URL);
      alert("copied");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <>
      <div className="h-screen w-screen bg-[#FFFFFF]">
        <div className="relative">
          <Image
            src={"/images/designs/banner.png"}
            layout="intrinsic"
            height={1396}
            width={5688}
          />
          <div
            onClick={copyToClipboard}
            className="sfpro absolute top-5 right-5 px-2.5 py-1.5 text-[18px] text-zinc-800 cursor-pointer rounded-[100px] backdrop-blur-sm bg-zinc-300/50 border border-zinc-200"
          >
            􀈂
          </div>
        </div>
      </div>
    </>
  );
}
