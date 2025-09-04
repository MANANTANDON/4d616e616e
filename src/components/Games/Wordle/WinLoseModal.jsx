import { EmojiEventsRounded, Share, Star } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

export const WinLoseModal = ({ gameLost, gameWon, setOpen }) => {
  const handleShare = async () => {
    try {
      await navigator.share({
        url: window.location.href, // This gets the current page's URL
        title: "I just won the word game!",
        text: "Check out this awesome game and see if you can beat my score!",
      });
    } catch (error) {
      console.error("Error sharing:", error);
      // Fallback to Clipboard API if Web Share is not available
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (gameWon) {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            pt: 5,
            width: "300px",
          }}
        >
          <Box>
            <Box
              sx={{
                width: "fit-content",
                bgcolor: "#397E32",
                pt: 1.5,
                px: 1.5,
                pb: 1,
                borderRadius: "5px",
              }}
            >
              <Star fontSize="large" sx={{ color: "#FFFFFF" }} />
            </Box>
          </Box>
          <Typography
            fontSize={{ xs: "30px" }}
            className="sfpro"
            sx={{ fontWeight: "bolder", mt: 4 }}
          >
            CONGRATULATIONS!
          </Typography>
          <Typography
            fontSize={{ xs: "18px" }}
            className="sfpro"
            sx={{ mt: 4, lineHeight: "20px" }}
            textAlign={"center"}
          >
            Check Back Tomorrow <br />
            for another word.
          </Typography>
          <Button
            onClick={() => setOpen(false)}
            fullWidth
            sx={{
              textTransform: "none",
              bgcolor: "#FFFFFF",
              color: "#000000",
              border: "1.5px solid grey",
              borderRadius: "30px",
              mt: 2,
            }}
            endIcon={<EmojiEventsRounded />}
          >
            See Result
          </Button>
        </Box>
        <Box
          sx={{
            border: "1px solid grey",
            width: { xs: "90%", md: "600px" },
            my: 4,
          }}
        />
        <Button
          onClick={handleShare}
          sx={{
            textTransform: "none",
            bgcolor: "#397E32",
            color: "#ffffff",
            borderRadius: "30px",
            mt: 2,
            width: "fit-content",
            px: 10,
            py: 1,
          }}
          endIcon={<Share />}
        >
          Share
        </Button>
      </>
    );
  }
  if (gameLost) {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            pt: 5,
            width: "300px",
          }}
        >
          <Box>
            <Box
              sx={{
                width: "fit-content",
                bgcolor: "#397E32",
                pt: 1.5,
                px: 1.5,
                pb: 1,
                borderRadius: "5px",
              }}
            >
              <Star fontSize="large" sx={{ color: "#FFFFFF" }} />
            </Box>
          </Box>
          <Typography
            fontSize={{ xs: "30px" }}
            className="sfpro"
            sx={{ fontWeight: "bolder", mt: 4 }}
            textAlign={"center"}
          >
            THANKS FOR PLAYING TODAY
          </Typography>
          <Typography
            fontSize={{ xs: "18px" }}
            className="sfpro"
            sx={{ mt: 4, lineHeight: "20px" }}
            textAlign={"center"}
          >
            Check Back Tomorrow <br />
            for another word.
          </Typography>
          <Button
            fullWidth
            sx={{
              textTransform: "none",
              bgcolor: "#FFFFFF",
              color: "#000000",
              border: "1.5px solid grey",
              borderRadius: "30px",
              mt: 2,
            }}
            onClick={() => setOpen(false)}
            endIcon={<EmojiEventsRounded />}
          >
            See Result
          </Button>
        </Box>
        <Box
          sx={{
            border: "1px solid grey",
            width: { xs: "90%", md: "600px" },
            my: 4,
          }}
        />
        <Button
          onClick={handleShare}
          sx={{
            textTransform: "none",
            bgcolor: "#397E32",
            color: "#ffffff",
            borderRadius: "30px",
            mt: 2,
            width: "fit-content",
            px: 10,
            py: 1,
          }}
          endIcon={<Share />}
        >
          Share
        </Button>
      </>
    );
  }
};
