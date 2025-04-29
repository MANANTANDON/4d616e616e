import { Box } from "@mui/material";
import React from "react";
import { MobileHeader } from "../Mobile/MobileHeader";
import { MusicWidgetMobile } from "../Mobile/MusicWidgetMobile";
import { Projects } from "../Mobile/Projects";
import { Dock } from "../Desktop/Dock/Dock";
import { MobileDock } from "../Mobile/MobileDock";

export const Mobile = () => {
  return (
    <>
      <Box sx={{ height: "100vh", m: -1 }} className="iphone-screen-blur">
        {/* time + Wifi + Signal + battery*/}
        <MobileHeader />
        <MusicWidgetMobile />
        <Projects />
        <MobileDock />
      </Box>
    </>
  );
};
