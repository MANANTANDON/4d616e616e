import { Apple, WifiRounded } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { GetCurrentDayAndTime } from "@/hooks/getCurrentDayAndTime";
import React from "react";
import { Charging } from "@/components/Misc/Charging";

export const Header: React.FC = () => {
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
            <Apple fontSize="small" sx={{ color: "white" }} />
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
            <WifiRounded fontSize="small" sx={{ color: "white" }} />
            <Charging />
            <Typography className="menuFamily">
              {GetCurrentDayAndTime()}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
