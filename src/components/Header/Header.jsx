import { Apple, WifiRounded } from "@mui/icons-material";
import { Box, Divider, Grid, Menu, MenuItem, Typography } from "@mui/material";
import { GetCurrentDayAndTime } from "@/hooks/GetCurrentDayAndTime";
import React, { useState } from "react";
import { Charging } from "../Misc/Charging";
import { AppleMenu } from "./AppleMenu";

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
              <Typography key={key} className="menuFamily">
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
              gap: 3,
              pr: 2,
            }}
          >
            <Charging />
            <WifiRounded fontSize="small" sx={{ color: "black" }} />

            <Typography className="menuFamily">
              {GetCurrentDayAndTime()}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
