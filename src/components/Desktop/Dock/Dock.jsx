import { Box, Tooltip } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Dock = () => {
  const DockIcons = [
    {
      name: "Finder",
      title: "Finder",
      path: "/images/Finder.webp",
    },
    {
      name: "Apple Music",
      title: "Music",
      path: "/images/AppleMusic.webp",
    },
    {
      name: "Spotify",
      title: "Spotify",
      path: "/images/Spotify.webp",
    },
    {
      name: "VSCode",
      title: "Visual Studio Code",
      path: "/images/VSCode.webp",
    },
    {
      name: "Adobe Illustrator",
      title: "Adobe Illustrator",
      path: "/images/Illustrator.webp",
    },
  ];
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          bottom: "5px",
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
          <Tooltip arrow title={item?.title} key={key}>
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
          </Tooltip>
        ))}
      </Box>
    </>
  );
};
