import Head from "next/head";
import React, { useRef } from "react";

export default function Day58() {
  const fileRef = useRef(null);
  const MENU = ["HOME", "FEATURES", "RESOURCES", "PRICING"];
  return (
    <>
      <Head>
        <title>Day 58 – Neurix AI UI Design | 100 Days of Design</title>

        <meta
          name="description"
          content="Day 58 of 100 Days of Design by Manan Tandon. Neurix is an AI-powered SaaS UI designed for smarter decision-making, adaptive workflows, and team productivity."
        />

        <meta
          name="keywords"
          content="Neurix AI UI, AI SaaS design, AI dashboard UI, frontend design, UI UX inspiration, 100 days design, Manan Tandon"
        />

        <link
          rel="canonical"
          href="https://www.manantandon.com/100designs/day58"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Day 58 – Neurix AI UI Design" />
        <meta
          property="og:description"
          content="AI-powered SaaS UI for smarter workflows and decision-making."
        />
        <meta property="og:image" content="/images/designs/100days/58.png" />
        <meta
          property="og:url"
          content="https://www.manantandon.com/100designs/day58"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Day 58 – Neurix AI UI Design" />
        <meta
          name="twitter:description"
          content="Modern AI SaaS UI built for teams and productivity."
        />
        <meta name="twitter:image" content="/images/designs/100days/58.png" />

        {/* Favicon */}
        <link rel="icon" href="/4d_logo_one.ico" />
      </Head>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="sfpro-text h-screen w-screen bg-zinc-800 hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day58/bg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between py-8 px-[75px] border-b border-[#D5D5D5]">
          <h1 className="text-lg font-semibold">NEURIX</h1>
          <div className="flex item-center gap-[30px] font-light tracking-tighter ml-20">
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-[30px]">
            <button className="cursor-pointer">Log in</button>
            <button className="bg-[#2F2F2F] text-zinc-100 px-4 py-1.5 rounded-lg cursor-pointer">
              Start Free<span>􀰾</span>
            </button>
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-5 mt-[60px]">
          <h4 className="text-sm tracking-tighter bg-[#D6E3EB] border border-[#D1DCDF] p-1.5 rounded-lg flex items-center gap-3">
            <span className="bg-[#B49DE1] py-1 px-1.5 rounded-md">UPDATE</span>{" "}
            CUSTOMIZABLE AI LOGIC
          </h4>
          <h2 className="text-center text-7xl tracking-tighter">
            AI That Thinks With
            <br /> You, Not For You
          </h2>
          <p className="text-center text-[#585858]">
            Neurix helps team turn scattered data into confident decisions using
            adaptive AI
            <br />
            workflows built for speed, clarity and scale
          </p>
          <div className="bg-linear-to-b from-[#D4E3EA] to-[#BDA2E5] p-3 rounded-xl w-[654px] max-w-[654px]">
            <div className="bg-[#2F2F2F] rounded-lg px-4 py-4">
              <textarea
                placeholder="Ask Neuix anything..."
                rows={4}
                className="text-[#FFFFFF] text-sm w-full outline-0 resize-none"
              />
              <div className="flex items-center justify-between">
                <div className="flex gap-2.5">
                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={fileRef}
                  />
                  <button
                    className="bg-[#3C3C3C] text-zinc-100 border border-[#3F3F3F] px-2.5 py-1 text-sm rounded-lg cursor-pointer"
                    onClick={() => fileRef.current.click()}
                  >
                    􀉣 Attach
                  </button>
                  <select
                    className="bg-[#3C3C3C] text-zinc-100 border border-[#3F3F3F] px-2.5 py-1 text-sm rounded-lg cursor-pointer outline-0"
                    value=""
                  >
                    <option value="">Select Style</option>
                    <option value="1">Style 1</option>
                    <option value="2">Style 2</option>
                  </select>
                </div>
                <button className="bg-zinc-100 px-1.5 py-0.5 rounded-md cursor-pointer">
                  􀄨
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
