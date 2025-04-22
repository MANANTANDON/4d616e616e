import { Box } from "@mui/material";
import React from "react";

export const ThreeButton = ({ setOpen }) => {
  return (
    <Box sx={{ display: "flex", gap: 1, p: 1.5 }}>
      <Box
        sx={{
          height: "12px",
          width: "12px",
          bgcolor: "#ED6A5E",
          borderRadius: "50%",
          border: "0.1px solid #00000030",
          "&:hover": {
            bgcolor: "#ED6A5E90",
          },
        }}
        onClick={() => setOpen(false)}
      ></Box>
      <Box
        sx={{
          height: "12px",
          width: "12px",
          bgcolor: "#F5BF4F",
          borderRadius: "50%",
          border: "0.1px solid #00000030",
          "&:hover": {
            bgcolor: "#F5BF4F90",
          },
        }}
      ></Box>
      <Box
        sx={{
          height: "12px",
          width: "12px",
          bgcolor: "#62C755",
          borderRadius: "50%",
          border: "0.1px solid #00000030",
          "&:hover": {
            bgcolor: "#62C75590",
          },
        }}
      ></Box>
    </Box>
  );
};
