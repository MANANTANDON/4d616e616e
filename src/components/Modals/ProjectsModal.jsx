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
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "#ffffff90",
        px: "0px !important",
        borderRadius: "10px",
        backdropFilter: "blur(80px)",
        overflow: "hidden",
        boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;",
      }}
    >
      <Grid container>
        <Grid item xs={2}>
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
              onClick={handleModalClose}
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
              onClick={handleWidth}
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
          <Box
            sx={{
              px: 1,
              my: 2,
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
            }}
          >
            <Typography
              className="sfpro"
              sx={{ fontSize: "12px", color: "#00000070", px: 0.5 }}
            >
              Favorites
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                px: 0.5,
                py: 0.6,
                bgcolor: "#00000015",
                borderRadius: "5px",
                "&:hover": {
                  cursor: "default",
                },
              }}
            >
              <Typography
                className="sfpro"
                sx={{ fontSize: "14px", color: "#0271F1" }}
              >
                􀎞
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>manantandon</Typography>
            </Box>
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
            height: "400px",
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
              <Box
                sx={{
                  width: "70px",
                  height: "40px",
                  bgcolor: "#ffffff",
                  borderRadius: "3px",
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                }}
              ></Box>
              <Typography className="sfpro" sx={{ fontSize: "12px", mt: 2 }}>
                projects
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
