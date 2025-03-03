import React, { ReactNode } from "react";
import { Header } from "../Header/Header";
import { Box } from "@mui/material";

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1000, // Ensure it's above other elements
          backgroundColor: "white", // Prevents transparency issues
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Optional for better UI
        }}
      >
        <Header />
      </Box>
      {children}
    </>
  );
};
