import { useCurrentMobileTime } from "@/hooks/useCurrentMobileTime";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Charging } from "../Misc/Charging";
import { MobileCharging } from "../Misc/MobileCharging";

export const MobileHeader = () => {
  const currentTime = useCurrentMobileTime();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pt: 2,
        }}
      >
        <Box sx={{ ml: 2.5 }}>
          <Typography
            className="sfpro"
            sx={{ color: "#FFFFFF", fontWeight: "bolder" }}
          >
            {currentTime}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mr: 1.4 }}>
          {/* Signal Icon*/}
          <Typography
            className="sfpro"
            sx={{ color: "#FFFFFF", fontSize: "14px" }}
          >
            􀭧
          </Typography>
          {/*Wifi Icon*/}
          <Typography
            className="sfpro"
            sx={{ color: "#FFFFFF", fontSize: "14px" }}
          >
            􀙇
          </Typography>
          {/*Battery Icon*/}
          <MobileCharging />
        </Box>
      </Box>
    </>
  );
};
