import { Apple, Close, Height } from "@mui/icons-material";
import { Box, Divider, Menu, Modal, Typography } from "@mui/material";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "25%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "rgba( 0, 0, 0, 0.5 )",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter: "blur( 20px )",
  border: "1px solid rgba( 255, 255, 255, 0.3 )",
  boxShadow: 24,
  borderRadius: "12px",
  p: 1,
};
export const AppleMenu = () => {
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
            onClick={handleModalOpen}
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

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          backdropFilter: "none", // Removes blur effect
          "& .MuiBackdrop-root": {
            backgroundColor: "transparent", // Makes backdrop transparent
          },
        }}
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", gap: 0.5 }}>
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
          <Box sx={{ my: 4 }}>
            <Typography
              className="sfpro"
              fontSize="22px"
              textAlign="center"
              fontWeight={800}
              sx={{ color: "white" }}
            >
              Manan Tandon
            </Typography>
            <Typography
              textAlign="center"
              fontSize="12px"
              className="sfpro"
              sx={{ color: "lightgrey" }}
            >
              CEO
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
