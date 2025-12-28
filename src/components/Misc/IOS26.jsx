import React from "react";

export const IOS26 = ({ styles, children }) => {
  return (
    <>
      {/* Main container with frosted glass effect */}
      <div
        className={`relative flex items-center backdrop-blur-md bg-zinc-600/10 p-4 rounded-[28px] ${styles}`}
      >
        {/* Text content */}
        {children}

        {/* SVG gradient border */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* 
              Gradient configuration:
              - Change x1, y1, x2, y2 to adjust gradient direction
              - Current: x1="0%" y1="0%" x2="100%" y2="100%" (top-left to bottom-right diagonal)
              - For horizontal: x1="0%" y1="0%" x2="100%" y2="0%"
              - For vertical: x1="0%" y1="0%" x2="0%" y2="100%"
              - For other diagonal: x1="100%" y1="0%" x2="0%" y2="100%"
            */}
            <linearGradient
              id="borderGradient"
              x1="0%" // Start X position
              y1="0%" // Start Y position
              x2="100%" // End X position
              y2="100%" // End Y position
            >
              {/* Adjust stopColor values for different colors and opacity */}
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect
            x="1"
            y="1"
            width="calc(100% - 2px)"
            height="calc(100% - 2px)"
            rx="28" // Adjust for border radius (same value in rounded-[25px] above)
            ry="28" // Adjust for border radius
            fill="none"
            stroke="url(#borderGradient)"
            strokeWidth="0.7" // Adjust for border thickness
          />
        </svg>
      </div>
    </>
  );
};
