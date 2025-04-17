import { Box, Container, Grid, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { ProjectSlides } from "../Project/ProjectSlides";

export const ProjectsFileModal = ({ setOpen }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "absolute",
        top: "30px",
        bottom: 0,
        right: 0,
        left: 0,
        bgcolor: "#ffffff90",
        px: "0px !important",
        borderRadius: "10px",
        backdropFilter: "blur(80px)",
        overflow: "hidden",
        boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;",
      }}
    >
      <Grid container>
        <Grid item xs={1.7}>
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
          <Box sx={{ my: 2.5 }}>
            <ProjectSlides />
          </Box>
        </Grid>
        <Grid
          item
          xs={10.3}
          sx={{
            bgcolor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            borderLeft: "1px solid #EEEEEE",
            height: "100vh",
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
            <Typography
              className="sfpro"
              sx={{ fontSize: "14px", fontWeight: "bold" }}
            >
              Projects
            </Typography>
          </Box>
          <Box sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "fit-content",
              }}
            >
              <Typography className="sfpro">
                Project Keynote is in Progress :) (4d616e616e)
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
