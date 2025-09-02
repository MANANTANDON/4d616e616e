import { Box } from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";

export const WordleDesign = () => {
  const ROWS = 6;
  const COLS = 5;
  const [todaysWord, setTodaysWord] = useState("ALOHA");
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [board, setBoard] = useState(
    Array(ROWS)
      .fill()
      .map(() => Array(COLS).fill(""))
  );
  const [rowColors, setRowColors] = useState(
    Array(ROWS)
      .fill()
      .map(() => Array(COLS).fill(""))
  );

  // Function to check word and assign colors
  const checkWord = useCallback(
    (row) => {
      const guess = board[row].join("");
      const colors = Array(COLS).fill("");
      const wordLetterCount = {};

      // Count letters in today's word
      for (let letter of todaysWord) {
        wordLetterCount[letter] = (wordLetterCount[letter] || 0) + 1;
      }

      // First pass: mark exact matches (green)
      for (let i = 0; i < COLS; i++) {
        if (guess[i] === todaysWord[i]) {
          colors[i] = "green";
          wordLetterCount[guess[i]]--;
        }
      }

      // Second pass: mark wrong position (yellow) and not found (grey)
      for (let i = 0; i < COLS; i++) {
        if (colors[i] === "") {
          // Not already marked as green
          if (wordLetterCount[guess[i]] > 0) {
            colors[i] = "yellow";
            wordLetterCount[guess[i]]--;
          } else {
            colors[i] = "grey";
          }
        }
      }

      // Update row colors
      setRowColors((prevColors) => {
        const newColors = [...prevColors];
        newColors[row] = colors;
        return newColors;
      });
    },
    [todaysWord, board]
  );

  // Function to get background color for each cell
  const getCellColor = (rowIndex, colIndex) => {
    const color = rowColors[rowIndex][colIndex];
    switch (color) {
      case "green":
        return "#6AAA64";
      case "yellow":
        return "#C9B458";
      case "grey":
        return "#787C7E";
      default:
        return "transparent";
    }
  };

  // Function to get text color for each cell
  const getTextColor = (rowIndex, colIndex) => {
    const color = rowColors[rowIndex][colIndex];
    return color === "green" || color === "yellow" || color === "grey"
      ? "white"
      : "black";
  };

  const handleKeyPress = useCallback(
    (event) => {
      const key = event.key.toUpperCase();

      // Handle letter input (A-Z)
      if (key >= "A" && key <= "Z" && key.length === 1) {
        if (currentCol < COLS && currentRow < ROWS) {
          setBoard((prevBoard) => {
            const newBoard = [...prevBoard];
            newBoard[currentRow][currentCol] = key;
            return newBoard;
          });
          setCurrentCol((prev) => prev + 1);
        }
      }

      // Handle backspace
      else if (key === "BACKSPACE") {
        if (currentCol > 0) {
          setCurrentCol((prev) => prev - 1);
          setBoard((prevBoard) => {
            const newBoard = [...prevBoard];
            newBoard[currentRow][currentCol - 1] = "";
            return newBoard;
          });
        }
      }

      // Handle enter key
      else if (key === "ENTER") {
        if (currentCol === COLS) {
          // Check the word and assign colors
          checkWord(currentRow);

          // Move to next row if current row is complete
          if (currentRow < ROWS - 1) {
            setCurrentRow((prev) => prev + 1);
            setCurrentCol(0);
          }
        }
      }

      // Prevent default behavior for handled keys
      if (
        (key >= "A" && key <= "Z") ||
        key === "BACKSPACE" ||
        key === "ENTER"
      ) {
        event.preventDefault();
      }
    },
    [currentRow, currentCol, checkWord]
  );

  // Add event listener for keystrokes
  useEffect(() => {
    // Make sure the component can receive focus
    document.addEventListener("keydown", handleKeyPress);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <Box sx={{ py: 5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        {Array.from(Array(ROWS)).map((_, rowIndex) => (
          <Box
            key={rowIndex}
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            {Array.from(Array(COLS)).map((_, colIndex) => (
              <Box
                key={colIndex}
                sx={{
                  border: "2px solid #D4D6DA",
                  height: "52px",
                  width: "52px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  backgroundColor: getCellColor(rowIndex, colIndex),
                  color: getTextColor(rowIndex, colIndex),
                  transition: "all 0.3s ease",
                }}
                className="sfpro"
              >
                {board[rowIndex][colIndex]}
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      {/* Instructions */}
      <Box sx={{ textAlign: "center", mt: 3, color: "#666" }}>
        <p>Type letters to fill the grid</p>
        <p>Press BACKSPACE to delete </p>
        <p>Press ENTER to submit row</p>
      </Box>
    </Box>
  );
};
