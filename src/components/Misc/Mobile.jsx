import { Box, Typography } from "@mui/material";
import React from "react";
import { MobileHeader } from "../Mobile/MobileHeader";
import { MusicWidgetMobile } from "../Mobile/MusicWidgetMobile";
import { Projects } from "../Mobile/Projects";

export const Mobile = () => {
  return (
    <>
      <Box>
        {/* time + Wifi + Signal + battery*/}
        <MobileHeader />
        <MusicWidgetMobile />
        <Projects />
      </Box>
    </>
  );
};
