"use client";
import { Box, Drawer, Grid2, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DateWidget } from "../Widgets/DateWidget";

export const HeaderTimeCard = () => {
  const [time, setTime] = useState("");
  const [openDrawer, setOpenDrawer] = useState("");

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
    <>
      <Typography
        className="sfpro"
        fontSize="14px"
        onClick={() => setOpenDrawer(true)}
      >
        {time}
      </Typography>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "25%",
            boxShadow: "none",
            bgcolor: "transparent",
            mt: "27.39px",
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Box
          sx={{
            backgroundImage: "radial-gradient(#2E2E2E90, transparent 70%)",
            py: 2,
          }}
        >
          <Grid2 container>
            <Grid2 size={6}>
              <DateWidget />
            </Grid2>
            <Grid2 size={6}></Grid2>
          </Grid2>
        </Box>
      </Drawer>
    </>
  );
};
