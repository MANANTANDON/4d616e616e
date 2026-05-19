import React, { useEffect, useRef, useState } from "react";
import { HeaderMenu } from "../HeaderMenu";
import { useMediaQuery } from "@mui/material";

export const WifiMenu = () => {
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest("#wifi-icon")
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className="sfpro-text cursor-default text-[14px] text-zinc-50"
        onClick={handleClick}
        id="wifi-icon"
        aria-controls={open ? "wifi-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        􀙇
      </div>
      {open && (
        <div ref={menuRef} className="absolute z-50 w-[230px]">
          <HeaderMenu>
            <div className="flex flex-col w-full">
              <h4
                className={`${isDarkMode ? "text-zinc-100" : "text-zinc-900"} text-[14px] font-semibold tracking-tight`}
              >
                Known Networks
              </h4>

              <div
                className={`${isDarkMode ? "text-[#FFFFFF90]" : "#00000090"} text-[12px] mt-2 flex items-center justify-between`}
              >
                <div>
                  <span className="bg-[#008BFF] text-zinc-100 py-1 px-1 rounded-[100px] mr-1.5">
                    􀙇
                  </span>
                  4d616e616e-5G
                </div>
                <div>􀎡</div>
              </div>
            </div>
          </HeaderMenu>
        </div>
      )}
    </div>
  );
};
