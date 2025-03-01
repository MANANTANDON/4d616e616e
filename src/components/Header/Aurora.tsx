import { Box, Typography } from "@mui/material";
import React from "react";

export const Aurora: React.FC = () => {
  return (
    <>
      <Box sx={{ position: "relative", mx: -1 }}>
        <div className="container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div style={{}} className="filterBox">
          <Typography
            className="fontFamily"
            fontSize={{ xs: "32px", md: "62px" }}
            fontWeight="bold"
          >
            manan.
          </Typography>
        </div>
      </Box>
    </>
  );
};
