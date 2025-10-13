"use client";
import { Box, Modal, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { ProjectsModal } from "../Modals/ProjectsModal";

const modalStyle = {
  bgcolor: "transparent",
  boxShadow: 24,
  height: "100vh",
  position: "relative",
};

export const Folder = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const desktopIcons = [
    {
      type: "folder",
      src: "/images/folder.png",
      iconHeight: "70px",
      iconWidth: "80px",
      name: "Projects",
      description: "Click to view my projects.",
      left: "-220px", // Tooltip position
      onClick: handleModalOpen,
    },
    {
      type: "file",
      src: "/images/resume.png",
      iconHeight: "80px",
      iconWidth: "57px",
      name: "Resume",
      description: "You can check my resume",
      left: "-220px", // Tooltip position
      href: "/resume.pdf",
    },
  ];

  const IconComponent = ({ icon }) => {
    const content = (
      <>
        {/* Icon Image Container */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            height: icon.iconHeight,
            width: icon.iconWidth,
            cursor: "pointer",
          }}
        >
          <Image
            src={icon.src}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt={`${icon.name} Icon`}
          />
        </Box>

        {/* Icon Name */}
        <Typography
          sx={{
            color: "#ffffff",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            textAlign: "center",
            fontSize: "13px",
            // Add margin top only for the folder to match original spacing
            mt: icon.type === "folder" ? 1 : 0,
          }}
          className="sfpro"
        >
          {icon.name}
        </Typography>
      </>
    );

    return (
      <Box
        onClick={icon.type === "folder" ? icon.onClick : undefined}
        sx={{ position: "relative" }}
      >
        {/* The content wrapped in an anchor tag for files, or just the content for folders */}
        {icon.type === "file" ? (
          <a href={icon.href} target="_blank" rel="noopener noreferrer">
            {content}
          </a>
        ) : (
          content
        )}

        {/* Tooltip */}
        <Box
          sx={{
            position: "absolute",
            left: icon.left,
            top: "30px",
            bgcolor: "#00000090",
            py: 0.5,
            px: 2,
            borderRadius: "12px",
            pointerEvents: "none",
            border: "1px solid #66666680",
          }}
        >
          <Typography
            sx={{ color: "#FFFFFF", fontSize: "14px", fontWeight: "600" }}
            className="sfpro"
          >
            {icon.description}
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <>
      {/* Main container */}
      <Box
        sx={{
          width: "fit-content",
          mt: "30.39px",
          pt: 2,
          pr: 2,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Render icons from the array */}
        {desktopIcons.map((icon, index) => (
          <IconComponent key={index} icon={icon} />
        ))}
      </Box>

      {/* PROJECTS MODAL */}
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          backdropFilter: "none",
          "& .MuiBackdrop-root": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Box sx={modalStyle}>
          <ProjectsModal handleModalClose={handleModalClose} />
        </Box>
      </Modal>
    </>
  );
};
