import { Wordle } from "@/components/Games/Wordle";
import { Box } from "@mui/material";
import React from "react";

const Index = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          height: "100vh",
          m: -1,
          overflow: "scroll",
        }}
      >
        <Wordle />
      </Box>
    </>
  );
};

export default Index;
