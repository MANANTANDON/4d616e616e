import { Box, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Dock = () => {
  const DockIcons = [
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
      src: "/images/companies/snowchild_studio.png",
      name: "Snowchild Studio",
      link: "https://snowchildstudio.com/",
      short_name: "Snowchild Studio",
    },
  ];
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          bottom: "110px",
          left: "50%",
          transform: "translateX(-50%)",
          bgcolor: "#00000090",
          py: 1,
          px: 4,
          borderRadius: "12px",
          pointerEvents: "none",
          border: "1px solid #66666680",
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: "14px",
            fontWeight: "600",
            textAlign: "center",
          }}
          className="sfpro"
        >
          These are my recent projects.
        </Typography>
        <Typography
          sx={{
            color: "#dfdfdf80",
            fontSize: "12px",
            fontWeight: "600",
            textAlign: "center",
            mt: 0.5,
          }}
          className="sfpro"
        >
          click on the Projects folder to see all
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          p: 1.5,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
        className="mac-dock-blur"
      >
        {DockIcons?.map((item, key) => (
          <Tooltip arrow title={item?.short_name} key={key}>
            <a href={item.link} target="_blank">
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  height: "60px",
                  width: "60px",
                  borderRadius: "12px",
                }}
              >
                <Image
                  src={item?.src}
                  alt={item?.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </Box>
            </a>
          </Tooltip>
        ))}
      </Box>
    </>
  );
};
