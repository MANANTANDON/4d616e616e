"use client";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export default function Test() {
  const containerRef = useRef(null);
  const [pos, setPos] = useState({ x: -300, y: -300 });
  const [visible, setVisible] = useState(false);
  const animRef = useRef({ x: -300, y: -300 });
  const rafRef = useRef(null);
  const RADIUS = 200;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      animRef.current.targetX = e.clientX - rect.left;
      animRef.current.targetY = e.clientY - rect.top;
      setVisible(true);
    };

    const onLeave = () => {
      animRef.current.targetX = -300;
      animRef.current.targetY = -300;
      setVisible(false);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      animRef.current.x = lerp(
        animRef.current.x ?? -300,
        animRef.current.targetX ?? -300,
        0.12,
      );
      animRef.current.y = lerp(
        animRef.current.y ?? -300,
        animRef.current.targetY ?? -300,
        0.12,
      );
      setPos({ x: animRef.current.x, y: animRef.current.y });
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <Head>
        <title>
          Ferrari SF-26 vs SF-25 — Interactive Reveal | Manan Tandon
        </title>
        <meta
          name="description"
          content="Move your cursor to reveal the Ferrari SF-26 hiding beneath the SF-25. An interactive image-mask built with React as the 2026 F1 season kicks off."
        />
        <link rel="canonical" href="https://www.manantandon.com/ferrari" />
        <link rel="icon" href="/4d_logo_one.ico" />

        {/* ── Open Graph ── */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.manantandon.com/ferrari" />
        <meta property="og:site_name" content="Manan Tandon" />
        <meta
          property="og:title"
          content="Ferrari SF-26 vs SF-25 — Interactive Reveal"
        />
        <meta
          property="og:description"
          content="Move your cursor to reveal the Ferrari SF-26 hiding beneath the SF-25. An interactive image-mask built with React as the 2026 F1 season kicks off."
        />
        <meta
          property="og:image"
          content="https://www.manantandon.com/mask.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Ferrari SF-26 and SF-25 cursor reveal interaction"
        />
        <meta property="og:locale" content="en_US" />

        {/* ── Twitter / X ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.manantandon.com/ferrari"
        />
        <meta
          name="twitter:title"
          content="Ferrari SF-26 vs SF-25 — Interactive Reveal"
        />
        <meta
          name="twitter:description"
          content="Move your cursor to reveal the Ferrari SF-25 hiding beneath the SF-26. An interactive image-mask built with React as the 2026 F1 season kicks off."
        />
        <meta
          name="twitter:image"
          content="https://www.manantandon.com/mask.png"
        />
        <meta
          name="twitter:image:alt"
          content="Ferrari SF-26 and SF-25 cursor reveal interaction"
        />

        {/* ── Structured Data (JSON-LD) ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Ferrari SF-26 vs SF-25 — Interactive Reveal",
              description:
                "Move your cursor to reveal the Ferrari SF-25 hiding beneath the SF-26. An interactive image-mask built with React as the 2026 F1 season kicks off.",
              url: "https://www.manantandon.com/ferrari",
              author: {
                "@type": "Person",
                name: "Manan Tandon",
                url: "https://www.manantandon.com",
              },
              image: "https://www.manantandon.com/mask.png",
              inLanguage: "en-US",
            }),
          }}
        />
      </Head>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop screen
        </div>
      </div>
      <div
        ref={containerRef}
        className="relative h-screen w-screen overflow-hidden cursor-none hidden lg:flex"
        style={{
          backgroundImage: "url(/images/sf25.png)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="absolute top-20 left-1/2 -translate-x-1/2 sfpro-text text-zinc-100">
          hover on the image
        </h1>
        <h1 className="absolute top-80 left-1/2 -translate-x-1/2 fr text-6xl font-semibold tracking-tighter text-zinc-100">
          <i>Ferrari SF 25</i>
        </h1>

        {/* sf25.png revealed by blob */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/sf26.png)",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            clipPath: `circle(${RADIUS}px at ${pos.x}px ${pos.y}px)`,
            transition: "clip-path 0ms",
          }}
        >
          <h1 className="absolute top-80 left-1/2 -translate-x-1/2 fr text-6xl  font-semibold tracking-tighter text-[#D01B2C]">
            <i>Ferrari SF 26</i>
          </h1>
        </div>

        {/* Custom cursor dot */}
        <div
          className="absolute pointer-events-none rounded-full border border-white/30 w-4 h-4"
          style={{
            left: pos.x - 8,
            top: pos.y - 8,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.3s",
            background: "rgba(255,255,255,0.15)",
          }}
        />
      </div>
    </>
  );
}
