//REACT IMPORT
import React from "react";

//Components
import { Header } from "@/components/Header/Header";
import { TimeCard } from "@/components/Misc/TimeCard";
import { Mobile } from "@/components/Misc/Mobile";
import { Folder } from "../Misc/Folder";
import { Box } from "@mui/material";
import { MusicWidget } from "../Misc/MusicWidget";

//MUI IMPORTS

export const Layout = () => {
  return (
    <>
      <Mobile />
      <Header />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          {/* <TimeCard /> */}
          <MusicWidget />
        </Box>
        <Folder />
      </Box>
    </>
  );
};
