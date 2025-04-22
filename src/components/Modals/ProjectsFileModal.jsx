import { Box, Container, Grid, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { ProjectSlides } from "../Project/ProjectSlides";
import { ThreeButton } from "../Misc/ThreeButton";

export const ProjectsFileModal = ({ setOpen }) => {
  const [slidesNo, setSlideNo] = useState(0);
  const projectImages = [
    { name: "Projects", src: "/images/slides/slide1.png" },
    {
      name: "Khabargaon",
      src: "/images/slides/kg.webp",
      link: "https://khabargaon.com/",
    },
    {
      name: "News Arena India",
      src: "/images/slides/nai.webp",
      link: "https://newsarenaindia.com/",
    },
    {
      name: "News 4 Himachal",
      src: "/images/slides/n4h.webp",
      link: "https://news4himachal.in/",
    },
    {
      name: "Future Shift Labs",
      src: "/images/slides/fsl.webp",
      link: "https://tracker.futureshiftlabs.com/",
    },
    { name: "Content Management System", src: "/images/slides/cms.webp" },
  ];
  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "absolute",
        top: "30px",
        right: 0,
        left: 0,
        px: "0px !important",
        borderRadius: "10px",
        overflow: "hidden",
        backdropFilter: "blur(80px)",
        boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;",
      }}
    >
      <Grid container sx={{ bgcolor: "#E0E0E0" }}>
        <Grid item xs={1.7} sx={{ bgcolor: "#D3D3D3" }}>
          <ThreeButton setOpen={setOpen} />
          <Box
            sx={{
              mt: 2.5,
              overflow: "scroll !important",
              height: { lg: "630px", xl: "690px" },
            }}
          >
            <ProjectSlides
              projectImages={projectImages}
              setSlideNo={setSlideNo}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={10.3}
          sx={{
            bgcolor: "#E0E0E0",
            display: "flex",
            flexDirection: "column",
            height: { lg: "700px", xl: "750px" },
          }}
        >
          <Box
            sx={{
              bgcolor: "#F6F6F7",
              py: 1.5,
              px: 2,
              display: "flex",
              gap: 2.5,
              borderBottom: "1px solid #EEEEEE",
            }}
          >
            <Typography
              className="sfpro"
              sx={{ fontSize: "14px", fontWeight: "bold" }}
            >
              {projectImages[slidesNo]?.name}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: { lg: "700px", xl: "750px" },
            }}
          >
            <a href={projectImages[slidesNo]?.link} target="_blank">
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  height: "530px",
                  width: "950px",
                  boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px",
                }}
              >
                <Image
                  src={projectImages[slidesNo]?.src}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt={projectImages[slidesNo]?.name}
                  title={projectImages[slidesNo]?.name}
                />
              </Box>
            </a>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
