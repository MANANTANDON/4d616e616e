import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { LinkModal } from "./LinkModal";

export const Projects = () => {
  const [clickLink, setClickLink] = useState();
  const [open, setOpen] = useState(false);

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
      src: "/images/companies/snowchild_studio.webp",
      name: "Snowchild Studio",
      link: "https://snowchildstudio.com/",
      short_name: "Snowchild Studio",
    },
  ];

  const handleIconClick = (project) => {
    setClickLink(project);
    setOpen(true);
  };
  return (
    <>
      <Box sx={{ mt: 2.5, mx: -0.5 }}>
        <Grid
          container
          sx={{
            display: "flex",
          }}
        >
          {projects?.map((item, key) => (
            <Grid xs={3} key={key}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mb: 2,
                }}
                onClick={() => handleIconClick(item)}
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
                    border: item?.short_name === "CMS" && "1px solid #3c3c3c",
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
                    color: "#FBF8EF",
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
      </Box>
      <LinkModal clickLink={clickLink} open={open} setOpen={setOpen} />
    </>
  );
};
