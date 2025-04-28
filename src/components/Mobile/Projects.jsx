import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Projects = () => {
  const projects = [
    {
      src: "/images/companies/news_arena_india.webp",
      name: "News Arena India",
      link: "https://newsarenaindia.com/",
      short_name: "NAI",
    },
    {
      src: "/images/companies/khabargaon.webp",
      name: "Khabargaon",
      link: "https://khabargaon.com/",
      short_name: "KG",
    },
    {
      src: "/images/companies/future_shift_labs.webp",
      name: "Future Shift Labs",
      link: "https://tracker.futureshiftlabs.com/",
      short_name: "FSL",
    },
    {
      src: "/images/companies/news_4_himachal.webp",
      name: "News 4 Himachal",
      link: "https://news4himachal.in/",
      short_name: "N4H",
    },
    {
      src: "/images/companies/vercel.png",
      name: "Content Management System",
      link: "https://kgdashboard.khabargaon.com/",
      short_name: "CMS",
    },
  ];
  return (
    <>
      <Box sx={{ mt: 2.5 }}>
        <Grid container gap={2}>
          {projects?.map((item, key) => (
            <Grid xs={2.5} key={key}>
              <a href={item?.link} target="_blank">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={item?.src}
                    layout="intrinsic"
                    width={"60"}
                    height={"60"}
                    objectFit="cover"
                    objectPosition="center"
                    alt={item?.name}
                    title={item?.name}
                    style={{ borderRadius: "12px" }}
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: "1",
                      WebkitBoxOrient: "vertical",
                      textAlign: "center",
                      color: "#FBF8EF",
                      mt: 1.2,
                    }}
                    className="sfpro"
                  >
                    {item?.short_name}
                  </Typography>
                </Box>
              </a>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
