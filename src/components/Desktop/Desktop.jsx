import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "../Header/Header";
import { MusicWidget } from "../Misc/MusicWidget";
import { Folder } from "../Misc/Folder";
import { Dock } from "./Dock/Dock";
import { NotesWidget } from "../Misc/NotesWidget";
import { useMediaQuery } from "@mui/material";

export const Desktop = ({ setShowApp, onShutdown }) => {
  const [showSpotlight, setShowSpotlight] = useState(false);
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    const handleKeyDown = (e) => {
      const tag = document.activeElement?.tagName;

      if (tag === "INPUT" || tag === "TEXTAREA") return;

      if (e.key.toLowerCase() === "s") {
        e.preventDefault();
        setShowSpotlight((prev) => !prev);
      }

      if (e.key === "Escape") {
        setShowSpotlight(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Header setShowApp={setShowApp} onShutdown={onShutdown} />

      <div className="flex justify-between px-4 py-6">
        <div className="flex flex-col gap-4">
          <MusicWidget />
          <NotesWidget />
        </div>

        <Folder />
      </div>

      <Dock />

      <AnimatePresence>
        {showSpotlight && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.82,
              y: -40,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              y: -20,
              filter: "blur(8px)",
            }}
            transition={{
              type: "spring",
              stiffness: 550,
              damping: 32,
              mass: 0.55,
            }}
            className={`absolute top-[100px] left-1/2 -translate-x-1/2 w-[640px] max-w-[640px] rounded-full ${isDarkMode ? "bg-zinc-900/60" : "bg-zinc-100/60"} backdrop-blur-3xl shadow-2xl border border-white/30 px-4 py-2 flex items-center gap-2`}
          >
            <span className="text-[26px]">􀊫</span>

            <input
              autoFocus
              placeholder="Spotlight Search"
              className={`w-full bg-transparent text-[26px]/2 outline-none ${isDarkMode ? "text-zinc-100" : "text-zinc-900"}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
