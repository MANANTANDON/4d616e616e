import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const MusicWidget = () => {
  return (
    <>
      <Box sx={{ mt: "30.39px", pt: 2, mx: -1, pl: 2 }}>
        <Box
          sx={{
            height: "130px",
            width: "314px",
            borderRadius: "20px",
            bgcolor: "#71695E",
            p: "16px",
          }}
        >
          <Grid container sx={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={6}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  height: "130px",
                  width: "130px",
                  borderRadius: "7px",
                }}
              >
                <Image
                  src="/images/Thursday.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", flexDirection: "column", gap: 0.7 }}
            >
              <Typography
                sx={{ fontSize: "12px", color: "#ffffff" }}
                className="sfpro"
              >
                NOW PLAYING
              </Typography>
              <Typography
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical",
                  fontWeight: "bold",
                  color: "#ffffff",
                  fontSize: "16px",
                }}
                className="sfpro"
              >
                Lonely Star (Original Explicit)
              </Typography>
              <Typography className="sfpro" sx={{ color: "#ffffff" }}>
                The Weeknd
              </Typography>
              <Box
                sx={{
                  bgcolor: "#90887D",
                  color: "#ffffff",
                  borderRadius: "50px",
                  py: 0.7,
                  px: 1.5,
                  width: "fit-content",
                  display: "flex",
                  gap: 1,
                }}
                className="sfpro"
              >
                <Typography className="sfpro" sx={{ fontSize: "14px" }}>
                  􀊄
                </Typography>
                <Typography className="sfpro" sx={{ fontSize: "14px" }}>
                  Play
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
