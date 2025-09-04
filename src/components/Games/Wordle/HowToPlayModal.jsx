import { Close } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

export const HowToPlayModal = ({ setOpen }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <IconButton sx={{}} onClick={() => setOpen(false)}>
          <Close sx={{ color: "#000000" }} />
        </IconButton>
      </Box>
      <Box>
        <Typography
          className="sfpro"
          sx={{ fontWeight: "bolder", fontSize: { xs: "24px", md: "30px" } }}
        >
          How To Play
        </Typography>
        <Typography
          className="sfpro"
          sx={{ fontWeight: "lighter", fontSize: { xs: "18px", md: "20px" } }}
        >
          Guess the Word in 6 Tries.
        </Typography>
      </Box>
      <Box>
        <ul>
          <li>
            <Typography
              sx={{ fontSize: { xs: "14px", md: "16px" } }}
              className="sfpro"
            >
              Each word should be a valid 5-letter word.
            </Typography>
          </li>
          <li>
            <Typography
              sx={{ mt: 1, fontSize: { xs: "14px", md: "16px" } }}
              className="sfpro"
            >
              The color of the tiles will change to show you how close your
              guess was to the word.
            </Typography>
          </li>
        </ul>
      </Box>
      <Box sx={{ borderBottom: "1px solid grey", pb: 3 }}>
        <Typography
          className="sfpro"
          sx={{ fontWeight: "bolder", fontSize: { xs: "14px", md: "16px" } }}
        >
          Examples
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            mt: 1,
            mb: 0.5,
          }}
        >
          {[..."FETCH"].map((item, key) => (
            <Typography
              key={key}
              sx={{
                border: key === 0 ? "2px solid #6AAA64" : "2px solid #787C7E",
                bgcolor: key === 0 ? "#6AAA64" : "#FFFFFF",
                color: key === 0 ? "#FFFFFF" : "#080808",
                height: "42px",
                width: "42px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: "bolder",
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
        <Typography
          sx={{ fontSize: { xs: "16px", md: "18px" } }}
          className="sfpro"
        >
          <span style={{ fontWeight: "bolder" }}>"F"</span> is the word and in
          correct spot.
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            mt: 2,
            mb: 0.5,
          }}
        >
          {[..."CHILD"].map((item, key) => (
            <Typography
              key={key}
              sx={{
                border: key === 1 ? "2px solid #C9B458" : "2px solid #787C7E",
                bgcolor: key === 1 ? "#C9B458" : "#FFFFFF",
                color: key === 1 ? "#FFFFFF" : "#080808",
                height: "42px",
                width: "42px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: "bolder",
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
        <Typography
          sx={{ fontSize: { xs: "16px", md: "18px" } }}
          className="sfpro"
        >
          <span style={{ fontWeight: "bolder" }}>"H"</span> is the word but in
          wrong spot.
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            mt: 2,
            mb: 0.5,
          }}
        >
          {[..."ROGUE"].map((item, key) => (
            <Typography
              key={key}
              sx={{
                border: key === 3 ? "2px solid #787C7E" : "2px solid #787C7E",
                bgcolor: key === 3 ? "#787C7E" : "#FFFFFF",
                color: key === 3 ? "#FFFFFF" : "#080808",
                height: "42px",
                width: "42px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: "bolder",
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
        <Typography
          sx={{ fontSize: { xs: "16px", md: "18px" } }}
          className="sfpro"
        >
          <span style={{ fontWeight: "bolder" }}>"U"</span> is not the word in
          any spot.
        </Typography>
      </Box>
      <Box sx={{ pt: 3 }}>
        <Typography
          className="sfpro"
          sx={{ fontSize: { xs: "14px", md: "16px" } }}
        >
          <i>The Hidden word is random for every player.</i>
        </Typography>
      </Box>
    </>
  );
};
