import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export const ProjectSlides = () => {
  const projectImages = [
    { src: "/images/slides/kg.webp", link: "https://khabargaon.com/" },
    { src: "/images/slides/nai.webp", link: "https://newsarenaindia.com/" },
    { src: "/images/slides/n4h.webp", link: "https://news4himachal.in/" },
    {
      src: "/images/slides/fsl.webp",
      link: "https://tracker.futureshiftlabs.com/",
    },
    { src: "/images/slides/cms.webp" },
  ];
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
          <a href={item?.link} key={key}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                height: "100px",
                width: "177px",
                borderRadius: "5px",
              }}
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
          </a>
        ))}
      </Box>
    </>
  );
};
