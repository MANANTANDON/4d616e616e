import React, { useEffect, useRef, useState } from "react";
import { HeaderMenu } from "../HeaderMenu";
import { useMediaQuery } from "@mui/material";

const useBatteryStatus = () => {
  const [batteryInfo, setBatteryInfo] = useState({
    level: null,
    charging: null,
  });

  useEffect(() => {
    const getBatteryStatus = async () => {
      if (navigator.getBattery) {
        const battery = await navigator.getBattery();

        setBatteryInfo({
          level: Math.round(battery.level * 100),
          charging: battery.charging,
        });

        const updateLevel = () =>
          setBatteryInfo((prev) => ({
            ...prev,
            level: Math.round(battery.level * 100),
          }));
        const updateCharging = () =>
          setBatteryInfo((prev) => ({ ...prev, charging: battery.charging }));

        battery.addEventListener("levelchange", updateLevel);
        battery.addEventListener("chargingchange", updateCharging);

        return () => {
          battery.removeEventListener("levelchange", updateLevel);
          battery.removeEventListener("chargingchange", updateCharging);
        };
      }
    };

    getBatteryStatus();
  }, []);

  return batteryInfo;
};

export const Charging = ({ type }) => {
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const { level, charging } = useBatteryStatus();

  const popupRef = useRef(null);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={popupRef}>
      {level !== null ? (
        <>
          <div
            className="sfpro-text cursor-default text-[14px] text-zinc-50 flex items-center"
            onClick={handleClick}
            id="charging-icon"
            aria-controls={open ? "charging-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {type !== "mobile" && (
              <span style={{ fontSize: "12px" }}>{level}% </span>
            )}
            {charging
              ? "􀢋"
              : level <= 25
                ? "􀛩"
                : level <= 50
                  ? "􀺶"
                  : level <= 75
                    ? "􀺸"
                    : "􀛨"}
          </div>
          {open && (
            <div className="absolute rounded-[15px] w-52 max-w-52 z-100">
              <HeaderMenu>
                <div className="flex flex-col">
                  <h4
                    className={`${isDarkMode ? "text-zinc-100" : "text-zinc-900"} text-[14px] font-semibold tracking-tight`}
                  >
                    Battery
                  </h4>
                  <h4
                    className={`${isDarkMode ? "text-[#FFFFFF90]" : "#00000090"} text-[12px] mt-1.5`}
                  >
                    Power Source: {charging ? "Power Adapter" : "Battery"}
                  </h4>
                </div>
              </HeaderMenu>
            </div>
          )}
        </>
      ) : (
        <div className="relative group w-fit">
          <div className="text-[14px] text-zinc-100 flex items-center px-1 hover:bg-[#00000020] hover:rounded-[5px] cursor-default">
            <span className="text-[12px]">100% </span>
            􀛨
          </div>

          <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 bg-zinc-900/50 backdrop-blur-md border border-zinc-100/10 text-zinc-100 text-[11px] px-2 py-1.5 rounded-[10px] whitespace-nowrap z-50">
            Safari does not supports Real Time Battery.
          </div>
        </div>
      )}
    </div>
  );
};
