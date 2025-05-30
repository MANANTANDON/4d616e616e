//REACT IMPORT
import React from "react";

//NEXTJS IMPORTS
import Head from "next/head";

//COMPONENTS IMPORTS
import { Layout } from "@/components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Manan Tandon (4d616e616e)</title>
        <link rel="canonical" href="https://manantandon.com/" />
        <link rel="icon" href="/4d_logo_one.ico" />

        {/* Primary Meta Tags */}
        <meta
          name="title"
          content="Manan Tandon | React.js & Next.js Frontend Developer"
        />
        <meta
          name="description"
          content="Portfolio of Manan Tandon, a professional Frontend Developer specializing in React.js and Next.js. Explore UI/UX innovations, and high-performance applications."
        />
        <meta
          name="keywords"
          content="React Developer, Next.js Developer, Frontend Developer India, UI/UX Portfolio, Web App Developer, Manan Tandon, MananTandon, manantandon"
        />
        <meta name="author" content="Manan Tandon" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manantandon.com/" />
        <meta
          property="og:title"
          content="Manan Tandon | React.js & Next.js Frontend Developer"
        />
        <meta
          property="og:description"
          content="Portfolio of Manan Tandon, a professional Frontend Developer specializing in React.js and Next.js. Explore UI/UX innovations, and high-performance applications."
        />
        <meta
          property="og:image"
          content="https://manantandon.com/4d_logo_one.png"
        />
        <meta property="og:image:alt" content="Portfolio of Manan Tandon" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@4d616e616eT" />
        <meta
          name="twitter:title"
          content="Manan Tandon | React.js & Next.js Frontend Developer"
        />
        <meta
          name="twitter:description"
          content="Portfolio of Manan Tandon, a professional Frontend Developer specializing in React.js and Next.js. Explore UI/UX innovations, and high-performance applications."
        />
        <meta
          name="twitter:image"
          content="https://manantandon.com/4d_logo_one.png"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
      </Head>

      <div>
        <Layout />
      </div>
    </>
  );
}
