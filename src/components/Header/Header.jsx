import { Box, Grid, Typography } from "@mui/material";
import { GetCurrentDayAndTime } from "@/hooks/GetCurrentDayAndTime";
import React from "react";
import { Charging } from "../Misc/Charging";
import { AppleMenu } from "./AppleMenu";
import { WifiMenu } from "./WifiMenu";
import { HeaderTimeCard } from "../Misc/HeaderTimeCard";

export const Header = () => {
  const LeftMenu = ["Finder", "File", "Edit", "View", "Go", "Window", "Help"];
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          mx: -1,
          width: "100%",
          display: { xs: "none", md: "flex" },
          py: 0.4,
        }}
        className="menuGlass"
      >
        <Grid container>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 3,
              pl: 2,
            }}
          >
            <AppleMenu />
            {LeftMenu.map((item, key) => (
              <Typography key={key} className="sfpro" sx={{ fontSize: "14px" }}>
                {item}
              </Typography>
            ))}
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 2,
              pr: 2,
            }}
          >
            <Typography
              className="sfpro"
              sx={{ fontSize: "14px", cursor: "default" }}
            >
              4d616e616e 54616E646F6E
            </Typography>
            {/* Wifi */}
            <WifiMenu />
            {/* Charing */}
            <Charging />
            {/* Time */}
            <Typography className="menuFamily" sx={{ fontSize: "14px" }}>
              <HeaderTimeCard />
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
