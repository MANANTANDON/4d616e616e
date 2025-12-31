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
    {
      src: "/images/icons/socials/email.png",
      name: "Mail",
      link: "mailto:manantandon@gmail.com",
      short_name: "Mail",
    },
    {
      src: "/images/companies/csr-voice.jpg",
      name: "CSR Voice",
      link: "https://www.csrvoice.com/",
      short_name: "CSR Voice",
    },
    {
      src: "/images/companies/bri-nandi.png",
      name: "Bri Nandi",
      link: "https://www.brinandi.com/",
      short_name: "Bri Nandi",
    },
    {
      src: "/100DaysDesign.png",
      name: "100 Days of Frontend Design",
      link: "/100designs",
      short_name: "100 Design",
    },
  ];

  const handleIconClick = (project) => {
    setClickLink(project);
    setOpen(true);
  };

  return (
    <>
      <Box>
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
                  width={"65"}
                  height={"65"}
                  objectFit="cover"
                  objectPosition="center"
                  alt={item?.name}
                  title={item?.name}
                  style={{
                    borderRadius: "17px",
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
