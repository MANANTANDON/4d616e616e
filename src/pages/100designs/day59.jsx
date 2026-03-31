import Head from "next/head";
import React from "react";

const Day59 = () => {
  const MENU = ["Demos", "About", "Blog", "Pages", "Contact"];

  const CTAButton = ({ text }) => (
    <button className="bg-[#2D2D2D] text-[#FFFFFF] px-4 py-2 rounded-4xl cursor-pointer sfpro-text">
      {text}
    </button>
  );
  return (
    <>
      <Head>
        <title>Day 59 – Stravo UI Design | 100 Days of Design</title>

        <meta
          name="description"
          content="Day 59 of 100 Days of Design by Manan Tandon. Stravo is a modern SaaS platform UI designed for smarter teams, better collaboration, and productivity."
        />

        <meta
          name="keywords"
          content="Stravo UI, SaaS design, team productivity UI, dashboard design, frontend design, UI UX inspiration, Manan Tandon"
        />

        <link
          rel="canonical"
          href="https://www.manantandon.com/100designs/day59"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Day 59 – Stravo UI Design" />
        <meta
          property="og:description"
          content="Modern SaaS UI for team productivity and collaboration."
        />
        <meta property="og:image" content="/images/designs/100days/59.png" />
        <meta
          property="og:url"
          content="https://www.manantandon.com/100designs/day59"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Day 59 – Stravo UI Design" />
        <meta
          name="twitter:description"
          content="SaaS platform UI design for smarter teams and productivity."
        />
        <meta name="twitter:image" content="/images/designs/100days/59.png" />

        {/* Favicon */}
        <link rel="icon" href="/4d_logo_one.ico" />
      </Head>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div className="hidden lg:block">
        <div className=" bg-[#FEFEFE] flex items-center justify-between pt-[27px] pb-[50px] px-20 sfpro-text">
          <h1 className="text-[#2D2D2D] text-2xl font-semibold">Stravo</h1>
          <div className="flex gap-[50px]">
            {MENU.map((item, key) => (
              <a href="" key={key} className="text-[#2D2D2D]">
                {item}
              </a>
            ))}
          </div>
          <CTAButton text="Get started" />
        </div>
        {/* Hero Section */}
        <div
          className="h-screen w-screen bg-zinc-500 sfpro-text flex flex-col items-center gap-[30px]"
          style={{
            backgroundImage: "url(/images/designs/day59/bg.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-7xl text-[#2D2D2D] text-center font-bold tracking-tight">
            Smarter teams
            <br />
            start with Stravo
          </h2>
          <p className="text-xl text-[#2D2D2D] text-center font-medium">
            A modern platform to manage projects, align teams, <br /> and boost
            productivity - all in one place.
          </p>
          <div className="flex gap-4">
            <CTAButton text="Get Started 􀄫" />
            <button className="border border-[#2D2D2D]/20 text-[#2D2D2D] px-4 py-2 rounded-4xl cursor-pointer sfpro-text bg-[#FEFEFE]">
              {" "}
              Learn More 􀄫
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Day59;
