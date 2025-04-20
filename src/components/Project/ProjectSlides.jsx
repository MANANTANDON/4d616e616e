import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export const ProjectSlides = ({ projectImages, setSlideNo }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        {projectImages?.map((item, key) => (
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              height: "100px",
              width: "177px",
              borderRadius: "5px",
            }}
            onClick={() => setSlideNo(key)}
          >
            <Image
              src={item?.src}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              blurDataURL={item?.src}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};
