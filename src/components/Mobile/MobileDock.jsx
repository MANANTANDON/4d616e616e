import { Box, Tooltip } from "@mui/material";
import Image from "next/image";
import React from "react";

export const MobileDock = () => {
  const DockIcons = [
    {
      name: "Finder",
      title: "Finder",
      path: "/images/icons/Finder.webp",
    },
    {
      name: "Apple Music",
      title: "Music",
      path: "/images/icons/AppleMusic.webp",
    },
    {
      name: "Spotify",
      title: "Spotify",
      path: "/images/icons/Spotify.webp",
    },
    {
      name: "VSCode",
      title: "Visual Studio Code",
      path: "/images/icons/VSCode.webp",
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
