import React from "react";
import Head from "next/head";

const Day53 = () => {
  const MENU = ["Home", "Services", "Resources", "Company"];
  const CTAButton = ({ text }) => (
    <button className="bg-[#1D64D7] text-zinc-100 border-3 border-zinc-200 shadow-xl px-4 py-2 rounded-xl cursor-pointer">
      {text}
    </button>
  );
  return (
    <>
      <Head>
        <title>Day 53 – Logiflix Logistics UI | 100 Days of Design</title>

        <meta
          name="description"
          content="Day 53 of 100 Days of Design by Manan Tandon. Logiflix is a modern logistics SaaS UI focused on reliable delivery, efficiency, and business scalability."
        />

        <meta
          name="keywords"
          content="Logistics UI, Logiflix design, SaaS logistics dashboard, frontend design, UI UX inspiration, 100 days design, Manan Tandon"
        />

        <link
          rel="canonical"
          href="https://www.manantandon.com/100designs/day53"
        />

        <meta property="og:title" content="Day 53 – Logiflix UI Design" />
        <meta
          property="og:description"
          content="Modern logistics SaaS UI for efficient and reliable delivery."
        />
        <meta property="og:image" content="/images/designs/100days/53.png" />
        <meta
          property="og:url"
          content="https://www.manantandon.com/100designs/day53"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Day 53 – Logiflix UI Design" />
        <meta
          name="twitter:description"
          content="Logistics SaaS UI design focused on delivery and efficiency."
        />
        <meta name="twitter:image" content="/images/designs/100days/53.png" />

        <link rel="icon" href="/4d_logo_one.ico" />
      </Head>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div className="h-screen w-screen bg-[#FAFAFA]  hidden lg:flex lg:flex-col lg:items-center">
        {/* Header */}
        <div className="sfpro-text flex items-center justify-center py-5">
          <div className=" flex items-center gap-[150px] xl:gap-[211px] bg-[#FFFFFF] py-[11px] px-3 rounded-[18px]">
            <h2 className="font-semibold text-2xl">Logiflix</h2>
            <div className="flex items-center gap-8">
              {MENU.map((item, key) => (
                <a
                  href=""
                  key={key}
                  className="flex items-center justify-center gap-1 font-medium"
                >
                  {item}
                  <span className="text-xs">
                    {(item === "Services" || item === "Resources") && "􀆈"}
                  </span>
                </a>
              ))}
            </div>
            <CTAButton text="Contact Us" />
          </div>
        </div>
        {/* Hero Section */}
        <div className="sfpro-text z-1 flex flex-col justify-center items-center gap-5 mt-[30px]">
          <div className="bg-[#F4F4F4] py-1.5 px-3 rounded-lg border border-zinc-400/20 w-fit flex gap-2">
            <span className="text-[#FFB500]">􀋃</span> Delivered over 900
            operations for 4000+ clients
          </div>
          <h1 className=" font-bold text-7xl border border-amber-100 text-center tracking-tighter">
            Reliable Logistics
            <br />
            Delivered On Time
          </h1>
          <p className="text-center font-medium text-lg/6">
            We move your goods safetly, efficiently, and on
            <br />
            schedule so your business never slows down.
          </p>
          <div className="flex items-center justify-center gap-5">
            <button className="bg-zinc-100 text-zinc-900 border-3 border-[#E1E1E1] shadow-xl px-4 py-2 rounded-xl cursor-pointer">
              Our Free Services
            </button>
            <CTAButton text="Get A Free Quota" />
          </div>
        </div>
        <div
          className="z-0 h-[500px] w-[800px] absolute bottom-0"
          style={{
            backgroundImage: "url(/images/designs/day53/bg.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </>
  );
};

export default Day53;
