import { BackspaceRounded } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

export const Keyboard = () => {
  const keyboard = {
    rowOne: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "O"],
    rowTwo: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    rowThird: [
      "Enter",
      "Z",
      "X",
      "C",
      "V",
      "B",
      "N",
      "M",
      <BackspaceRounded fontSize="small" />,
    ],
  };
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ mx: -1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            {keyboard.rowOne?.map((item, key) => (
              <Typography
                key={key}
                sx={{
                  height: "58px",
                  width: "43px",
                  borderRadius: "4px",
                  bgcolor: "#D4D6DA",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              my: "5px",
              mx: 2,
            }}
          >
            {keyboard.rowTwo?.map((item, key) => (
              <Typography
                key={key}
                sx={{
                  height: "58px",
                  width: "43px",
                  borderRadius: "4px",
                  bgcolor: "#D4D6DA",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            {keyboard.rowThird?.map((item, key) => (
              <Typography
                key={key}
                sx={{
                  height: "58px",
                  width: key === 0 ? "63px" : "43px",
                  borderRadius: "4px",
                  bgcolor: "#D4D6DA",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: key === 0 ? "16px" : "20px",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};
