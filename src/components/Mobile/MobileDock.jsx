import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { IOS26 } from "../Misc/IOS26";

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
      <div className=" absolute bottom-[7px] left-[7px] right-[7px]">
        <IOS26 styles="justify-between">
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
                  pointerEvents: "none",
                }}
              />
            </Box>
          ))}
        </IOS26>
      </div>
    </>
  );
};
