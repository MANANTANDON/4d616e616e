import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

// Define the BatteryManager type
interface BatteryManager extends EventTarget {
  level: number;
  charging: boolean;
  addEventListener: (
    type: "levelchange" | "chargingchange",
    listener: (this: BatteryManager, ev: Event) => any
  ) => void;
}

declare global {
  interface Navigator {
    getBattery?: () => Promise<BatteryManager>;
  }
}

const useBatteryStatus = () => {
  const [batteryInfo, setBatteryInfo] = useState<{
    level: number | null;
    charging: boolean | null;
  }>({ level: null, charging: null });

  useEffect(() => {
    const getBatteryStatus = async () => {
      if (navigator.getBattery) {
        const battery = await navigator.getBattery(); // Now TypeScript recognizes it

        setBatteryInfo({
          level: Math.round(battery.level * 100),
          charging: battery.charging,
        });

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
