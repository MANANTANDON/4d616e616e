import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export const TimeSpentTracker = () => {
  const [timeSpent, setTimeSpent] = useState(0); // Track the time spent on the website
  const [startTime, setStartTime] = useState(null); // Store the time when the user lands on the page

  useEffect(() => {
    // Check if startTime is stored in localStorage
    const storedStartTime = localStorage.getItem("startTime");

    if (storedStartTime) {
      // If startTime is in localStorage, use it
      setStartTime(Number(storedStartTime));
    } else {
      // If no startTime in localStorage, set it and store it in localStorage
      const newStartTime = Date.now();
      setStartTime(newStartTime);
      localStorage.setItem("startTime", newStartTime); // Save to localStorage
    }

    // Cleanup when the component unmounts (user leaves the page)
    return () => {
      if (startTime) {
        const endTime = Date.now();
        const timeOnPage = Math.floor((endTime - startTime) / 1000); // Convert time from milliseconds to seconds
        setTimeSpent(timeOnPage);
        console.log(`User spent ${timeOnPage} seconds on the page.`);
      }
    };
  }, [startTime]);

  useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => {
      if (startTime) {
        const currentTime = Math.floor((Date.now() - startTime) / 1000); // Convert time from milliseconds to seconds
        setTimeSpent(currentTime);
      }
    }, 1000);

    // Cleanup interval when the component unmounts
    return () => clearInterval(interval);
  }, [startTime]);

  return (
    <Typography
      fontSize="14px"
      sx={{
        px: 1,
        "&:hover": {
          bgcolor: "#00000020",
          cursor: "default",
          borderRadius: "5px",
        },
      }}
    >
      Time Spend: {timeSpent} seconds
    </Typography>
  );
};
