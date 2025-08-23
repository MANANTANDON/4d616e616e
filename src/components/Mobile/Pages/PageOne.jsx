import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { LinkModal } from "../LinkModal";

export const PageOne = () => {
  const [clickLink, setClickLink] = useState();
  const [open, setOpen] = useState(false);

  const projects = [
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
      short_name: "GB",
    },
    {
      src: "/images/companies/shyna_gupta.webp",
      name: "Shyna Gupta",
      link: "https://shynagupta.com/",
      short_name: "Shyna Gupta",
    },
  ];

  const handleIconClick = (project) => {
    setClickLink(project);
    setOpen(true);
  };

  return (
    <>
      <Box sx={{ mt: 2.5, mx: -1 }}>
        <Grid
          container
          sx={{
            display: "flex",
          }}
        >
          {projects?.map((item, key) => (
            <Grid xs={3} key={key} sx={{}}>
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
