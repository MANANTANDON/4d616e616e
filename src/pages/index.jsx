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
        <title>
          Manan Tandon (4d616e616e) | React.js & Next.js Frontend Developer
        </title>
        <link rel="canonical" href="https://manantandon.com/" />
        <link rel="icon" href="/4d_logo_one.ico" />

        {/* Primary Meta Tags */}
        <meta
          name="title"
          content="Manan Tandon | Expert React.js & Next.js Frontend Developer"
        />
        <meta
          name="description"
          content="Professional Frontend Developer Manan Tandon specializing in React.js, Next.js, and modern web technologies. Crafting exceptional user experiences with cutting-edge UI/UX design and high-performance web applications."
        />
        <meta
          name="keywords"
          content="React Developer, Next.js Developer, Frontend Developer India, UI/UX Developer, JavaScript Developer, TypeScript Developer, Web App Developer, Portfolio, Manan Tandon, MananTandon, manantandon, 4d616e616e, Full Stack Developer, Modern Web Development"
        />
        <meta name="author" content="Manan Tandon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />

        {/* Language and Locale */}
        <meta name="language" content="English" />
        <meta httpEquiv="Content-Language" content="en" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manantandon.com/" />
        <meta property="og:site_name" content="Manan Tandon Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="Manan Tandon | Expert React.js & Next.js Frontend Developer"
        />
        <meta
          property="og:description"
          content="Professional Frontend Developer specializing in React.js, Next.js, and modern web technologies. Explore innovative UI/UX solutions and high-performance web applications."
        />
        <meta
          property="og:image"
          content="https://manantandon.com/4d_logo_one.png"
        />
        <meta
          property="og:image:alt"
          content="Manan Tandon - Frontend Developer Portfolio"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:secure_url"
          content="https://manantandon.com/4d_logo_one.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@4d616e616eT" />
        <meta name="twitter:creator" content="@4d616e616eT" />
        <meta
          name="twitter:title"
          content="Manan Tandon | Expert React.js & Next.js Frontend Developer"
        />
        <meta
          name="twitter:description"
          content="Professional Frontend Developer specializing in React.js, Next.js, and modern web technologies. Crafting exceptional user experiences with innovative solutions."
        />
        <meta
          name="twitter:image"
          content="https://manantandon.com/4d_logo_one.png"
        />
        <meta
          name="twitter:image:alt"
          content="Manan Tandon - Frontend Developer Portfolio"
        />

        {/* Additional SEO Meta Tags */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* Structured Data for Better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Manan Tandon",
              alternateName: "4d616e616e",
              jobTitle: "Frontend Developer",
              description:
                "Professional Frontend Developer specializing in React.js, Next.js, and modern web technologies",
              url: "https://manantandon.com/",
              image: "https://manantandon.com/4d_logo_one.png",
              sameAs: ["https://twitter.com/4d616e616eT"],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              knowsAbout: [
                "React.js",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Frontend Development",
                "UI/UX Design",
                "Web Development",
              ],
            }),
          }}
        />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Additional Meta for Mobile */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Manan Tandon" />

        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta
          httpEquiv="Referrer-Policy"
          content="strict-origin-when-cross-origin"
        />
      </Head>

      <main>
        <Layout />
      </main>
    </>
  );
}
