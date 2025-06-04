import { Box, Divider, Menu, Modal, Typography } from "@mui/material";
import Image from "next/image";
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
export const AppleMenu = ({ setShowApp }) => {
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
        sx={{
          cursor: "default",
          fontSize: "14px",
          px: 1.5,
          "&:hover": {
            bgcolor: "#00000020",
            cursor: "default",
            borderRadius: "5px",
          },
        }}
        onClick={handleClick}
        id="apple-icon"
        aria-controls={open ? "apple-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        􀣺
      </Typography>
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
            mt: "3px",
            ml: "-10px",
            py: "0px !important ",
            width: "250px",
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
            sx={styleTwo}
            className="simpleFont"
            onClick={handleModalOpen}
          >
            About Manan
          </Typography>
          <Divider sx={{ my: 1, borderColor: "#ffffff50", px: 2 }} />
          <Typography sx={styleTwo} className="simpleFont">
            System Settings...
          </Typography>
          <Typography sx={styleTwo} className="simpleFont">
            App Store
          </Typography>
          <Divider sx={{ my: 1, borderColor: "#ffffff50", px: 2 }} />
          <Typography sx={styleTwo} className="simpleFont">
            Sleep
          </Typography>
          <Typography
            sx={styleTwo}
            className="simpleFont"
            onClick={() => setShowApp(false)}
          >
            Restart...
          </Typography>
          <Typography sx={styleTwo} className="simpleFont">
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
          <Box sx={{ my: 2 }}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                height: "150px",
                width: "106px",
                margin: "auto",
              }}
            >
              <Image
                src="/images/manananimoji.png"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
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
