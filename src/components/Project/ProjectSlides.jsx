import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const ProjectSlides = ({ projectImages, setSlideNo, slidesNo }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.7,
        }}
      >
        {projectImages?.map((item, key) => (
          <Box
            sx={{
              display: "flex",
              gap: 1,
              p: "4px",
              borderRadius: "5px",
              bgcolor: slidesNo === key ? "rgb(52,120,246)" : "transparent",
              color: slidesNo === key ? "#FFFFFF" : "#000000",
              "&:hover": { bgcolor: "rgb(52,120,246)", color: "#FFFFFF" },
            }}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column-reverse",
                fontSize: "14px",
              }}
            >
              {key + 1}
            </Typography>
            <Image
              layout="intrinsic"
              src={item?.src}
              width={160}
              height={100}
              placeholder="blur"
              blurDataURL={item?.src}
              onClick={() => setSlideNo(key)}
              style={{ borderRadius: "5px" }}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};
