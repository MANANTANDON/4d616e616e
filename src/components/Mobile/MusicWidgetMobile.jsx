import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React, { useRef, useState } from "react";

export const MusicWidgetMobile = () => {
  const is320 = useMediaQuery("(max-width:320px)");
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
      <audio ref={audioRef} src="/audio/EnjoyTheShow.mp3" />
      <Box sx={{ mx: 1.5, mt: 4.5 }}>
        <Box
          sx={{
            borderRadius: "20px",
            bgcolor: "#71695E",
            px: is320 ? "12px" : "14px",
            pt: is320 ? "10px" : "14px",
            pb: is320 ? "10px" : "12px",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid item xs={5}>
              <Image
                src="/images/enjoytheshow.webp"
                layout="intrinsic"
                width={500}
                height={500}
                objectFit="cover"
                objectPosition="center"
                alt="The Weeknd's Thursday"
                style={{ borderRadius: "10px" }}
              />
            </Grid>
            <Grid
              item
              xs={7}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.7,
                pl: 1.5,
              }}
            >
              <Typography
                sx={{ fontSize: is320 ? "10px" : "12px", color: "#ffffff" }}
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
                  fontSize: is320 ? "14px" : "16px",
                }}
                className="sfpro"
              >
                Enjoy the Show
              </Typography>
              <Typography
                className="sfpro"
                sx={{ color: "#ffffff", fontSize: is320 ? "14px" : "16px" }}
              >
                The Weeknd
              </Typography>
              <Box
                sx={{
                  bgcolor: "#90887D",
                  color: "#ffffff",
                  borderRadius: "50px",
                  py: is320 ? 0.5 : 0.7,
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
                <Typography
                  className="sfpro"
                  sx={{ fontSize: is320 ? "12px" : "14px" }}
                >
                  {isPlaying ? "􀊆" : "􀊄"}
                </Typography>
                <Typography
                  className="sfpro"
                  sx={{ fontSize: is320 ? "12px" : "14px" }}
                >
                  {isPlaying ? "Pause" : "Play"}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography
            textAlign="center"
            className="sfpro"
            sx={{ color: "#FBF8EF", fontSize: "12px", mt: 1.2 }}
          >
            Music
          </Typography>
        </Box>
      </Box>
    </>
  );
};
