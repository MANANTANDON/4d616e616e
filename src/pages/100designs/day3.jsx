import Image from "next/image";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useMediaQuery } from "@mui/material";

const Day3 = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const isMobile = useMediaQuery("(max-width: 500px)");

  const logginImage =
    "https://images.unsplash.com/photo-1525247862234-30193931fdf7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VyJTIwcG90c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900";
  const destinations = [
    "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
    "https://images.unsplash.com/photo-1564137799581-baca1aa17f5d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyb3duJTIwaW50ZXJpb3JzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    "https://plus.unsplash.com/premium_photo-1661962911608-ea55ac7785da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
  ];

  return (
    <>
      {!isMobile && (
        <div className="flex items-center justify-center h-screen">
          <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
            Switch to Mobile
          </div>
        </div>
      )}
      {isMobile && (
        <div className="h-screen w-screen bg-[#F8F9FB] overflow-auto">
          {!loggedIn && (
            <div className="h-screen">
              {/* Header */}
              <div className="p-[17px] flex justify-between">
                <div
                  className="sfpro h-[40px] w-[40px] rounded-[50%] bg-[#F4F4F4] flex items-center justify-center text-[14px]"
                  onClick={() => setLoggedIn(true)}
                >
                  􀄪
                </div>
                <h4
                  className="text-[#0070DC] font-semibold"
                  onClick={() => setLoggedIn(true)}
                >
                  Skip
                </h4>
              </div>
              {/* Image Center */}
              <div className="my-10 relative flex items-center justify-center overflow-hidden py-15">
                <div className="absolute -left-40 -bottom-2 opacity-50">
                  <div className="h-[237px] w-[224px] relative overflow-hidden rounded-[40px] shadow-2xs border-3 border-zinc-100 -rotate-11">
                    <Image
                      src={logginImage}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
                <div className="absolute -right-40 -bottom-2 opacity-50">
                  <div className="h-[237px] w-[224px] relative overflow-hidden rounded-[40px] shadow-2xs border-3 border-zinc-100 rotate-11">
                    <Image
                      src={logginImage}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
                <div className="h-[260px] w-[205px] relative overflow-hidden rounded-[40px] shadow-2xl border-3 border-zinc-100">
                  <Image
                    src={logginImage}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
              {/* Title Info */}
              <div className="">
                <div className="text-center text-[#9A9A9A] font-bold text-4xl sfpro">
                  Welcome
                </div>
                <div className="text-center text-[#9A9A9A] font-bold text-4xl sfpro mt-2">
                  {" "}
                  to the <span className="sfpro text-[#212121]">TripStar</span>
                </div>
                <div className="text-center text-[#9A9A9A] font-bold text-lg sfpro mt-4">
                  world is waiting for you to explore
                </div>
              </div>
              {/* Button */}
              <div className="px-[17px] my-10">
                <button
                  className="sfpro text-[16px] font-bold rounded-[20px] bg-[#0275EB] w-full text-[#FFFFFF] py-[20px] flex gap-4 items-center justify-center"
                  onClick={() => setLoggedIn(true)}
                >
                  Continue <span className="text-[10px]">􀆊</span>
                </button>
              </div>
            </div>
          )}
          {loggedIn && (
            <div className="relative ">
              {/* Header */}
              <div className="flex flex-col p-[17px] rounded-[24px] bg-[#FFFFFF]">
                <div className="flex flex-row items-center justify-between my-[20px]">
                  <div className="flex items-center gap-2">
                    <div>
                      <div className="relative overflow-hidden h-[40px] w-[40px] rounded-[50%] border-2 border-zinc-50 shadow">
                        <Image
                          src="/manan.jpeg"
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-1">
                        <span className="sfpro text-[#FFC431] text-[12px]">
                          􀇕
                        </span>{" "}
                        <span className="sfpro text-[#D1D1D1] font-bold text-[12px]">
                          SUNNY
                        </span>
                      </div>
                      <div className="sfpro text-[#414141] font-bold text-[14px]">
                        Hey 4d616e616e!
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="sfpro h-[40px] w-[40px] rounded-[50%] bg-[#F4F4F4] flex items-center justify-center text-[14px]">
                      􀋙
                    </div>
                  </div>
                </div>
                <div className="bg-[#F6F6F6] flex flex-row gap-1 p-3 rounded-[100px]">
                  <span className="sfpro text-[14px]">􀊫</span>
                  <input
                    className="text-[14px] w-full outline-0 text-[#1f1f1f] placeholder:text-[#A1A1A1]"
                    placeholder="Search Destination..."
                  />
                </div>
              </div>
              {/* Top Container */}
              <div className="px-[17px] my-[20px]">
                <div className="flex flex-row justify-between items-center">
                  <div className="sfpro text-[18px] text-[#060606] font-bold">
                    Recently Viewed
                  </div>
                  <div className="sfpro text-[#1770DD] font-bold flex items-center gap-1 ">
                    <span className="text-[14px]">See all</span>
                    <span className="text-[10px]">􀆊</span>
                  </div>
                </div>
                {/*IMAGES CAROUSLE */}
                <Swiper
                  pagination={true}
                  slidesPerView={1.2}
                  spaceBetween={20}
                  className="my-[20px]"
                >
                  {destinations?.map((item, key) => (
                    <SwiperSlide>
                      <div className="relative h-[317px] w-full rounded-[34px] overflow-hidden">
                        <Image
                          src={item}
                          key={key}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                        />
                        <div className="absolute left-[7px] right-[7px] bottom-[7px] bg-[#FFFFFF] p-4 rounded-[30px] flex flex-col gap-1">
                          <div className="text-[18px] font-bold">
                            Aurora Luxe
                          </div>
                          <div className="text-[#989898] text-[14px] font-medium">
                            Oregon, United States
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="sfpro font-medium text-[10px] text-[#797979] bg-[#E8E8E8] py-1 px-2 rounded-3xl">
                              􀙩 4 Rooms
                            </div>
                            <div className="sfpro font-medium text-[10px] text-[#797979] bg-[#E8E8E8] py-1 px-2 rounded-3xl">
                              􁐼 4 Bathrooms
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* Popular Hotels */}
              <div className="px-[17px] my-[20px]">
                <div className="flex flex-row justify-between items-center">
                  <div className="sfpro text-[18px] text-[#060606] font-bold">
                    Popular Hotels
                  </div>
                  <div className="sfpro text-[#1770DD] font-bold flex items-center gap-1 ">
                    <span className="text-[14px]">See all</span>
                    <span className="text-[10px]">􀆊</span>
                  </div>
                </div>
                {/*IMAGES CAROUSLE */}
                <Swiper
                  pagination={true}
                  slidesPerView={1.2}
                  spaceBetween={20}
                  className="my-[20px]"
                >
                  {destinations?.map((item, key) => (
                    <SwiperSlide>
                      <div className="relative h-[317px] w-full rounded-[34px] overflow-hidden">
                        <Image
                          src={item}
                          key={key}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                        />
                        <div className="absolute left-[7px] right-[7px] bottom-[7px] bg-[#FFFFFF] p-4 rounded-[30px] flex flex-col gap-1">
                          <div className="text-[18px] font-bold">
                            Aurora Luxe
                          </div>
                          <div className="text-[#989898] text-[14px] font-medium">
                            Oregon, United States
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="sfpro font-medium text-[10px] text-[#797979] bg-[#E8E8E8] py-1 px-2 rounded-3xl">
                              􀙩 4 Rooms
                            </div>
                            <div className="sfpro font-medium text-[10px] text-[#797979] bg-[#E8E8E8] py-1 px-2 rounded-3xl">
                              􁐼 4 Bathrooms
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* Gradient */}
              <div
                className="absolute -bottom-10 left-0 right-0 h-50 z-4"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, transparent, #FFFFFF)",
                }}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Day3;
