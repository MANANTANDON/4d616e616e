import { useMediaQuery } from "@mui/material";
import React from "react";

export const HeaderAppleMenu = ({ children }) => {
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  return (
    <>
      <div
        className={`relative 
          flex
          items-center
          backdrop-blur-xs
          ${isDarkMode ? "bg-zinc-900/60" : "bg-zinc-100/60"} 
          border-[0.4px] ${isDarkMode ? "border-zinc-500" : "border-zinc-400"}
          rounded-[11px]
          py-1.5
          px-1.5
          shadow-[0px_4px_16px_rgba(17,17,26,0.1),0px_8px_24px_rgba(17,17,26,0.1),0px_16px_56px_rgba(17,17,26,0.1)]`}
      >
        {children}
      </div>
    </>
  );
};
