import { Box, Typography } from "@mui/material";
import React from "react";
import { MobileHeader } from "../Mobile/MobileHeader";

export const Mobile = () => {
  return (
    <>
      <Box>
        {/* time + Wifi + Signal + battery*/}
        <MobileHeader />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography className="fontFamily" sx={{ px: 2 }}>
            m.
          </Typography>
        </Box>
        <Typography
          sx={{ margin: "auto", width: "fit-content", color: "#fff", mt: 2 }}
        >
          mobile / tab design coming soon.
        </Typography>
      </Box>
    </>
  );
};
