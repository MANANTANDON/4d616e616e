import Image from "next/image";
import React from "react";

export const MananTandon = ({ setOpen }) => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center w-fit cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="relative overflow-hidden w-[70px] h-10 rounded-[3px] shadow-[0_1px_2px_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)]">
          <Image
            src="/images/slides/slide1.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="projects"
          />
        </div>
        <p className="sfpro text-[12px] mt-2">projects</p>
      </div>
    </>
  );
};
