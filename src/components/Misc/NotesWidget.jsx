import { Box, Typography } from "@mui/material";
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
          <div className="bg-zinc-100 h-full pt-[5px]">
            <div className="w-full border-t border-dotted border-[#E6E6E6]" />
            <div className=" px-[17px]">
              {contactData?.map((contact, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index !== 4 && "border-b border-zinc-300"
                  } py-[9px]`}
                >
                  <div className="sfpro-text text-[13px] font-medium">
                    {contact.label}
                  </div>
                  <a
                    className="sfpro-text text-[13px] font-regular text-[#808080] w-full"
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

//  <Box sx={styles.container}>
//       <Box
//         sx={{
//           position: "absolute",
//           right: "-280px",
//           top: "40%",
//           bgcolor: "#00000090",
//           py: 1,
//           px: 4,
//           borderRadius: "12px",
//           pointerEvents: "none",
//           border: "1px solid #66666680",
//         }}
//       >
//         <Typography
//           sx={{
//             color: "#FFFFFF",
//             fontSize: "14px",
//             fontWeight: "600",
//             textAlign: "center",
//           }}
//           className="sfpro"
//         >
//           Lets Connect.
//         </Typography>
//         <Typography
//           sx={{
//             color: "#dfdfdf",
//             fontSize: "12px",
//             fontWeight: "600",
//             textAlign: "center",
//             width: "200px",
//             mt: 0.5,
//           }}
//           className="sfpro"
//         >
//           Have a project in mind or want to collaborate? Feel free to reach out
//           to me anytime.
//         </Typography>
//       </Box>
//       <Box sx={styles.widget}>
//         <Box sx={styles.header}>
//           <Typography
//             className="sfpro"
//             sx={{ pl: 2, fontSize: "16px", display: "flex", gap: 1 }}
//           >
//             <span>􀈕</span>
//             <span>Notes</span>
//           </Typography>
//         </Box>
//         <Box sx={styles.content}>
//           {contactData.map((contact, index) => (
//             <Box key={index} sx={styles.contactItem}>
//               <Typography sx={styles.label} className="sfpro">
//                 {contact.label}
//               </Typography>
//               {contact.isLink ? (
//                 <Typography
//                   component="a"
//                   href={contact.href}
//                   target={contact.external ? "_blank" : undefined}
//                   rel={contact.external ? "noopener noreferrer" : undefined}
//                   sx={styles.link}
//                   className="sfpro"
//                 >
//                   {contact.value}
//                 </Typography>
//               ) : (
//                 <Typography sx={styles.link} className="sfpro">
//                   {contact.value}
//                 </Typography>
//               )}
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </Box>
