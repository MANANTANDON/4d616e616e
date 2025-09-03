import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { WordleDesign } from "./Wordle/WordleDesign";

export const Wordle = () => {
  return (
    <>
      <Box
        sx={{
          borderBottom: "1.5px solid #E8E8E8",
          display: "flex",
          alignItems: "center",
          gap: 1,
          py: 1,
        }}
      >
        {/* Header for Wordle */}
        <Image
          src="/images/games/snowchild-wordle.webp"
          layout="intrinsic"
          height={40}
          width={40}
        />
        <Typography
          className="sfpro"
          sx={{ fontSize: { xs: "18px", md: "22px" }, fontWeight: 700 }}
        >
          Snowchild Wordle
        </Typography>
      </Box>
      <WordleDesign />
    </>
  );
};
