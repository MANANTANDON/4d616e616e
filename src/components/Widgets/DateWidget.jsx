import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export const DateWidget = () => {
  const [dateInfo, setDateInfo] = useState({
    weekday: "",
    month: "",
    day: "",
  });

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();

      setDateInfo({
        weekday: now.toLocaleDateString("en-US", { weekday: "short" }), // Wed
        month: now.toLocaleDateString("en-US", { month: "short" }), // Aug
        day: now.toLocaleDateString("en-US", { day: "numeric" }), // 27
      });
    };

    updateDate();

    // Update at midnight to show correct date
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const msUntilMidnight = tomorrow.getTime() - now.getTime();

    const midnightTimeout = setTimeout(() => {
      updateDate();
      // Then update every 24 hours
      const dailyInterval = setInterval(updateDate, 24 * 60 * 60 * 1000);
      return () => clearInterval(dailyInterval);
    }, msUntilMidnight);

    return () => clearTimeout(midnightTimeout);
  }, []);

  return (
    <>
      <Box
        sx={{
          bgcolor: "#2E2E2E",
          height: "164px",
          width: "100%",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
            pt: 1,
          }}
        >
          <Typography
            className="sfpro"
            sx={{ color: "#FF453A", fontSize: "25px" }}
          >
            {dateInfo.weekday}
          </Typography>
          <Typography
            className="sfpro"
            sx={{ color: "#A1A1A1", fontSize: "25px" }}
          >
            {dateInfo.month}
          </Typography>
        </Box>
        <Typography
          className="sfpro"
          textAlign="center"
          sx={{
            color: "#DFDFDF",
            fontSize: "110px",
            fontWeight: "700",
            lineHeight: "100px",
            mt: 0.5,
          }}
        >
          {dateInfo.day}
        </Typography>
      </Box>
    </>
  );
};
