import { Box, Menu, Typography } from "@mui/material";
import React, { useState } from "react";
const styleTwo = {
  color: "#ffffff",
  px: 1,
  fontSize: "14px",
  "&:hover": {
    bgcolor: "rgb(73,119,220)",
    borderRadius: "4px",
    cursor: "default",
  },
};

export const WifiMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModalOpen = () => {
    handleClose();
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      <Typography
        className="sfpro"
        sx={{ cursor: "default", fontSize: "14px" }}
        onClick={handleClick}
        id="wifi-icon"
        aria-controls={open ? "wifi-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        􀙇
      </Typography>
      <Menu
        id="wifi-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "wifi-icon",
        }}
        PaperProps={{
          sx: {
            mt: "4px",
            ml: "5px",
            py: "0px !important ",
            width: "230px",
            bgcolor: "rgba( 0, 0, 0, 0.5 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 20px )",
            border: "1px solid rgba( 255, 255, 255, 0.3 )",
            borderRadius: "7px",
          },
        }}
        sx={{
          "& .MuiList-root.MuiMenu-list": {
            paddingTop: 0,
            paddingBottom: 0,
          },
        }}
      >
        <Box
          sx={{
            p: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
              alignItems: "center",
            }}
          >
            {/*wifi*/}
            <Typography
              className="sfpro"
              sx={{
                color: "#fff",
                bgcolor: "#3B82F7",
                width: "fit-content",
                p: 0.5,
                fontSize: "14px",
                height: "20px",
                width: "20px",
                borderRadius: "50px",
              }}
            >
              􀙇
            </Typography>
            <Typography
              className="sfpro"
              sx={{ fontSize: "14px", color: "#CECCCF" }}
            >
              4d616e616e
            </Typography>
          </Box>
          {/*lock.fill*/}
          <Typography
            className="sfpro"
            sx={{ color: "#CECCCF", fontSize: "14px" }}
          >
            􀎡
          </Typography>
        </Box>
      </Menu>
    </>
  );
};
