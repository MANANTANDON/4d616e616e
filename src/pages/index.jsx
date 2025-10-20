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
          Manan Tandon (4d616e616e) | Expert React.js & Next.js Frontend
          Developer
        </title>
        <link rel="canonical" href="https://www.manantandon.com/" />
        <link rel="icon" href="/4d_logo_one.ico" />
        <link rel="apple-touch-icon" href="/4d_logo_one.png" />
        <link rel="shortcut icon" href="/4d_logo_one.ico" />

        {/* Primary Meta Tags */}
        <meta
          name="title"
          content="Manan Tandon | Expert React.js & Next.js Frontend Developer"
        />
        <meta
          name="description"
          content="Professional Frontend Developer Manan Tandon specializing in React.js, Next.js, TypeScript, and modern web technologies. Creating high-performance web applications with exceptional UI/UX design. Available for freelance projects and collaborations."
        />
        <meta
          name="keywords"
          content="Manan Tandon, 4d616e616e, React Developer, Next.js Developer, Frontend Developer, TypeScript Developer, JavaScript Expert, UI/UX Developer, Web Developer India, Freelance Developer, Full Stack Developer, Modern Web Development, React Portfolio, Next.js Portfolio"
        />
        <meta name="author" content="Manan Tandon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />

        {/* Language and Locale */}
        <meta name="language" content="English" />
        <meta httpEquiv="Content-Language" content="en" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.manantandon.com/" />
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
          content="https://www.manantandon.com/4d_logo_one.png"
        />
        <meta
          property="og:image:alt"
          content="Manan Tandon - Frontend Developer Portfolio Logo"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:secure_url"
          content="https://www.manantandon.com/4d_logo_one.png"
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
          content="https://www.manantandon.com/4d_logo_one.png"
        />
        <meta
          name="twitter:image:alt"
          content="Manan Tandon - Frontend Developer Portfolio Logo"
        />

        {/* Additional SEO Meta Tags */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="google" content="nositelinkssearchbox" />

        {/* Geographic and Contact Information */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="contact" content="manantandon@gmail.com" />

        {/* Structured Data for Better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Manan Tandon",
              alternateName: "4d616e616e",
              email: "manantandon@gmail.com",
              jobTitle: "Frontend Developer",
              description:
                "Professional Frontend Developer specializing in React.js, Next.js, TypeScript, and modern web technologies",
              url: "https://www.manantandon.com/",
              image: "https://www.manantandon.com/4d_logo_one.png",
              sameAs: [
                "https://x.com/4d616e616eT",
                "https://github.com/MANANTANDON",
                "https://www.linkedin.com/in/manan-t-663472146/",
                "https://www.instagram.com/4d616e616e/",
              ],
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
                "Responsive Design",
                "Performance Optimization",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
            }),
          }}
        />

        {/* Breadcrumb Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.manantandon.com/",
                },
              ],
            }),
          }}
        />

        {/* WebSite Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Manan Tandon Portfolio",
              alternateName: "4d616e616e Portfolio",
              url: "https://www.manantandon.com/",
              description:
                "Professional Frontend Developer Portfolio showcasing React.js and Next.js projects",
              author: {
                "@type": "Person",
                name: "Manan Tandon",
              },
            }),
          }}
        />

        {/* Professional Service Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Manan Tandon - Frontend Development Services",
              image: "https://www.manantandon.com/4d_logo_one.png",
              description:
                "Professional Frontend Development services specializing in React.js, Next.js, and modern web technologies",
              url: "https://www.manantandon.com/",
              email: "manantandon@gmail.com",
              priceRange: "$$",
              areaServed: {
                "@type": "Country",
                name: "Worldwide",
              },
              serviceType: [
                "Frontend Development",
                "React Development",
                "Next.js Development",
                "UI/UX Design",
                "Web Application Development",
              ],
            }),
          }}
        />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Additional Meta for Mobile */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Manan Tandon" />
        <meta name="application-name" content="Manan Tandon Portfolio" />

        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta
          httpEquiv="Referrer-Policy"
          content="strict-origin-when-cross-origin"
        />
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />

        {/* Accessibility */}
        <meta name="color-scheme" content="dark light" />
      </Head>

      <main>
        <Layout />
      </main>
    </>
  );
}

//4d616e616e
