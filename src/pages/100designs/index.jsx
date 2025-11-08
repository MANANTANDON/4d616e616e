import { from11to20, from1to10 } from "@/utils/constant";
import { X } from "@mui/icons-material";
import { Box, Container, Grid2, useMediaQuery } from "@mui/material";
import Head from "next/head";
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

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>
          100 Days 100 Frontend Designs | Next.js, Tailwind, MUI UI Challenge
        </title>
        <meta
          name="description"
          content="Welcome to the 100 Days 100 Frontend Designs challenge by Manan Tandon. Explore daily UI builds using Next.js, Tailwind CSS, and MUI. Follow the journey of turning inspiring designs into interactive experiences."
        />
        <meta
          name="keywords"
          content="100 Days 100 Designs, Frontend Challenge, UI/UX Design, Next.js, Tailwind CSS, MUI, React, Web Development Portfolio, Manan Tandon"
        />
        <link rel="canonical" href="https://www.manantandon.com/100designs" />
        <link rel="icon" href="/100DaysDesign.ico" />{" "}
        {/* Use the provided icon path */}
        {/* Open Graph (OG) Tags for Social Media Sharing (e.g., Facebook, LinkedIn) */}
        <meta
          property="og:title"
          content="100 Days 100 Frontend Designs Challenge"
        />
        <meta
          property="og:description"
          content="Explore 100 unique UI designs built one-by-one with Next.js, Tailwind, and MUI by Manan Tandon. A daily celebration of design and code."
        />
        <meta
          property="og:url"
          content="https://www.manantandon.com/100designs"
        />
        <meta property="og:site_name" content="Manan Tandon Portfolio" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.manantandon.com/100DaysDesign.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@4d616e616eT" />{" "}
        {/* Use your X/Twitter handle */}
        <meta name="twitter:creator" content="@4d616e616eT" />
        <meta
          name="twitter:title"
          content="100 Days 100 Frontend Designs Challenge"
        />
        <meta
          name="twitter:description"
          content="Building 100 unique UI designs daily with Next.js, Tailwind, and MUI. See the latest design and follow the progress!"
        />
        <meta
          name="twitter:image"
          content="https://www.manantandon.com/100DaysDesign.png"
        />
      </Head>
      <div className="h-screen w-screen bg-[#FFFFFF] overflow-auto">
        <div className="relative">
          {isMobile ? (
            <div className="relative overflow-hidden h-[210px] w-full">
              <Image
                src={"/images/designs/banner.png"}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="100 Days 100 Frontend Designs Banner"
              />
            </div>
          ) : (
            <Image
              src={"/images/designs/banner.png"}
              layout="intrinsic"
              height={1396}
              width={5688}
              alt="100 Days 100 Frontend Designs Banner"
            />
          )}
          <div
            onClick={copyToClipboard}
            className="sfpro absolute top-5 right-5 px-2 md:px-2.5 py-1 md:py-1.5 text-[14px] md:text-[18px] text-zinc-100 md:text-zinc-800 cursor-pointer rounded-[100px] backdrop-blur-sm bg-zinc-300/50 border border-zinc-200"
          >
            􀈂 {/* Using HTML entity for SF Symbol '􀈂' */}
          </div>
        </div>
        <div className="my-10 md:my-20">
          <Container maxWidth="lg">
            <Grid2 container>
              <Grid2 size={{ xs: 12, md: 6 }} className="pr-0 md:pr-10">
                {/* Use the h1 tag for the main title, which is good for SEO */}
                <h1 className="text-[20px] md:text-3xl  font-extrabold sfpro">
                  100 Days 100 Frontend Designs
                </h1>
                <div className="sfpro text-sm md:text-base text-zinc-500 my-5 md:my-7">
                  Welcome to 100 Days of Frontend Designs - a creative journey
                  where I build one unique UI every day using Next.js, Tailwind,
                  MUI, and SF Symbols. It's a celebration of design, code, and
                  the art of turning visuals into living, interactive
                  experiences. Follow along as I recreate inspiring designs,
                  share progress, and push the limits of modern frontend
                  development. Dive in, explore each day's build, and see how
                  ideas come to life - one design at a time.
                </div>
                <div className="flex items-center gap-4">
                  <X className="text-[#000000]" fontSize="small" />
                  <a
                    href="https://x.com/4d616e616eT"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="sfpro cursor-pointer hover:text-[#1D9BF0] text-sm md:text-base">
                      Manan(4d616e616e) 􀄯{" "}
                      {/* Using HTML entity for SF Symbol '􀄯' */}
                    </div>
                  </a>
                </div>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }} sx={{ mt: { xs: 5, md: 0 } }}>
                <a
                  href="https://x.com/4d616e616eT"
                  className="inline-block transform -rotate-1 "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/images/designs/100designs/tweet.png"}
                    layout="intrinsic"
                    height={2700}
                    width={3810}
                    alt="100 Days Frontend Designs Tweet"
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
            <section className="mt-20">
              {/* Use h2 for subheadings */}
              <h2 className="sfpro font-extrabold text-[20px]">
                Designs: 1-10
              </h2>

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
            </section>
            {/*11 - 20*/}
            <section className="mt-20">
              <h2 className="sfpro font-extrabold text-[20px]">
                Designs: 11-20
              </h2>

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
            </section>
          </Container>
        </div>
      </div>
    </>
  );
}
