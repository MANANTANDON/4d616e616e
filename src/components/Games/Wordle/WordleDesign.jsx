import { Box, Modal, Typography } from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";
import fiveLetterWords from "@/utils/five_letter_words.json";
import { WinLoseModal } from "./WinLoseModal";

export const WordleDesign = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    width: "100%",
    height: "100%",
    outline: "none",
    bgcolor: "#FFFFFF",
    borderRadius: "5px",
    overflow: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const ROWS = 6;
  const COLS = 5;
  const [todaysWord, setTodaysWord] = useState("");
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
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

  // Function to get random word from the word list
  const getRandomWord = useCallback(() => {
    if (fiveLetterWords?.five_letter_words?.length > 0) {
      const randomIndex = Math.floor(
        Math.random() * fiveLetterWords.five_letter_words.length
      );
      return fiveLetterWords.five_letter_words[randomIndex].toUpperCase();
    }
    return "ALOHA"; // Fallback word
  }, []);

  // Initialize today's word on component mount
  useEffect(() => {
    setTodaysWord(getRandomWord());
  }, [getRandomWord]);

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

      // Check if the word is guessed correctly
      if (guess === todaysWord) {
        setGameWon(true);
        setTimeout(() => setOpen(true), 3000);
      } else if (row === ROWS - 1) {
        // If this was the last row and word wasn't guessed, game is lost
        setGameLost(true);
        setTimeout(() => setOpen(true), 3000);
      }
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

  // Function to get border color for each cell
  const getBorderColor = (rowIndex, colIndex) => {
    const color = rowColors[rowIndex][colIndex];
    const hasLetter = board[rowIndex][colIndex] !== "";

    switch (color) {
      case "green":
        return "#6AAA64";
      case "yellow":
        return "#C9B458";
      case "grey":
        return "#787C7E";
      default:
        return hasLetter ? "#080808" : "#D4D6DA";
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
      // if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "r") {
      //   return; // Allow default browser refresh behavior
      // }

      // Don't allow input if game is won or lost
      if (gameWon || gameLost) {
        return;
      }

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

          // Move to next row if current row is complete and game is not won
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
    [currentRow, currentCol, checkWord, gameWon, gameLost]
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

  console.log(todaysWord, "=======================");

  return (
    <>
      <Box sx={{ py: 2 }}>
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
                    border: `2px solid ${getBorderColor(rowIndex, colIndex)}`,
                    height: "52px",
                    width: "52px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
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

        {(gameLost || gameWon) && (
          <Box
            sx={{
              textAlign: "center",
              mt: 3,
              fontSize: "18px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="sfpro"
          >
            <Box
              sx={{
                border: "1.3px solid #e8e8e8",
                width: "fit-content",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                p: 2,
                borderRadius: "10px",
              }}
            >
              <Typography>Today's Word</Typography>
              <Typography
                sx={{
                  bgcolor: "#397E32",
                  px: 1.5,
                  py: 1,
                  color: "#FFFFFF",
                  borderRadius: "5px",
                }}
              >
                {todaysWord}
              </Typography>
            </Box>
          </Box>
        )}

        {/* Instructions */}
        <Box sx={{ textAlign: "center", mt: 3, color: "#666" }}>
          {!gameWon && !gameLost && (
            <>
              <p>Type letters to fill the grid</p>
              <p>Press BACKSPACE to delete</p>
              <p>Press ENTER to submit row</p>
            </>
          )}
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.2)", // 0.2% opacity
            },
          },
        }}
      >
        <Box sx={style}>
          <WinLoseModal
            gameLost={gameLost}
            gameWon={gameWon}
            setOpen={setOpen}
          />
        </Box>
      </Modal>
    </>
  );
};
