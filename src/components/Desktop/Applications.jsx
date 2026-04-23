import Image from "next/image";
import React from "react";

export const Applications = () => {
  const projects = [
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
      src: "/images/companies/news_4_himachal.webp",
      name: "News 4 Himachal",
      link: "https://news4himachal.in/",
      short_name: "N4H",
    },
    {
      src: "/images/companies/jist.webp",
      name: "Jist",
      link: "https://jist.news/",
      short_name: "JIST",
    },
    {
      src: "/images/companies/vercel.png",
      name: "Content Management System",
      link: "https://kgdashboard.khabargaon.com/",
      short_name: "CMS",
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
    {
      src: "/images/games/snowchild-wordle.webp",
      name: "Snowchild Wordle",
      link: "/snowchild-wordle",
      short_name: "SW",
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
  ];
  return (
    <>
      <div className="grid grid-cols-6 gap-y-4">
        {projects?.map((item, key) => (
          <div key={key} className="col-span-1">
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center mb-2"
            >
              <Image
                src={item?.src}
                layout="intrinsic"
                width={60}
                height={60}
                objectFit="cover"
                objectPosition="center"
                alt={item?.name}
                title={item?.name}
                style={{
                  borderRadius: "16px",
                  border: "1px solid #e8e8e8",
                }}
              />
              <p className="sfpro text-[12px] text-center text-black mt-1 w-full px-1 overflow-hidden text-ellipsis whitespace-nowrap">
                {item?.short_name}
              </p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
