import { Box, Container, Grid, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { ProjectSlides } from "../Project/ProjectSlides";

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
        bottom: 0,
        right: 0,
        left: 0,
        bgcolor: "#ffffff90",
        px: "0px !important",
        borderRadius: "10px",
        backdropFilter: "blur(80px)",
        overflow: "hidden",
        boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;",
      }}
    >
      <Grid container>
        <Grid item xs={1.7}>
          <Box sx={{ display: "flex", gap: 1, p: 1.5 }}>
            <Box
              sx={{
                height: "12px",
                width: "12px",
                bgcolor: "#ED6A5E",
                borderRadius: "50%",
                border: "0.1px solid #00000030",
                "&:hover": {
                  bgcolor: "#ED6A5E90",
                },
              }}
              onClick={() => setOpen(false)}
            ></Box>
            <Box
              sx={{
                height: "12px",
                width: "12px",
                bgcolor: "#F5BF4F",
                borderRadius: "50%",
                border: "0.1px solid #00000030",
                "&:hover": {
                  bgcolor: "#F5BF4F90",
                },
              }}
            ></Box>
            <Box
              sx={{
                height: "12px",
                width: "12px",
                bgcolor: "#62C755",
                borderRadius: "50%",
                border: "0.1px solid #00000030",
                "&:hover": {
                  bgcolor: "#62C75590",
                },
              }}
            ></Box>
          </Box>
          <Box sx={{ my: 2.5 }}>
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
            bgcolor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            borderLeft: "1px solid #EEEEEE",
            height: "100vh",
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
            }}
          >
            <a href={projectImages[slidesNo]?.link} target="_blank">
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  height: "560px",
                  width: "1000px",
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
