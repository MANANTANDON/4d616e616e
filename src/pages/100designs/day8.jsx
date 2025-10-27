import { Container, Grid2 } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Day8() {
  return (
    <>
      <div className="h-screen w-screen bg-[#F2F2F2]">
        <Container maxWidth="md" style={{ border: "1px solid green" }}>
          <Grid2 container className="border border-amber-500">
            <Grid2
              size={{ xs: 12, md: 6 }}
              className="flex items-center justify-center border border-green-400"
            >
              <div className="bg-[#FFFFFF] rounded-[30px] p-[13px]">
                <div className="relative overflow-hidden h-[260px] w-[260px] max-w-[260px] rounded-3xl">
                  <Image
                    src={"/images/designs/SofiaBennett.webp"}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                  />
                  <div className="absolute sfpro text-zinc-100 text-sm right-4 top-4 bg-zinc-800/20 backdrop-blur-md h-[30px] w-[30px] flex items-center justify-center rounded-[100px] border border-zinc-700">
                    􀉞
                  </div>
                </div>
                <div className="my-2">
                  <div className="text-[18px] font-semibold flex flex-row gap-2 items-baseline-last">
                    Natasha Romanoff{" "}
                    <span className="sfpro text-[#579BDF] text-[16px]">􀇻</span>
                  </div>
                </div>
                <div className="my-2">
                  <div className="text-[14px] font-normal w-[260px] max-w-[260px] text-[#4D4D4D]">
                    I'm a Brand Designer who focuses on clarity & emotinoal
                    connection.
                  </div>
                </div>
                <div className="my-4 flex items-center justify-between">
                  {/* Rating */}
                  <div className="flex flex-col items-center justify-center border-r border-[#E8E9E8] px-5">
                    <div className="text-sm font-bold">
                      <span className="text-[#E5A061] sfpro ">􀋃</span> 4.8
                    </div>
                    <div className="text-xs text-[#4D4D4D] mt-1">Rating</div>
                  </div>
                  {/* Earning */}
                  <div className="flex flex-col items-center justify-center border-r border-[#E8E9E8] px-5">
                    <div className="text-sm font-bold">$45k+</div>
                    <div className="text-xs text-[#4D4D4D] mt-1">Earned</div>
                  </div>
                  {/* Price */}
                  <div className="flex flex-col items-center justify-center border-none px-5">
                    <div className="text-sm font-bold">$50k/h4</div>
                    <div className="text-xs text-[#4D4D4D] mt-1">Rate</div>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="sfpro w-full bg-[#060606] text-zinc-100 py-3 text-sm rounded-[100px] cursor-pointer">
                    􀍕 Get In Touch
                  </button>
                </div>
              </div>
            </Grid2>
            <Grid2
              size={{ xs: 12, md: 6 }}
              className="flex items-center justify-center border border-green-400"
            >
              <div className="bg-[#FFFFFF] rounded-[30px] p-[13px]">
                <div className="relative overflow-hidden h-[460px] w-[260px] max-w-[260px] rounded-3xl">
                  <Image
                    src={"/images/designs/SofiaBennett.webp"}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                  />
                  <div className="absolute bottom-0 right-0 left-0 h-[210px] backdrop-blur-xs bg-linear-to-b from-transparent via-zinc-900/65 to-zinc-900" />
                  <div className="absolute bottom-0 right-0 left-0 h-fit px-[13px] py-[13px]">
                    <div className="my-2">
                      <div className="text-base font-semibold flex flex-row gap-2 items-baseline text-zinc-50">
                        Natasha Romanoff{" "}
                        <span className="sfpro text-[#579BDF] text-[16px]">
                          􀇻
                        </span>
                      </div>
                    </div>
                    <div className="my-2">
                      <div className="text-[14px] font-normal w-[260px] max-w-[260px] text-[#D1D5D4]">
                        I'm a Brand Designer who focuses on clarity & emotinoal
                        connection.
                      </div>
                    </div>
                    <div className="my-4 flex items-center justify-between">
                      {/* Rating*/}
                      <div className="flex flex-col items-center justify-center border-r border-[#4F504F] px-3">
                        <div className="text-sm font-bold text-[#FAFAF8]">
                          <span className="text-[#E5A061] sfpro ">􀋃</span> 4.8
                        </div>
                        <div className="text-xs mt-1 text-[#ACACAC]">
                          Rating
                        </div>
                      </div>
                      {/* Earning*/}
                      <div className="flex flex-col items-center justify-center border-r border-[#4F504F] px-3">
                        <div className="text-sm font-bold text-[#FAFAF8]">
                          $45k+
                        </div>
                        <div className="text-xs mt-1 text-[#ACACAC]">
                          Earned
                        </div>
                      </div>
                      {/* Price */}
                      <div className="flex flex-col items-center justify-center border-none px-3">
                        <div className="text-sm font-bold text-[#FAFAF8]">
                          $50k/h4
                        </div>
                        <div className="text-xs mt-1 text-[#ACACAC]">Rate</div>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-row items-center gap-2">
                      <button className="sfpro w-full bg-[#FFFFFF] text-zinc-800 py-3 text-sm rounded-[100px] cursor-pointer">
                        􀍕 Get In Touch
                      </button>
                      <button className="sfpro text-[#EDEEED] bg-[#373837] px-5 py-2.5 rounded-[100px] border border-zinc-700 text-sm cursor-pointer">
                        􀉞
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Grid2>
          </Grid2>
        </Container>
      </div>
    </>
  );
}
