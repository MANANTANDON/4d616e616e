import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Applications = () => {
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
      src: "/images/companies/jist.webp",
      name: "Jist",
      link: "https://jist.news/",
      short_name: "JIST",
    },
    {
      src: "/images/companies/vercel.png",
      name: "Content Management System",
      link: "https://kgdashboard.khabargaon.com/",
      short_name: "CMS",
    },
    {
      src: "/images/companies/home_ivf.webp",
      name: "Home IVF",
      link: "https://consult.homeivf.com/",
      short_name: "HomeIVF",
    },
    {
      src: "/images/companies/govern_better.webp",
      name: "Govern Better",
      link: "https://governbetter.co/",
      short_name: "Govern Better",
    },
    {
      src: "/images/companies/shyna_gupta.webp",
      name: "Shyna Gupta",
      link: "https://shynagupta.com/",
      short_name: "Shyna Gupta",
    },
    {
      src: "/images/companies/snowchild_studio.webp",
      name: "Snowchild Studio",
      link: "https://snowchildstudio.com/",
      short_name: "Snowchild Studio",
    },
  ];
  return (
    <>
      <Grid container>
        {projects?.map((item, key) => (
          <Grid xs={2} key={key}>
            <Box
              component={"a"}
              href={item.link}
              target="_blank"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: 2,
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
                style={{
                  borderRadius: "12px",
                  border: "1px solid #e8e8e8",
                }}
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
                  color: "#000000",
                  mt: 1,
                }}
                className="sfpro"
              >
                {item?.short_name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
