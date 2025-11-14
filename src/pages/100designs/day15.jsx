import { Container, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Day15() {
  const laptop = useMediaQuery("(min-width:1025px)");
  return (
    <>
      {!laptop && (
        <div className="flex items-center justify-center h-screen overflow-auto">
          <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
            Switch to screen bigger than 1024
          </div>
        </div>
      )}
      {laptop && (
        <div className="h-screen w-screen bg-[#FFFFFF] overflow-auto">
          <Container maxWidth="xl">
            <div className="mx-15 relative h-screen">
              <div className="text-[#363636] varsf text-lg text-center font-semibold py-4">
                ATELIER VÉRA
              </div>
              <div className=" flex items-center justify-between mt-30">
                <div>
                  <div className="varsf text-3xl font-light text-[#363636]">
                    Timeless interiors, sculpted with precision.
                  </div>
                  <div className="varsf text-3xl font-light text-[#363636]">
                    Where artistry meets architecture
                  </div>
                  <div className="varsf text-3xl font-light text-[#363636]">
                    and every detail tells a story.
                  </div>
                </div>
                <div>
                  <button className="varsf font-extralight text-4xl border-b border-[#363636] text-[#363636] px-1.5 cursor-pointer">
                    Book Consultation{" "}
                    <span className="sfpro font-extralight text-3xl">􀰾</span>
                  </button>
                </div>
              </div>
              <div className="absolute -bottom-7 left-0 right-0 flex justify-between">
                <div className="relative overflow-hidden w-[400px] h-[528px]">
                  <Image
                    src={"/images/designs/kuba_2.png"}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="relative overflow-hidden w-[400px] h-[528px]">
                  <Image
                    src={"/images/designs/kuba_3.png"}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div>
                  <div className="relative overflow-hidden w-[400px] h-[373px]">
                    <Image
                      src={"/images/designs/kuba_3.png"}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center mt-10">
                    <div className="varsf text-2xl font-light">View All</div>
                    <div className="sfpro text-2xl font-light">􀄩</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
