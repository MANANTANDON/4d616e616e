import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Charging } from "../Misc/Charging";
import { AppleMenu } from "./AppleMenu";
import { WifiMenu } from "./WifiMenu";
import { HeaderTimeCard } from "../Misc/HeaderTimeCard";
// import { TimeSpentTracker } from "../Misc/TimeSpendTracker";

export const Header = ({ setShowApp, onShutdown }) => {
  const LeftMenu = ["Finder", "File", "Edit", "View", "Go", "Window", "Help"];
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          display: { xs: "none", md: "flex" },
          py: 0.4,
        }}
        className="menuGlass w-screen"
      >
        <Grid container>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              pl: 0.5,
            }}
          >
            <AppleMenu setShowApp={setShowApp} onShutdown={onShutdown} />
            {LeftMenu.map((item, key) => (
              <Typography
                key={key}
                className="sfpro"
                sx={{
                  fontSize: "14px",
                  px: 1.5,
                  "&:hover": {
                    bgcolor: "#00000020",
                    cursor: "default",
                    borderRadius: "5px",
                  },
                }}
              >
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
              pr: 2,
            }}
          >
            {/* <TimeSpentTracker /> */}
            <Typography
              className="sfpro"
              sx={{
                fontSize: "14px",
                px: 1,
                "&:hover": {
                  bgcolor: "#00000020",
                  cursor: "default",
                  borderRadius: "5px",
                },
              }}
            >
              4d616e616e 54616E646F6E
            </Typography>
            {/* Wifi */}
            <WifiMenu />
            {/* Charing */}
            <Charging />
            {/* Time */}
            <Typography
              className="menuFamily"
              sx={{
                fontSize: "14px",
                px: 1,
                "&:hover": {
                  bgcolor: "#00000020",
                  cursor: "default",
                  borderRadius: "5px",
                },
              }}
            >
              <HeaderTimeCard />
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
