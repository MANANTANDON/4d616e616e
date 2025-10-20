import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useRef, useState } from "react";

export const MusicWidget = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/Thursday.mp3" />
      <Box sx={{ mt: "30.39px", pt: 2, mx: -1, pl: 2 }}>
        <Box
          sx={{
            width: "340px",
            borderRadius: "20px",
            bgcolor: "#71695E",
            p: "16px",
          }}
        >
          <Grid container sx={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={6}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  height: "130px",
                  width: "130px",
                  borderRadius: "7px",
                }}
              >
                <Image
                  src="/images/Thursday.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="The Weeknd's Thursday"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", flexDirection: "column", gap: 0.7 }}
            >
              <Typography
                sx={{ fontSize: "12px", color: "#ffffff" }}
                className="sfpro"
              >
                NOW PLAYING
              </Typography>
              <Typography
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical",
                  fontWeight: "bold",
                  color: "#ffffff",
                  fontSize: "16px",
                }}
                className="sfpro"
              >
                Thursday (Original Explicit)
              </Typography>
              <Typography className="sfpro" sx={{ color: "#ffffff" }}>
                The Weeknd
              </Typography>
              <Box
                sx={{
                  bgcolor: "#90887D",
                  color: "#ffffff",
                  borderRadius: "50px",
                  py: 0.7,
                  px: 1.5,
                  width: "fit-content",
                  display: "flex",
                  gap: 1,
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                className="sfpro"
                onClick={togglePlayPause}
              >
                <Typography className="sfpro" sx={{ fontSize: "14px" }}>
                  {isPlaying ? "􀊆" : "􀊄"}
                </Typography>
                <Typography className="sfpro" sx={{ fontSize: "14px" }}>
                  {isPlaying ? "Pause" : "Play"}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
