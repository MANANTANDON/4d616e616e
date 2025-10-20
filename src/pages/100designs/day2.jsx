import { Box, Grid2, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Day2 = () => {
  const laptop = useMediaQuery("(min-width:1024px)");
  const maxLaptop = useMediaQuery("(min-width:1028px)");
  const Menu = [
    { name: "Home", path: "/" },
    { name: "Features", path: "" },
    { name: "Integration", path: "" },
    { name: "Resources", path: "" },
    { name: "Pricing", path: "" },
  ];
  return (
    <>
      {!laptop && (
        <div className="flex items-center justify-center h-[100vh]">
          <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
            Switch to Desktop
          </div>
        </div>
      )}
      {laptop && (
        <div className="h-[100vh] w-[100vw] bg-[#F8F9FB] ">
          <Grid2 container spacing={2} sx={{ position: "relative" }}>
            {Array.from(Array(11)).map((item, key) => (
              <Grid2
                size={1.5}
                sx={{ height: "100vh" }}
                key={key}
                className="bg-[#F1F5F8]"
              />
            ))}
            {/* Header */}
            <div
              className={`h-20 flex items-center justify-between absolute left-0 right-0 ${
                maxLaptop ? "px-20" : "px-5"
              }`}
            >
              <div className="flex items-center bg-[#FFFFFF] border border-[#EAEBED] rounded-[10px] p-[5px]">
                <div className="sfpro font-bold text-2xl">􂙢 Mailo</div>
                <div className="h-[25px] border border-[#EBEAEF] mx-5" />
                <div className="flex items-center gap-1">
                  {Menu.map((item, key) => (
                    <div
                      key={key}
                      className="sfpro py-[5px] px-[15px] rounded-[7px] hover:bg-[#F8F9FB] hover:cursor-pointer"
                      style={{
                        backgroundColor: item.path === "/" && "#F8F9FB",
                      }}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
              {/* Auth Button */}
              <div className="flex items-center gap-2">
                <button className="border border-[#EBECEE] bg-[#FFFFFF] sfpro rounded-[10px] py-[8px] px-[18px] text-[15px] cursor-pointer">
                  Log In
                </button>
                <button className="border border-[#2A292E] bg-[#2A292E] text-[#FFFFFF] sfpro rounded-[10px] py-[8px] px-[18px] text-[15px] cursor-pointer">
                  Get Started
                </button>
              </div>
            </div>
            {/* Hero Container */}
            <div
              className="absolute"
              style={{
                top: "120px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <div className="flex justify-center items-center flex-col">
                <div className="sfpro text-[#191D20] text-[54px] font-bold">
                  Email That Works
                </div>
                <div className="sfpro -mt-5 text-[#191D20] text-[54px] font-bold">
                  The Way You Think
                </div>
                <div className="text-[#575B5C] text-[18px] font-regular">
                  Email with structure and speed. Manage
                </div>
                <div className="text-[#575B5C] text-[18px] font-regular -mt-0.5">
                  work without the usual inbox chaos
                </div>
              </div>
              {/* Buttons */}
              <div className="flex items-center justify-center gap-[10px] mt-[55px]">
                <button className="sfpro rounded-[11px] bg-[#242328] text-zinc-100 px-[24px] py-[9px] text-[17px] cursor-pointer shadow-2xl">
                  Get Started
                </button>
                <button className="sfpro rounded-[11px] bg-[#ffffff] border border-[#EAEBEF] px-[24px] py-[9px] text-[17px] text-[#242527] cursor-pointer">
                  􀊃 Watch demo
                </button>
              </div>
            </div>
            {/* Bottom Image */}
            <div
              style={{
                position: "absolute",
                bottom: "100vh",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: { sm: "273px", lg: "333px" },
                  width: { sm: "900px", lg: "1100px" },
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/designs/mailo.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="Mailo design"
                />
              </Box>
            </div>
          </Grid2>
        </div>
      )}
    </>
  );
};

export default Day2;
