import { Box, Modal, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { ProjectsModal } from "../Modals/ProjectsModal";

const style = {
  bgcolor: "transparent",
  boxShadow: 24,
  height: "100vh",
  position: "relative",
};

export const Folder = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    console.log("BEFORE");
    setModalOpen(false);
    console.log("AFTER");
  };

  return (
    <>
      <Box
        sx={{ width: "fit-content", mt: "30.39px", pt: 2, pr: 2 }}
        onClick={handleModalOpen} // Open the modal when clicked
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            height: "70px",
            width: "80px",
          }}
        >
          <Image
            src={"/images/folder.png"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
        <Typography
          sx={{
            color: "#ffffff",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            textAlign: "center",
            fontSize: "13px",
            mt: 1,
          }}
          className="sfpro"
        >
          Projects
        </Typography>
      </Box>
      <Modal
        open={modalOpen}
        onClose={handleModalClose} // Close modal when clicking outside or on close
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
          <ProjectsModal handleModalClose={handleModalClose} />
        </Box>
      </Modal>
    </>
  );
};
