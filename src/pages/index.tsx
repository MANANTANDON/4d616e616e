import React from "react";
import { TopContainer } from "@/components/Home/TopContainer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Manan Tandon (4d616e616e)</title>
        <link rel="canonical" href="https://manantandon.com/" />
        <link rel="icon" href="/manan.ico" />
        <meta
          name="description"
          content="Welcome to the official website of Manan Tandon, a skilled Frontend Developer specializing in React.js and Next.js. Explore innovative UI/UX designs, performance-optimized web applications, and cutting-edge development solutions."
        />
        <meta
          name="keywords"
          content="Frontend Developer, React.js Developer, Next.js Developer, UI/UX, Web Development, SEO-friendly Websites, Manan Tandon, MananTandon, manantandon, manan, manan tandon"
        />
        <meta name="author" content="Manan Tandon" />
        <meta property="og:title" content="Manan Tandon (4d616e616e)" />
        <meta
          property="og:description"
          content="Explore the work of Manan Tandon, a highly skilled React.js & Next.js developer specializing in high-performance, SEO-friendly web applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manantandon.com" />
        <meta property="og:image" content="/manan.png" />
        <meta property="og:image:alt" content="Manan Tandon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manan Tandon (4d616e616e)" />
        <meta
          name="twitter:description"
          content="Expert in React.js and Next.js development, delivering high-performance web applications."
        />
      </Head>
      <div>
        <TopContainer />
      </div>
    </>
  );
}
