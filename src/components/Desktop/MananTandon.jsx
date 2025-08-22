import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const MananTandon = ({ setOpen }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "fit-content",
        }}
        onClick={() => setOpen(true)}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            width: "70px",
            height: "40px",
            borderRadius: "3px",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          }}
        >
          <Image
            src="/images/slides/slide1.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
        <Typography className="sfpro" sx={{ fontSize: "12px", mt: 2 }}>
          projects
        </Typography>
      </Box>
    </>
  );
};
