import { Box, Container, Grid, Typography } from "@mui/material";
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
        px: "0px !important",
        borderRadius: "10px",
        backdropFilter: "blur(80px)",
        overflow: "hidden",
      }}
    >
      <Grid container>
        <Grid item xs={2} sx={{ p: 1.5 }}>
          <Box sx={{ display: "flex", gap: 1 }}>
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
        </Grid>
        <Grid
          item
          xs={10}
          sx={{
            bgcolor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            borderLeft: "1px solid #EEEEEE",
          }}
        >
          <Box
            sx={{
              bgcolor: "#F6F6F7",
              py: 1.5,
              px: 2,
              display: "flex",
              gap: 2.5,
              borderBottom: "1px solid #EEEEEE",
            }}
          >
            <Typography className="sfpro" sx={{ color: "#B5B5B9" }}>
              􀆉
            </Typography>
            <Typography className="sfpro" sx={{ color: "#B5B5B9" }}>
              􀆊
            </Typography>
            <Typography
              className="sfpro"
              sx={{ fontSize: "14px", fontWeight: "bold" }}
            >
              Projects
            </Typography>
          </Box>
          <Box sx={{ p: 1.5 }}>
            <Typography className="sfpro">
              Manan Tandon: Work In Progress
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
