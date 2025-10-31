import { Container, Grid2 } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Day10() {
  const ingredients = [
    { src: "/images/designs/rice.png", name: "White Rice" },
    { src: "/images/designs/chicken.png", name: "Grilled Chicken" },
    { src: "/images/designs/mustard.png", name: "Garlic Mayo" },
  ];
  return (
    <>
      <div className="h-screen w-screen bg-[#EDF1F4] overflow-auto">
        <Container maxWidth="lg">
          <Grid2 container className="py-10">
            <Grid2
              size={{ xs: 12, md: 6 }}
              className="flex items-center justify-center"
            >
              <div className=" relative w-[330px] max-w-[330px] bg-[#FAF9FD] rounded-3xl">
                {/* Header */}
                <div className="px-4 pb-4 pt-8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="sfpro text-[#519037]">􀝓</div>
                    <div className="text-sm font-medium text-[#17202A]">
                      Jumeirah Beach Road{" "}
                      <span className="sfpro text-[#B5B9C2] text-xs">􀆈</span>
                    </div>
                  </div>
                  <div className="overflow-hidden relative h-[35px] w-[35px] rounded-[100px]">
                    <Image
                      src={"/manan.jpeg"}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
                {/* Image */}
                <div className="flex items-center justify-center py-4">
                  <div className="h-[450px] h-max-[450px] w-[282px] relative overflow-hidden rounded-3xl">
                    <Image
                      src={"/images/designs/bowl.png"}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center text-[#F3FBFE] font-bold text-[12px] bg-zinc-100/20 w-fit py-1 px-3 rounded-[100px]">
                      500g
                    </div>
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-40 text-center text-[#F3FBFE] font-bold text-[40px] leading-10">
                      big rice bowl
                    </div>
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2  w-fit p-1 rounded-[100px] flex items-center gap-4 border-2 border-[#15C145]">
                      <div className=" text-center text-[#F3FBFE] font-bold text-[14px] bg-[#15C145] py-1.5 px-3 rounded-[100px] flex items-center gap-4">
                        <div>AED 200</div>
                        <div className="sfpro">􀅼</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* cooking time */}
                <div className="mt-4 mb-10 mx-4 px-2 py-1 bg-[#FFFFFF] shadow-xs rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative h-[50px] w-[50px] overflow-hidden rounded-md">
                      <Image
                        src="/images/designs/time.jpg"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <div>
                      <div className="text-[#8D8D8F] text-xs">cooking time</div>
                      <div className="text-[#181F27] text-sm"> 20 min</div>
                    </div>
                  </div>
                  <div className="bg-[#F5F6FA] text-sm py-3.5 px-1 w-fit rounded-lg text-[#141A26] ">
                    #1245
                  </div>
                </div>
                {/* Flotaing */}
                <div className="absolute px-4 bottom-4 left-0 right-0 flex items-center justify-between">
                  <div className="sfpro bg-[#363636] text-zinc-100 px-4 py-2 text-sm rounded-[100px] shadow">
                    􀊫 Search
                  </div>
                  <div className="sfpro bg-[#29D536] text-zinc-100 px-4 py-2 text-sm rounded-[100px] shadow">
                    AED 1544
                  </div>
                </div>
              </div>
            </Grid2>
            <Grid2
              size={{ xs: 12, md: 6 }}
              sx={{ mt: { xs: 10, md: 0 } }}
              className="flex items-center justify-center"
            >
              <div className="w-[330px] max-w-[330px] h-[675px] bg-[#FAF9FD] rounded-3xl relative overflow-hidden">
                <Image
                  src={"/images/designs/bowl2.png"}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
                <div className="absolute left-0 right-0 top-4 px-4 flex items-center justify-between">
                  <div className="sfpro text-[#F3FBFE] font-bold text-[12px] bg-zinc-100/20 w-fit py-2 px-4 rounded-[100px]">
                    􀊵
                  </div>
                  <div className="sfpro text-[#F3FBFE] font-bold text-[12px] bg-zinc-100/20 w-fit py-2 px-4 rounded-[100px]">
                    􀆄
                  </div>
                </div>
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-50 text-center text-[#F3FBFE] font-bold text-[50px] leading-14">
                  big rice bowl
                </div>
                {/* Bowl Content */}
                <div className="absolute bottom-7 right-0 left-0 px-2">
                  <div className="mt-4 mb-2 flex items-center gap-2">
                    {ingredients.map((item, key) => (
                      <div className="bg-zinc-700/40 w-50  h-25 flex flex-col items-center justify-center rounded-xl py-4">
                        <Image
                          src={item.src}
                          key={key}
                          height={50}
                          width={50}
                        />
                        <div className="text-[10px] text-center text-[#FFFFFF] mt-2">
                          {item.name}
                        </div>
                      </div>
                    ))}
                    <div className="bg-zinc-700/40 w-50 h-25  flex flex-col items-center justify-center rounded-xl py-4">
                      <div className="sfpro h-[50px] w-[50px] flex items-center justify-center text-[#FFFFFF]">
                        􀅼
                      </div>
                      <div className="text-[10px]  text-[#FFFFFF] mt-2">
                        Item
                      </div>
                    </div>
                  </div>
                  <div className="my-2 bg-zinc-700/50 p-3 rounded-lg flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="text-zinc-100/80 text-sm">Energy</div>
                      <div className="text-zinc-100/80 text-sm">Protein</div>
                      <div className="text-zinc-100/80 text-sm">Fats</div>
                      <div className="text-zinc-100/80 text-sm">Carbs</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-zinc-100 text-sm">350 kcal</div>
                      <div className="text-zinc-100 text-sm">28 g</div>
                      <div className="text-zinc-100 text-sm">8 g</div>
                      <div className="text-zinc-100 text-sm">158 g</div>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-between bg-zinc-700/40 p-1 rounded-[100px]">
                    <div className="text-xs text-zinc-100 px-3 py-4 bg-zinc-700/40 rounded-[100px]">
                      250
                    </div>
                    <div className="text-xs text-zinc-300">360</div>
                    <div className="text-xs text-zinc-300">500</div>
                    <div className="text-xs text-zinc-300">g</div>
                    <div className="bg-[#2ADA39] px-5 py-3 rounded-[100px] text-[#FFFFFF] cursor-pointer">
                      AED 200 +
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
