import React from "react";
import Head from "next/head";

const Day51 = () => {
  const MENU = ["Lenses", "FAQ", "Contact"];

  const CTAButton = ({ text }) => (
    <button className="text-zinc-100 bg-zinc-400/20 backdrop-blur-lg px-7 py-2 rounded-4xl border border-zinc-100/40 text-xl font-light w-fit">
      {text}
    </button>
  );
  return (
    <>
      <Head>
        <title>Day 51 – Lensmart UI Design | 100 Days of Design</title>

        <meta
          name="description"
          content="Day 51 of 100 Days of Design by Manan Tandon. Lensmart is a modern contact lens UI design focused on clarity, comfort, and seamless user experience."
        />

        <meta
          name="keywords"
          content="Lens UI design, contact lens website, ecommerce UI, frontend design, UI UX inspiration, 100 days design, Manan Tandon"
        />

        <link
          rel="canonical"
          href="https://www.manantandon.com/100designs/day51"
        />

        <meta property="og:title" content="Day 51 – Lensmart UI Design" />
        <meta
          property="og:description"
          content="Modern contact lens UI focused on clarity and comfort."
        />
        <meta property="og:image" content="/images/designs/100days/51.png" />
        <meta
          property="og:url"
          content="https://www.manantandon.com/100designs/day51"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Day 51 – Lensmart UI Design" />
        <meta
          name="twitter:description"
          content="Ecommerce UI design for contact lenses and vision products."
        />
        <meta name="twitter:image" content="/images/designs/100days/51.png" />

        <link rel="icon" href="/4d_logo_one.ico" />
      </Head>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="h-screen w-screen bg-zinc-800 py-[26px] px-[60px] hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day51/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="sfpro-text flex items-center justify-between animate-fadeInDown">
          <h1 className="text-zinc-100 text-xl font-bold">Lensmart</h1>
          <div className="flex gap-7">
            {MENU.map((item, key) => (
              <a
                href=""
                key={key}
                className="text-zinc-100/90 text-xl font-light"
              >
                {item}
              </a>
            ))}
          </div>
          <CTAButton text="Sign up" />
        </div>
        {/* Hero Section */}
        <div className="sfpro-text flex flex-col gap-10 py-[230px] animate-fadeInUp">
          <h1 className="text-[#CBC9CA] text-7xl tracking-tighter">
            Your <span className="text-[#FEFEFE]">Perfect Vision,</span>
            <br />
            Without the Frames
          </h1>
          <p className="text-[#CBC9CA]/90 text-lg">
            Experience crystal clear vision with contact lenses designed for
            all-day
            <br />
            comfort. No dryness, no irritation, just the freedom to live your
            live without
            <br />
            limits.
          </p>
          <CTAButton text="Shop Now" />
        </div>
      </div>
    </>
  );
};

export default Day51;
