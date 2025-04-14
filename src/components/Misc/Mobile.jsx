import { Box, Typography } from "@mui/material";
import React from "react";

export const Mobile = () => {
  return (
    <>
      <Box sx={{ display: { md: "none" } }}>
        <Typography className="fontFamily" sx={{ px: 2 }}>
          m.
        </Typography>
        <Typography
          sx={{ margin: "auto", width: "fit-content", color: "#fff", mt: 2 }}
        >
          mobile / tab design coming soon.
        </Typography>
      </Box>
    </>
  );
};
