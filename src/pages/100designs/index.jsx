import { from11to20, from1to10 } from "@/utils/constant";
import { X } from "@mui/icons-material";
import { Box, Container, Grid2, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";
import Head from "next/head";

export const metadata = {
  title: "100 Days 100 Frontend Designs | Manan Tandon",
  description:
    "Follow along as I build one unique UI design every day for 100 days using Next.js, Tailwind CSS, MUI, and SF Symbols. A creative journey of frontend development and interactive design experiences.",
  keywords: [
    "100 days of code",
    "frontend designs",
    "UI design challenge",
    "Next.js projects",
    "Tailwind CSS",
    "MUI components",
    "daily UI challenge",
    "web design portfolio",
    "React components",
    "frontend development",
    "Manan Tandon",
    "SF Symbols",
    "interactive UI",
    "design inspiration",
  ],
  authors: [{ name: "Manan Tandon", url: "https://www.manantandon.com" }],
  creator: "Manan Tandon",
  publisher: "Manan Tandon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.manantandon.com/100designs",
    siteName: "100 Days 100 Frontend Designs",
    title: "100 Days 100 Frontend Designs | Daily UI Challenge by Manan Tandon",
    description:
      "A creative journey where I build one unique UI every day using Next.js, Tailwind, MUI, and SF Symbols. Explore 100 days of frontend designs and interactive experiences.",
    images: [
      {
        url: "https://www.manantandon.com/100DaysDesign.png",
        width: 1200,
        height: 630,
        alt: "100 Days 100 Frontend Designs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@4d616e616eT",
    creator: "@4d616e616eT",
    title: "100 Days 100 Frontend Designs | Daily UI Challenge",
    description:
      "Follow my journey building one unique UI design every day for 100 days using Next.js, Tailwind CSS, and MUI.",
    images: ["https://www.manantandon.com/100DaysDesign.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/100DaysDesign.ico",
    shortcut: "/100DaysDesign.ico",
    apple: "/100DaysDesign.png",
  },
  alternates: {
    canonical: "https://www.manantandon.com/100designs",
  },
  category: "technology",
};

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "100 Days 100 Frontend Designs",
    url: "https://www.manantandon.com/100designs",
    description:
      "A creative journey where I build one unique UI every day using Next.js, Tailwind, MUI, and SF Symbols",
    author: {
      "@type": "Person",
      name: "Manan Tandon",
      url: "https://www.manantandon.com",
      sameAs: "https://x.com/4d616e616eT",
    },
    publisher: {
      "@type": "Person",
      name: "Manan Tandon",
    },
  };

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWorkSeries",
    name: "100 Days 100 Frontend Designs",
    description:
      "Daily frontend design challenges showcasing UI/UX development with modern web technologies",
    creator: {
      "@type": "Person",
      name: "Manan Tandon",
      url: "https://www.manantandon.com",
    },
    genre: "Web Development",
    keywords:
      "frontend development, UI design, Next.js, Tailwind CSS, MUI, daily design challenge",
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(creativeWorkJsonLd),
          }}
        />
      </Head>
      <div className="h-screen w-screen bg-[#FFFFFF] overflow-auto">
        <div className="relative">
          {isMobile ? (
            <div className="relative overflow-hidden h-[210px] w-[100%]">
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
            􀈂
          </div>
        </div>
        <div className="my-10 md:my-20">
          <Container maxWidth="lg">
            <Grid2 container>
              <Grid2 size={{ xs: 12, md: 6 }} className="pr-0 md:pr-10">
                <h1 className="text-[20px] md:text-3xl  font-extrabold sfpro">
                  100 Days 100 Frontend Designs
                </h1>
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
                  <a
                    href="https://x.com/4d616e616eT"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
