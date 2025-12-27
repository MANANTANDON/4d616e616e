import { Container, Grid2 } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Day7() {
  const gradientImg = [
    "https://images.unsplash.com/photo-1646038572806-3d5f4252c567?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGdyYWRpZW50fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    "https://images.unsplash.com/photo-1635776062043-223faf322554?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGdyYWRpZW50fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
  ];
  return (
    <>
      <div className="h-screen w-screen bg-[#F6F6F6] overflow-scroll">
        <Container maxWidth="md" className="h-screen  py-30">
          <Grid2 container>
            <Grid2
              size={{ xs: 12, md: 6 }}
              className="flex items-center justify-center"
            >
              <div className="h-[284px] max-h-[284px] w-[284px] max-w-[284px] rounded-[37px] bg-[#292929] shadow-xl p-[7px]">
                <div className="relative overflow-hidden h-full w-full rounded-[30px]">
                  <Image
                    src={gradientImg[0]}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                  <div className="absolute sfpro left-3 text-[#FFFFFF] text-[100px] -rotate-20 top-5">
                    􀥨
                  </div>
                  <div className="absolute sfpro left-20 text-[#FFFFFF] text-[100px]">
                    􀥨
                  </div>
                  <div className="absolute sfpro left-37 text-[#FFFFFF] text-[100px] rotate-20 top-5">
                    􀥨
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#292929] rounded-tr-xl h-[152px]"></div>
                  <div className="absolute top-[91px] left-0 right-0 bg-[#292929] rounded-t-xl w-[101px] h-[27px]"></div>
                  <div
                    className="absolute top-[103px] left-[82px] right-0 bg-[#292929] rounded-xs w-[45.22px] h-[25.3px]"
                    style={{ transform: "rotate(36.28deg)" }}
                  ></div>
                  <div className="absolute top-25 left-0 right-0 sfpro text-zinc-100  flex items-center justify-between pl-2 pr-4">
                    Work Files
                  </div>
                  <div className="absolute top-31 left-0 right-0 sfpro flex items-center justify-between pl-2 pr-4">
                    <div className="text-[#696969] font-normal text-sm">
                      Notes & More
                    </div>
                    <div className="sfpro text-[#D4D4D4]">􀍠</div>
                  </div>
                  <div className="absolute bottom-4 left-4 sfpro text-zinc-100 text-xs">
                    􀉁 2,386 Files
                  </div>
                </div>
              </div>
            </Grid2>
            <Grid2
              size={{ xs: 12, md: 6 }}
              sx={{ mt: { xs: 10, md: 0 } }}
              className="flex items-center justify-center"
            >
              <div className="h-[284px] max-h-[284px] w-[284px] max-w-[284px] rounded-[37px] bg-[#292929] shadow-xl p-[7px]">
                <div className="relative overflow-hidden h-full w-full rounded-[30px]">
                  <Image
                    src={gradientImg[1]}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                  <div className="absolute sfpro left-3 text-[#FFFFFF] text-[100px] -rotate-20 top-5">
                    􀥨
                  </div>
                  <div className="absolute sfpro left-20 text-[#FFFFFF] text-[100px]">
                    􀥨
                  </div>
                  <div className="absolute sfpro left-37 text-[#FFFFFF] text-[100px] rotate-20 top-5">
                    􀥨
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#292929] rounded-tr-xl h-[152px]"></div>
                  <div className="absolute top-[91px] left-0 right-0 bg-[#292929] rounded-t-xl w-[101px] h-[27px]"></div>
                  <div
                    className="absolute top-[103px] left-[82px] right-0 bg-[#292929] rounded-xs w-[45.22px] h-[25.3px]"
                    style={{ transform: "rotate(36.28deg)" }}
                  ></div>
                  <div className="absolute top-25 left-0 right-0 sfpro text-zinc-100  flex items-center justify-between pl-2 pr-4">
                    Work Files
                  </div>
                  <div className="absolute top-31 left-0 right-0 sfpro flex items-center justify-between pl-2 pr-4">
                    <div className="text-[#696969] font-normal text-sm">
                      Notes & More
                    </div>
                    <div className="sfpro text-[#D4D4D4]">􀍠</div>
                  </div>
                  <div className="absolute bottom-4 left-4 sfpro text-zinc-100 text-xs">
                    􀉁 2,386 Files
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
