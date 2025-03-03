//REACT IMPORT
import React from "react";

//Components
import { Header } from "@/components/Header/Header";

//MUI IMPORTS
import { Box, Typography } from "@mui/material";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Box className="box">
        <Typography className="fontFamily">manan.</Typography>
      </Box>
    </>
  );
};
