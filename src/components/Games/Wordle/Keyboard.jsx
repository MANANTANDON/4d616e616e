import { Box, Button } from "@mui/material";
import { Backspace } from "@mui/icons-material";
import React from "react";

export const Keyboard = ({ onKeyClick }) => {
  const keyboardRows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"],
  ];

  const handleKeyClick = (key) => {
    if (onKeyClick) {
      onKeyClick(key);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        alignItems: "center",
        mt: 2,
      }}
    >
      {keyboardRows.map((row, rowIndex) => (
        <Box
          key={rowIndex}
          sx={{
            display: "flex",
            gap: 0.5,
            justifyContent: "center",
          }}
        >
          {row.map((key) => (
            <Button
              key={key}
              onClick={() => handleKeyClick(key)}
              sx={{
                minWidth:
                  key === "ENTER" || key === "BACKSPACE" ? "60px" : "40px",
                height: "48px",
                backgroundColor: "#d4d6da",
                color: "#000",
                fontSize:
                  key === "ENTER" || key === "BACKSPACE" ? "12px" : "16px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#b8bbc0",
                },
                "&:active": {
                  backgroundColor: "#a8abb0",
                },
                textTransform: "none",
              }}
              className="sfpro"
            >
              {key === "BACKSPACE" ? <Backspace fontSize="small" /> : key}
            </Button>
          ))}
        </Box>
      ))}
    </Box>
  );
};
