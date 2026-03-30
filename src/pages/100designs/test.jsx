"use client";
import { useEffect, useRef, useState } from "react";

export default function Test() {
  const containerRef = useRef(null);
  const [pos, setPos] = useState({ x: -300, y: -300 });
  const [visible, setVisible] = useState(false);
  const animRef = useRef({ x: -300, y: -300 });
  const rafRef = useRef(null);
  const RADIUS = 180;

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
    <div
      ref={containerRef}
      className="relative h-screen w-screen overflow-hidden cursor-none"
      style={{
        backgroundImage: "url(/images/sf26.png)",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="absolute top-20 left-1/2 -translate-x-1/2 sfpro-text">
        hover on the image
      </h1>
      <h1 className="absolute top-80 left-1/2 -translate-x-1/2 sfpro-text text-6xl  font-bold tracking-tighter text-[#D01B2C]">
        <i>Ferrari SF 26</i>
      </h1>
      {/* sf25.png revealed by blob */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/sf25.png)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          clipPath: `circle(${RADIUS}px at ${pos.x}px ${pos.y}px)`,
          transition: "clip-path 0ms",
        }}
      >
        <h1 className="absolute top-80 left-1/2 -translate-x-1/2 sfpro-text text-6xl font-bold tracking-tighter text-zinc-100">
          <i>Ferrari SF 25</i>
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
  );
}
