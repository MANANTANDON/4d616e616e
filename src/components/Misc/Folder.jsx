"use client";
import { Box, Modal, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { ProjectsModal } from "../Modals/ProjectsModal";

const modalStyle = {
  bgcolor: "transparent",
  boxShadow: 24,
  position: "absolute",
  width: "100%",
  height: "100%",
  m: -1,
  inset: 0,
  pointerEvents: "none", // Allow clicks to pass through
};

const modalContentStyle = {
  pointerEvents: "auto", // Re-enable pointer events for the modal content
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
      left: "-220px",
      onClick: handleModalOpen,
    },
    {
      type: "file",
      src: "/images/resume.png",
      iconHeight: "80px",
      iconWidth: "57px",
      name: "Resume",
      description: "You can check my resume",
      left: "-220px",
      href: "/resume.pdf",
    },
  ];

  const IconComponent = ({ icon }) => {
    const content = (
      <>
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
        <Typography
          sx={{
            color: "#ffffff",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            textAlign: "center",
            fontSize: "13px",
            mt: icon.type === "folder" ? 1 : 0,
          }}
          className="sfpro"
        >
          {icon.name}
        </Typography>
      </>
    );

    return (
      <Box sx={{ position: "relative" }}>
        {icon.type === "file" ? (
          <a href={icon.href} target="_blank" rel="noopener noreferrer">
            {content}
          </a>
        ) : (
          <div onClick={icon.onClick}>{content}</div>
        )}
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

  console.log(modalOpen, "MODEL OPEN");

  return (
    <>
      <Box
        sx={{
          width: "fit-content",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {desktopIcons.map((icon, index) => (
          <IconComponent key={index} icon={icon} />
        ))}
      </Box>

      {modalOpen && (
        <Box sx={modalStyle}>
          <Box sx={modalContentStyle}>
            <ProjectsModal handleModalClose={handleModalClose} />
          </Box>
        </Box>
      )}
    </>
  );
};
