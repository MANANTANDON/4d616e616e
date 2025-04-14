"use client";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export const HeaderTimeCard = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => setTime(getFormattedTime());
    updateTime();

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  function getFormattedTime() {
    const now = new Date();
    const options = { weekday: "short", month: "short", day: "numeric" };
    const dateStr = now.toLocaleDateString("en-US", options);
    const timeStr = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return `${dateStr} ${timeStr}`;
  }

  if (!time) return null;

  return (
    <Typography className="sfpro" fontSize="14px">
      {time}
    </Typography>
  );
};
