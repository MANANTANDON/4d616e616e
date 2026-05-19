import { useMediaQuery } from "@mui/material";
import React from "react";

export const HeaderMenu = ({ children }) => {
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  return (
    <>
      <div
        className={`relative flex items-center backdrop-blur-xs ${isDarkMode ? "bg-zinc-900/60" : "bg-zinc-100/60"} rounded-[15px] py-[13px] px-3.5 `}
      >
        {children}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="borderGradient"
              x1="0%" // Start X position
              y1="0%" // Start Y position
              x2="100%" // End X position
              y2="100%" // End Y position
            >
              {/* Adjust stopColor values for different colors and opacity */}
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <rect
            x="1"
            y="1"
            width="calc(100% - 2px)"
            height="calc(100% - 2px)"
            rx="13" // Adjust for border radius (same value in rounded-[25px] above)
            ry="13" // Adjust for border radius
            fill="none"
            stroke="url(#borderGradient)"
            strokeWidth="1" // Adjust for border thickness
          />
        </svg>
      </div>
    </>
  );
};
