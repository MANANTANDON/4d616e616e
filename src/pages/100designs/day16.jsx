import { Container, Grid2, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Day16() {
  const laptop = useMediaQuery("(min-width:769px)");
  const Menu = ["Home", "Models", "About", "Join us"];
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
        <Container
          maxWidth="xl"
          className="h-screen w-screen bg-[#FFFFFF] overflow-auto"
        >
          <Grid2 container>
            <Grid2
              size={{ xs: 12, md: 6 }}
              className="h-screen px-10 flex flex-col justify-between"
            >
              {/* Header */}
              <div className="flex items-center justify-between mt-5">
                <div>
                  <Image
                    src="/images/designs/day16_logo.png"
                    layout="intrinsic"
                    height={30}
                    width={43}
                  />
                </div>
                <div className="flex items-center justify-center gap-4">
                  {Menu.map((item, key) => (
                    <div
                      key={key}
                      className="sfpro-text text-[#9E9E9E] bg-[#F8F8F8] px-3 py-1.5 rounded-[20px] text-sm cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              {/* Hero Section */}
              <div>
                <div className="sfpro-text text-[#B8B8B8] text-[35px] font-light">
                  Create beyond beauty.
                </div>
                <div className="sfpro-text text-[#010101] text-[45px] font-light -mt-2">
                  Model with Purpose.
                </div>
                <div className="sfpro-text text-[#999999]">
                  We represent boundary-breaking talent shaping the
                </div>
                <div className="sfpro-text text-[#999999] -mt-1">
                  next era of fashion, art and culture.
                </div>
                <button className="sfpro-text bg-[#F2F2F2] font-[#232323] font-semibold px-6 py-3 rounded-[50px] text-sm cursor-pointer mt-12">
                  Discover Our Talent
                </button>
              </div>
              {/* Locaiton */}
              <div className="sfpro-text text-[#4D4D4D] mb-5">
                New York • Paris • Milan • London
              </div>
            </Grid2>
            {/* Image Grid */}
            <Grid2 size={{ xs: 12, md: 6 }} className="h-screen">
              <div className="absolute h-full w-[686px] lg:w-[488px] xl:w-[686px] overflow-hidden">
                <Image
                  src="/images/designs/day16.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </Grid2>
          </Grid2>
        </Container>
      )}
    </>
  );
}
