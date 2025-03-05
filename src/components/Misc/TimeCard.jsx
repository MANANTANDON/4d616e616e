import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export const TimeCard = () => {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000); // Updates every second, but hours and minutes only change every minute

    return () => clearInterval(interval);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");

    // Convert 24-hour to 12-hour format
    hours = hours % 12 || 12; // Converts 0 to 12 for 12 AM

    return `${hours}:${minutes}`;
  }

  return (
    <Box
      sx={{
        mt: "30.39px",
        mx: -1,
        pt: 2,
        pl: 2,
        display: { xs: "none", md: "flex" },
      }}
    >
      <Box
        sx={{
          height: "160px",
          width: "160px",
          border: "1px solid white",
          borderRadius: "24px",
          bgcolor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Typography className="clockCountry">IND</Typography>
        <Typography className="clockFamily" fontSize="64px">
          {time}
        </Typography>
      </Box>
    </Box>
  );
};
