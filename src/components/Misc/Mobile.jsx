import { Box } from "@mui/material";
import React from "react";
import { MobileHeader } from "../Mobile/MobileHeader";
import { MobileHome } from "../Mobile/MobileHome";

export const Mobile = () => {
  return (
    <>
      <Box sx={{ height: "100dvh" }} className="iphone-screen-blur">
        {/* time + Wifi + Signal + battery*/}
        <MobileHeader />
        <MobileHome />
      </Box>
    </>
  );
};
