import { BackspaceRounded, TurnLeftRounded } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

export const Keyboard = ({ onKeyClick }) => {
  const keyboard = {
    rowOne: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    rowTwo: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    rowThird: ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"],
  };

  const handleKeyClick = (key) => {
    if (onKeyClick) {
      onKeyClick(key);
    }
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
                onClick={() => handleKeyClick(item)}
                sx={{
                  height: "58px",
                  width: "43px",
                  borderRadius: "4px",
                  bgcolor: "#D4D6DA",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#b8bbc0",
                  },
                  "&:active": {
                    bgcolor: "#a8abb0",
                  },
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
                onClick={() => handleKeyClick(item)}
                sx={{
                  height: "58px",
                  width: "43px",
                  borderRadius: "4px",
                  bgcolor: "#D4D6DA",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#b8bbc0",
                  },
                  "&:active": {
                    bgcolor: "#a8abb0",
                  },
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
                onClick={() => handleKeyClick(item)}
                sx={{
                  height: "58px",
                  width: key === 0 ? "63px" : "43px",
                  borderRadius: "4px",
                  bgcolor: item === "ENTER" ? "#0086FD" : "#D4D6DA",
                  color: item === "ENTER" ? "#FFFFFF" : "#000000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: key === 0 ? "12px" : "20px",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#b8bbc0",
                  },
                  "&:active": {
                    bgcolor: "#a8abb0",
                  },
                }}
              >
                {item === "BACKSPACE" ? (
                  <BackspaceRounded fontSize="small" />
                ) : item === "ENTER" ? (
                  <TurnLeftRounded sx={{ transform: "rotate(180deg)" }} />
                ) : (
                  item
                )}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};
