import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";

export const ProjectsModal = ({ handleModalClose }) => {
  const [maxWidth, setMaxWidth] = useState("md");

  const handleWidth = () => {
    maxWidth === "lg" ? setMaxWidth("md") : setMaxWidth("lg");
  };
  return (
    <Container
      maxWidth={maxWidth}
      sx={{
        position: "absolute",
        position: "absolute",
        top: "15%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "#ffffff90",
        px: "10px !important",
        p: 1.5,
        borderRadius: "12px",
        backdropFilter: "blur(80px)",
      }}
    >
      <Box sx={{ display: "flex", gap: 0.5 }}>
        <Box
          sx={{
            height: "12px",
            width: "12px",
            bgcolor: "#ED6A5E",
            borderRadius: "50%",
            "&:hover": {
              bgcolor: "#ED6A5E90",
            },
          }}
          onClick={handleModalClose}
        ></Box>
        <Box
          sx={{
            height: "12px",
            width: "12px",
            bgcolor: "#54504E",
            borderRadius: "50%",
          }}
          onClick={handleWidth}
        ></Box>
        <Box
          sx={{
            height: "12px",
            width: "12px",
            bgcolor: "#54504E",
            borderRadius: "50%",
          }}
        ></Box>
      </Box>
      <Typography sx={{ my: 2 }}>Projects Folder</Typography>
    </Container>
  );
};
