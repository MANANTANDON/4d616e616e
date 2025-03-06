import { Apple, WifiRounded } from "@mui/icons-material";
import { Box, Divider, Grid, Menu, MenuItem, Typography } from "@mui/material";
import { GetCurrentDayAndTime } from "@/hooks/GetCurrentDayAndTime";
import React, { useState } from "react";
import { Charging } from "../Misc/Charging";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
            <Apple
              fontSize="small"
              sx={{ color: "black" }}
              id="apple-icon"
              aria-controls={open ? "apple-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
            <Menu
              id="apple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "apple-icon",
              }}
              PaperProps={{
                sx: {
                  mt: "6px",
                  ml: "-10px",
                  py: "0px !important ",
                  width: "300px",
                  bgcolor: "rgba( 0, 0, 0, 0.5 )",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  backdropFilter: "blur( 20px )",
                  border: "1px solid rgba( 255, 255, 255, 0.3 )",
                },
              }}
              sx={{
                "& .MuiList-root.MuiMenu-list": {
                  paddingTop: 0,
                  paddingBottom: 0,
                },
              }}
            >
              <Box sx={{ p: 0.7 }}>
                <Typography
                  sx={{
                    color: "#ffffff",
                    px: 1,
                    "&:hover": {
                      bgcolor: "rgb(73,119,220)",
                      borderRadius: "4px",
                      cursor: "default",
                    },
                  }}
                  className="simpleFont"
                >
                  About Manan
                </Typography>
                <Divider sx={{ my: 1, borderColor: "#ffffff50", px: 2 }} />
                <Typography
                  sx={{
                    color: "#ffffff",
                    px: 1,
                    "&:hover": {
                      bgcolor: "rgb(73,119,220)",
                      borderRadius: "4px",
                      cursor: "default",
                    },
                  }}
                  className="simpleFont"
                >
                  System Settings...
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff",
                    px: 1,
                    "&:hover": {
                      bgcolor: "rgb(73,119,220)",
                      borderRadius: "4px",
                      cursor: "default",
                    },
                  }}
                  className="simpleFont"
                >
                  App Store
                </Typography>
                <Divider sx={{ my: 1, borderColor: "#ffffff50", px: 2 }} />
                <Typography
                  sx={{
                    color: "#ffffff",
                    px: 1,
                    "&:hover": {
                      bgcolor: "rgb(73,119,220)",
                      borderRadius: "4px",
                      cursor: "default",
                    },
                  }}
                  className="simpleFont"
                >
                  Sleep
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff",
                    px: 1,
                    "&:hover": {
                      bgcolor: "rgb(73,119,220)",
                      borderRadius: "4px",
                      cursor: "default",
                    },
                  }}
                  className="simpleFont"
                >
                  Restart...
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff",
                    px: 1,
                    "&:hover": {
                      bgcolor: "rgb(73,119,220)",
                      borderRadius: "4px",
                      cursor: "default",
                    },
                  }}
                  className="simpleFont"
                >
                  Shutdown...
                </Typography>
              </Box>
            </Menu>
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
