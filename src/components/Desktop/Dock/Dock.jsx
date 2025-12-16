import { IOS26 } from "@/components/Misc/IOS26";
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
      src: "/images/companies/csr-voice.jpg",
      name: "CSR Voice",
      link: "https://www.csrvoice.com/",
      short_name: "CSR Voice",
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
    {
      src: "/100DaysDesign.png",
      name: "100 Days of Frontend Design",
      link: "/100designs",
      short_name: "100 Days Design",
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
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2">
        <IOS26 styles="gap-4">
          {DockIcons?.map((item, key) => (
            <Tooltip
              key={key}
              title={item?.short_name}
              componentsProps={{
                tooltip: {
                  sx: {
                    backdropFilter: "blur(12px)",
                    bgcolor: "#00000030",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "10px",
                    fontSize: "12px",
                  },
                },
              }}
            >
              <a href={item.link} target="_blank">
                <div className="relative overflow-hidden h-[60px] w-[60px] rounded-[14px]">
                  <Image
                    src={item?.src}
                    alt={item?.name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </a>
            </Tooltip>
          ))}
        </IOS26>
      </div>
    </>
  );
};
