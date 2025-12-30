import { useMediaQuery } from "@mui/material";
import React from "react";

// Contact data for better maintainability
const contactData = [
  {
    label: "Contact Email:",
    value: "manantandon@gmail.com",
    href: "mailto:manantandon@gmail.com",
    isLink: true,
  },
  {
    label: "Github:",
    value: "https://github.com/MANANTANDON",
    href: "https://github.com/MANANTANDON",
    isLink: true,
    external: true,
  },
  {
    label: "X - formerly Twitter:",
    value: "https://x.com/4d616e616eT",
    href: "https://x.com/4d616e616eT",
    isLink: true,
    external: true,
  },
  {
    label: "LinkedIn:",
    value: "https://www.linkedin.com/in/manan-t-663472146/",
    href: "https://www.linkedin.com/in/manan-t-663472146/",
    isLink: true,
    external: true,
  },
  {
    label: "Instagram:",
    value: "https://www.instagram.com/4d616e616e/",
    href: "https://www.instagram.com/4d616e616e/",
    isLink: true,
    external: true,
  },
];

export const NotesWidget = () => {
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  return (
    <>
      <div className="absolute left-[370px] top-[35%] bg-zinc-950/70 px-4 py-1.5 rounded-xl pointer-none border border-zinc-100/60">
        <div className="sfpro-text text-[#FFFFFF] text-[14px] font-medium text-center">
          Lets Connect.
        </div>
        <div className="sfpro-text text-zinc-200 text-[12px] font-medium text-center w-[200px] max-w-[200px] mt-1">
          Have a project in mind or want to collaborate? Feel free to reach out
          to me anytime.
        </div>
      </div>
      <div
        className={`relative flex items-center backdrop-blur-md bg-zinc-600/10 rounded-[27px] pb-px px-px pt-[0.5px]`}
      >
        <div className="h-fit w-[344px] rounded-[27px] overflow-hidden">
          <div className="bg-linear-to-b from-[#FED200] to-[#FCBB00] p-3">
            <div className="sfpro-text text-base font-medium text-zinc-100">
              􀈕 Notes
            </div>
          </div>
          <div className="notes-bg-color h-full pt-[5px]">
            <div
              className={`w-full border-t ${
                isDarkMode
                  ? "border-dotted border-zinc-600"
                  : "border-dotted border-zinc-300"
              }`}
            />
            <div className=" px-[17px]">
              {contactData?.map((contact, index) => (
                <div
                  key={index}
                  className={`flex flex-col py-[9px] ${
                    index !== 4
                      ? isDarkMode
                        ? "border-b border-zinc-600"
                        : "border-b border-zinc-300"
                      : ""
                  }`}
                >
                  <div className="sfpro-text notes-text-color text-[13px] font-medium">
                    {contact.label}
                  </div>
                  <a
                    className="sfpro-text text-[13px] font-regular w-full notes-text-color-2"
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noopener noreferrer" : undefined}
                  >
                    {contact.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="borderGradient"
              x1="0%" // Start X position
              y1="0%" // Start Y position
              x2="100%" // End X position
              y2="100%" // End Y position
            >
              {/* Adjust stopColor values for different colors and opacity */}
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          <rect
            x="1"
            y="1"
            width="calc(100% - 2px)"
            height="calc(100% - 2px)"
            rx="27" // Adjust for border radius (same value in rounded-[25px] above)
            ry="27" // Adjust for border radius
            fill="none"
            stroke="url(#borderGradient)"
            strokeWidth="1" // Adjust for border thickness
          />
        </svg>
      </div>
    </>
  );
};
