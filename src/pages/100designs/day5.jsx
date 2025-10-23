import { Container, Grid2 } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const swiperStyles = `
  .swiper-pagination-bullet {
    background-color: rgba(255, 255, 255, 0.5) !important;
    opacity: 1 !important;
  }
  
  .swiper-pagination-bullet-active {
    background-color: #ffffff !important;
  }
  
  .swiper-pagination {
    bottom: 10px !important;
    background-color: rgba(255, 255, 255, 0.4) !important;
    border-radius: 100px;
    padding: 7px;
  }
`;

export default function Day5() {
  const destinations = [
    "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
    "https://images.unsplash.com/photo-1564137799581-baca1aa17f5d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyb3duJTIwaW50ZXJpb3JzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    "https://plus.unsplash.com/premium_photo-1661962911608-ea55ac7785da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
  ];
  return (
    <>
      <style>{swiperStyles}</style>
      <div className="h-screen w-screen bg-[#F7F7F7] py-10 overflow-auto">
        <Container maxWidth="lg">
          <Grid2 container>
            <Grid2 size={12} className="flex items-center justify-center">
              <div className="bg-[#FFFFFF] border border-zinc-300 shadow-lg p-[11px] w-[360px] max-w[360px] rounded-[22px]">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={20}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  modules={[Pagination]}
                >
                  {destinations?.map((item, key) => (
                    <SwiperSlide>
                      <div className="relative h-[280px] w-full rounded-[14px] overflow-hidden">
                        <Image
                          src={item}
                          key={key}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                        />
                        <div className=" sfpro absolute text-[14px] bg-[#FFFFFF] top-2 left-2 rounded-[100px] py-1 px-2">
                          <span className="text-[#FAC304]">􀋃</span> Prime Pick
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/*Price */}
                <div className="flex items-baseline-last gap-1.5 my-3">
                  <div className="font-semibold text-[16px] text-[#222222]">
                    $250,000
                  </div>
                  <div className="text-[#8F8F8F] text-[14px]">List price</div>
                </div>
                {/*Name and Address*/}
                <div className="text-[#212121] my-3 text-[14px]">
                  Gulliaume Briard{" "}
                  <span className="text-[#A9A9A9]">
                    • Harry Koningsbergstr, 1063 AG
                  </span>
                </div>
                {/* Square Detials */}
                <div className="flex items-center gap-3 my-3">
                  <div className="bg-[#F3F3F3] w-fit p-2 rounded-lg sfpro text-[14px]">
                    <span className="bg-[#FFFFFF] p-1 rounded-md shadow">
                      􂄝
                    </span>{" "}
                    29 m<sup>2</sup>{" "}
                    <span className="text-[#898989]">Living</span>
                  </div>
                  <div className="bg-[#F3F3F3] w-fit p-2 rounded-lg sfpro text-[14px]">
                    <span className="bg-[#FFFFFF] p-1 rounded-md shadow">
                      􀎞
                    </span>{" "}
                    2 <span className="text-[#898989]">Rooms</span>
                  </div>
                </div>
                {/* Owner */}
                <div className="border-t border-[#EAEAEA] py-3">
                  <div className="p-3 bg-[#F3F3F3] rounded-xl">
                    <div className="flex items-center justify-between">
                      <div className="text-[14px] text-[#9E9E9E]">
                        Listed By
                      </div>
                      <div className="text-[14px] text-[#9E9E9E]">Posted</div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="text-[14px] text-[#222222] bg-[#FFFFFF] shadow-md p-1.5 rounded-lg border border-zinc-200 flex items-center gap-2">
                        <div className="h-[25px] w-[25px] rounded-[100px] relative overflow-hidden">
                          <Image
                            src="/manan.jpeg"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                          />
                        </div>
                        Manan Tandon
                      </div>
                      <div className="text-[14px] text-[#222222]">
                        2 days ago
                      </div>
                    </div>
                  </div>
                </div>
                {/* Button */}
                <div className="w-full">
                  <button className="bg-[#323232] text-[#FFFFFF] w-full rounded-xl py-2 shadow-lg cursor-pointer">
                    View Details
                  </button>
                </div>
              </div>
            </Grid2>
          </Grid2>
        </Container>
      </div>
    </>
  );
}
