import { Tooltip, Typography } from "@mui/material";
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

export const MobileCharging = () => {
  const { level, charging } = useBatteryStatus();

  return (
    <div>
      {level !== null ? (
        <>
          <Typography
            className="sfpro"
            sx={{
              fontSize: "16px",
              color: "#FFFFFF",
            }}
          >
            {charging
              ? "􀢋"
              : level <= 25
              ? "􀛩"
              : level <= 50
              ? "􀺶"
              : level <= 75
              ? "􀺸"
              : "􀛨"}
          </Typography>
        </>
      ) : (
        <Tooltip arrow title="Real Time Battery does not supports Safari.">
          <Typography
            className="sfpro"
            sx={{
              fontSize: "16px",
              color: "#FFFFFF",
            }}
          >
            􀛨
          </Typography>
        </Tooltip>
      )}
    </div>
  );
};
