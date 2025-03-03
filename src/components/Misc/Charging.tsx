import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const useBatteryStatus = () => {
  const [batteryInfo, setBatteryInfo] = useState<{
    level: number | null;
    charging: boolean | null;
  }>({ level: null, charging: null });

  useEffect(() => {
    const getBatteryStatus = async () => {
      if ("getBattery" in navigator) {
        const battery = await (navigator as any).getBattery(); // Type assertion

        setBatteryInfo({
          level: Math.round(battery.level * 100), // Convert decimal to percentage
          charging: battery.charging, // True/False
        });

        // Update when battery level or charging state changes
        battery.addEventListener("levelchange", () =>
          setBatteryInfo((prev) => ({
            ...prev,
            level: Math.round(battery.level * 100),
          }))
        );
        battery.addEventListener("chargingchange", () =>
          setBatteryInfo((prev) => ({ ...prev, charging: battery.charging }))
        );
      }
    };

    getBatteryStatus();
  }, []);

  return batteryInfo;
};

export const Charging: React.FC = () => {
  const { level, charging } = useBatteryStatus();

  return (
    <div>
      {level !== null ? (
        <Typography className="menuFamily">
          {level}% {charging ? "Charging" : "Discharging"}
        </Typography>
      ) : (
        <Typography>Battery info not available</Typography>
      )}
    </div>
  );
};
