import React from "react";
import { Header } from "../Header/Header";
import { Box } from "@mui/material";
import { MusicWidget } from "../Misc/MusicWidget";
import { Folder } from "../Misc/Folder";
import { Dock } from "./Dock/Dock";
import { NotesWidget } from "../Misc/NotesWidget";

export const Desktop = ({ setShowApp, onShutdown }) => {
  return (
    <>
      <Header setShowApp={setShowApp} onShutdown={onShutdown} />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* <TimeCard /> */}
          <MusicWidget />
          <NotesWidget />
        </Box>
        <Folder />
      </Box>
      {/* Dock */}
      <Dock />
    </>
  );
};
