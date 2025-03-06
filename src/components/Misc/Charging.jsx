import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

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

export const Charging = () => {
  const { level, charging } = useBatteryStatus();

  return (
    <div>
      {level !== null ? (
        <Typography className="sfpro">
          {level}%{charging ? "􀢋" : "􀺸"}
        </Typography>
      ) : (
        <Typography>Battery info not available</Typography>
      )}
    </div>
  );
};
