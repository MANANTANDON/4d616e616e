import { Wordle } from "@/components/Games/Wordle";
import { HowToPlayModal } from "@/components/Games/Wordle/HowToPlayModal";
import { Box, Modal, useMediaQuery } from "@mui/material";
import React, { useState } from "react";

const Index = () => {
  const isMobile = useMediaQuery("(max-width:500px)");
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    px: 3,
    py: 4,
    width: isMobile ? "80%" : "517px",
    outline: "none",
    bgcolor: "#FFFFFF",
    borderRadius: "5px",
    overflow: "auto",
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.2)", // 0.2% opacity
            },
          },
        }}
      >
        <Box sx={style}>
          <HowToPlayModal setOpen={setOpen} />
        </Box>
      </Modal>
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          height: "100vh",
          m: -1,
          overflow: "auto", // Changed from "scroll" to "auto" for better UX
        }}
      >
        <Wordle />
      </Box>
    </>
  );
};

export default Index;
