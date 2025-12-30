import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import React, { useRef, useState } from "react";

export const MusicWidgetMobile = () => {
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/EnjoyTheShow.mp3" />
      <div
        className={`relative flex items-center backdrop-blur-md bg-zinc-600/10 rounded-[27px] pb-px px-px pt-[0.5px]`}
      >
        <div className="h-[164px] w-full rounded-[27px] p-[18px] flex flex-row gap-3 music-widget-bg-color">
          <div className="shrink-0">
            <Image
              src="/images/enjoytheshow.webp"
              height={128}
              width={128}
              alt="The Weeknd's Thursday"
              className="rounded-[7px]"
            />
          </div>

          <div className="w-full">
            <div
              className={`sfpro-text ${
                isDarkMode ? "text-[#FF0041]" : "text-zinc-50"
              } text-lg flex justify-end`}
            >
              􀑪
            </div>
            <div
              className={`sfpro-text ${
                isDarkMode ? "text-[#FF4C75]" : "text-zinc-50/70"
              } font-medium text-[12px] tracking-[1px]`}
            >
              RECENTLY PLAYED
            </div>
            <div
              className="sfpro-text text-[17px] font-medium text-zinc-50 -my-0.5"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "1",
                WebkitBoxOrient: "vertical",
              }}
            >
              Enjoy The Show
            </div>
            <div className="sfpro-text text-zinc-50/70 font-medium text-base">
              The Weeknd
            </div>
            <div
              className="sfpro-text bg-zinc-100/20 w-fit flex gap-2 py-1 px-3.5 text-zinc-100 rounded-[100px] mt-[9px] cursor-pointer"
              onClick={togglePlayPause}
            >
              <div className="text-[14px]">{isPlaying ? "􀊆" : "􀊄"}</div>
              <div className="text-[14px]">{isPlaying ? "Pause" : "Play"}</div>
            </div>
          </div>
        </div>
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
            rx="27" // Adjust for border radius (same value in rounded-[25px] above)
            ry="27" // Adjust for border radius
            fill="none"
            stroke="url(#borderGradient)"
            strokeWidth="0.7" // Adjust for border thickness
          />
        </svg>
      </div>
    </>
  );
};
