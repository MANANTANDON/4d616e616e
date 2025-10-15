import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export const MobileDock = () => {
  const DockIcons = [
    {
      name: "X",
      title: "Twitter (formerly Twitter)",
      path: "/images/icons/socials/x.png",
      link: "https://x.com/4d616e616eT",
    },
    {
      name: "Github",
      title: "Github",
      path: "/images/icons/socials/github.png",
      link: "https://github.com/MANANTANDON",
    },
    {
      name: "Instagram",
      title: "Instagram",
      path: "/images/icons/socials/instagram.png",
      link: "https://www.instagram.com/4d616e616e/",
    },
    {
      name: "Linkedin",
      title: "Linkedin",
      path: "/images/icons/socials/linkedin.png",
      link: "https://www.linkedin.com/in/manan-t-663472146/",
    },
  ];
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          bottom: "7px",
          left: "7px",
          right: "7px",
          p: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
        className="iphone-dock-blur"
      >
        {DockIcons?.map((item, key) => (
          <a href={item.link} target="_blank" key={key}>
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
                src={item?.path}
                alt={item?.name}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
          </a>
        ))}
      </Box>
    </>
  );
};
