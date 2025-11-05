import { X } from "@mui/icons-material";
import { Box, Container, Grid2, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Index() {
  const URL = "https://www.manantandon.com/100designs";
  const isMobile = useMediaQuery("(max-width:500px)");
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(URL);
      alert("copied");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const from1to10 = [
    {
      src: "/images/designs/100designs/1.png",
      name: "Design 1",
      url: "https://www.manantandon.com/100designs/day1",
      title: "Apple Music Design.",
      description:
        "I tried recreating the macOS 26 Apple Music side menu, and it turned out pretty well, I guess!",
    },
    {
      src: "/images/designs/100designs/2.png",
      name: "Design 2",
      url: "https://www.manantandon.com/100designs/day2",
      title: "@AugustusDesign",
      description: "The design is built using Next.js, MUI, and Tailwind CSS.",
    },
    {
      src: "/images/designs/100designs/3.png",
      name: "Design 3",
      url: "https://www.manantandon.com/100designs/day3",
      title: "@heysatya_",
      description:
        "It’s a Hotel Booking App design. Though it's originally a mobile app concept, I built it using Next.js, Tailwind, Swiper.js, and SF Symbols.",
    },
    {
      src: "/images/designs/100designs/4.png",
      name: "Design 4",
      url: "https://www.manantandon.com/100designs/day4",
      title: "@OlabodeUIUX",
      description:
        "How would a frontend dev implement this?” — and that gave me the idea to build it for Day 4.",
    },
    {
      src: "/images/designs/100designs/5.png",
      name: "Design 5",
      url: "https://www.manantandon.com/100designs/day5",
      title: "@WithWaleedSabir",
      description: "Keeping it subtle, clean, and minimalist ",
    },
    {
      src: "/images/designs/100designs/6.png",
      name: "Design 6",
      url: "https://www.manantandon.com/100designs/day6",
      title: "@UiUxSeyi ⭐️.",
      description: "Really sleek and minimal — turned out pretty well 👌",
    },
    {
      src: "/images/designs/100designs/7.png",
      name: "Design 7",
      url: "https://www.manantandon.com/100designs/day7",
      title: "@nataliabrak_",
      description: "a clean and creative folder-style layout 📁",
    },
    {
      src: "/images/designs/100designs/8.png",
      name: "Design 8",
      url: "https://www.manantandon.com/100designs/day8",
      title: "@Abmankendrick",
      description:
        "he card on the right was quite interesting — while developing it, I faced a challenge creating a blurred background at the bottom that flows into the image. However, I somehow managed to pull it off, and it turned out pretty well, I guess 🙃",
    },
    {
      src: "/images/designs/100designs/9.png",
      name: "Design 9",
      url: "https://www.manantandon.com/100designs/day9",
      title: "@uiuxEra",
      description:
        "Being a dog owner myself, I felt inspired to recreate this, it’s clean, minimal, and I really love how it turned out! ✨",
    },
    {
      src: "/images/designs/100designs/10.png",
      name: "Design 10",
      url: "https://www.manantandon.com/100designs/day10",
      title: "@mishutkin_x's",
      description:
        "Not really a challenge to make — but finding the right assets definitely was 🫣",
    },
  ];
  const from11to20 = [
    {
      src: "/images/designs/100designs/11.png",
      name: "Design 11",
      url: "https://www.manantandon.com/100designs/day11",
      title: "@ShruPosts",
      description:
        "The image she generated vs the Hero she designed vs the Hero I developed, it turned out really great!",
    },
  ];
  return (
    <>
      <div className="h-screen w-screen bg-[#FFFFFF] overflow-auto">
        <div className="relative">
          {isMobile ? (
            <div className="relative overflow-hidden h-[210px] w-[100%]">
              <Image
                src={"/images/designs/banner.png"}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          ) : (
            <Image
              src={"/images/designs/banner.png"}
              layout="intrinsic"
              height={1396}
              width={5688}
            />
          )}
          <div
            onClick={copyToClipboard}
            className="sfpro absolute top-5 right-5 px-2 md:px-2.5 py-1 md:py-1.5 text-[14px] md:text-[18px] text-zinc-100 md:text-zinc-800 cursor-pointer rounded-[100px] backdrop-blur-sm bg-zinc-300/50 border border-zinc-200"
          >
            􀈂
          </div>
        </div>
        <div className="my-10 md:my-20">
          <Container maxWidth="lg">
            <Grid2 container>
              <Grid2 size={{ xs: 12, md: 6 }} className="pr-0 md:pr-10">
                <div className="text-[20px] md:text-3xl  font-extrabold sfpro">
                  100 Days 100 Frontend Designs
                </div>
                <div className="sfpro text-sm md:text-base text-zinc-500 my-5 md:my-7">
                  Welcome to 100 Days of Frontend Designs – a creative journey
                  where I build one unique UI every day using Next.js, Tailwind,
                  MUI, and SF Symbols. It's a celebration of design, code, and
                  the art of turning visuals into living, interactive
                  experiences. Follow along as I recreate inspiring designs,
                  share progress, and push the limits of modern frontend
                  development. Dive in, explore each day's build, and see how
                  ideas come to life – one design at a time.
                </div>
                <div className="flex items-center gap-4">
                  <X className="text-[#000000]" fontSize="small" />
                  <a href="https://x.com/4d616e616eT" target="_blank">
                    <div className="sfpro cursor-pointer hover:text-[#1D9BF0] text-sm md:text-base">
                      Manan(4d616e616e) 􀄯
                    </div>
                  </a>
                </div>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }} sx={{ mt: { xs: 5, md: 0 } }}>
                <a
                  href="https://x.com/4d616e616eT"
                  className="inline-block transform -rotate-1 "
                >
                  <Image
                    src={"/images/designs/100designs/tweet.png"}
                    layout="intrinsic"
                    height={2700}
                    width={3810}
                    alt="100 Days Frontend Designs"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 30px",
                      borderRadius: "10px",
                    }}
                  />
                </a>
              </Grid2>
            </Grid2>
          </Container>
        </div>
        <div>
          <Container maxWidth="lg">
            {/* 1 - 10*/}
            <div className="mt-20">
              <div className="sfpro font-extrabold text-[20px]">
                Designs: 1-10
              </div>

              <Grid2 container className="my-7" rowGap={4}>
                {from1to10.map((item, key) => (
                  <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={key}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <div className="shrink-0">
                        <Image
                          src={item.src}
                          height={100}
                          width={100}
                          style={{ borderRadius: "7px", objectFit: "contain" }}
                          alt={item.name}
                        />
                      </div>
                      <div className="flex-1 min-w-0 pr-4">
                        <div className="wrap-break-word text-xs text-zinc-500 sfpro font-extrabold">
                          {item.name}
                        </div>
                        <div className="wrap-break-word text-md text-zinc-800 sfpro font-extrabold">
                          Inspired by {item.title}
                        </div>
                        <Box
                          className="wrap-break-word text-xs text-zinc-500 sfpro font-extrabold"
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {item.description}
                        </Box>
                      </div>
                    </a>
                  </Grid2>
                ))}
              </Grid2>
            </div>
            {/*11 - 20*/}
            <div className="mt-20">
              <div className="sfpro font-extrabold text-[20px]">
                Designs: 11-20
              </div>

              <Grid2 container className="my-7" rowGap={4}>
                {from11to20.map((item, key) => (
                  <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={key}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <div className="shrink-0">
                        <Image
                          src={item.src}
                          height={100}
                          width={100}
                          style={{ borderRadius: "7px", objectFit: "contain" }}
                          alt={item.name}
                        />
                      </div>
                      <div className="flex-1 min-w-0 pr-4">
                        <div className="wrap-break-word text-xs text-zinc-500 sfpro font-extrabold">
                          {item.name}
                        </div>
                        <div className="wrap-break-word text-md text-zinc-800 sfpro font-extrabold">
                          Inspired by {item.title}
                        </div>
                        <Box
                          className="wrap-break-word text-xs text-zinc-500 sfpro font-extrabold"
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {item.description}
                        </Box>
                      </div>
                    </a>
                  </Grid2>
                ))}
              </Grid2>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
