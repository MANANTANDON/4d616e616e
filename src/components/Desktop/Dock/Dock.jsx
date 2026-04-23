import { IOS26 } from "@/components/Misc/IOS26";
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
      <div className="absolute bottom-[110px] left-1/2 -translate-x-1/2 bg-[#00000090] py-1 px-4 rounded-xl pointer-events-none border border-[#66666680]">
        <p className="sfpro text-white text-sm font-semibold text-center">
          These are my recent projects.
        </p>
        <p className="sfpro text-[#dfdfdf80] text-xs font-semibold text-center mt-0.5">
          click on the Projects folder to see all
        </p>
      </div>
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2">
        <IOS26 styles="gap-4">
          {DockIcons?.map((item, key) => (
            <div key={key} className="relative group">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition pointer-events-none z-10">
                <div className="backdrop-blur-xl bg-zinc-900/60 text-white border border-white/15 rounded-[10px] text-xs px-2 py-1 whitespace-nowrap">
                  {item?.short_name}
                </div>
              </div>
              <a href={item.link} target="_blank" rel="noreferrer">
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
            </div>
          ))}
        </IOS26>
      </div>
    </>
  );
};
