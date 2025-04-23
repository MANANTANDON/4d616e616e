import { useCurrentMobileTime } from "@/hooks/useCurrentMobileTime";
import { Box, Typography } from "@mui/material";
import React from "react";

export const MobileHeader = () => {
  const currentTime = useCurrentMobileTime();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            className="sfpro"
            sx={{ color: "#FFFFFF", fontWeight: "bolder" }}
          >
            {currentTime}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.2 }}>
          {/* Signal Icon*/}
          <Typography className="sfpro" sx={{ color: "#FFFFFF" }}>
            􀭧
          </Typography>
          {/*Wifi Icon*/}
          <Typography className="sfpro" sx={{ color: "#FFFFFF" }}>
            􀙇
          </Typography>
          {/*Battery Icon*/}
          <Typography className="sfpro" sx={{ color: "#FFFFFF" }}>
            􀛨
          </Typography>
        </Box>
      </Box>
    </>
  );
};
