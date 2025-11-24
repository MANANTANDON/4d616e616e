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
      <div className="bg-zinc-400/20 border border-zinc-200/40 rounded-[20px] absolute bottom-[7px] left-[7px] right-[7px] flex items-center justify-between p-2.5">
        {DockIcons?.map((item, key) => (
          <Box
            key={key}
            component="a"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              cursor: "pointer",
              display: "block",
              position: "relative",
              pointerEvents: "auto",
            }}
          >
            <Image
              src={item.path}
              alt={item.title}
              width={60}
              height={60}
              style={{
                // Prevent image from blocking clicks
                pointerEvents: "none",
              }}
            />
          </Box>
        ))}
      </div>
    </>
  );
};
