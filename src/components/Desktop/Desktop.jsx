import React from "react";
import { Header } from "../Header/Header";
import { Box } from "@mui/material";
import { MusicWidget } from "../Misc/MusicWidget";
import { Folder } from "../Misc/Folder";
import { Dock } from "./Dock/Dock";

export const Desktop = () => {
  return (
    <>
      <Header />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          {/* <TimeCard /> */}
          <MusicWidget />
        </Box>
        <Folder />
      </Box>
      {/* Dock */}
      <Dock />
    </>
  );
};
