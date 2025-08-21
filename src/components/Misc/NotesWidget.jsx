import { Box, Typography } from "@mui/material";
import React from "react";

// Define styles outside component to prevent recreation on each render
const styles = {
  container: {
    pt: 0,
    mx: -1,
    pl: 2,
  },
  widget: {
    width: "340px",
    borderRadius: "20px",
    bgcolor: "#FFFFFF",
    overflow: "hidden",
    boxShadow:
      "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
  },
  header: {
    height: "40px",
    backgroundImage: "linear-gradient(180deg, #FED200, #FCBB00)",
    borderBottom: "1.5px solid #E7A500",
    display: "flex",
    alignItems: "center",
    color: "#FFFFFF",
  },
  content: {
    mt: 0.7,
    borderTop: "1px dotted #E6E6E6",
    pl: 2.5,
  },
  contactItem: {
    borderBottom: "1px solid #E6E6E6",
    py: 1,
  },
  label: {
    color: "#272727",
    fontSize: "14px",
  },
  link: {
    color: "#808080",
    fontSize: "14px",
  },
};

// Contact data for better maintainability
const contactData = [
  {
    label: "Contact Email:",
    value: "manantandon@gmail.com",
    href: "mailto:manantandon@gmail.com",
    isLink: true,
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
  {
    label: "Contact Whatsapp:",
    value: "xxxxxxxxxx😎",
    isLink: false,
  },
];

export const NotesWidget = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.widget}>
        <Box sx={styles.header}>
          <Typography
            className="sfpro"
            sx={{ pl: 2, fontSize: "16px", display: "flex", gap: 1 }}
          >
            <span>􀈕</span>
            <span>Notes</span>
          </Typography>
        </Box>
        <Box sx={styles.content}>
          {contactData.map((contact, index) => (
            <Box key={index} sx={styles.contactItem}>
              <Typography sx={styles.label}>{contact.label}</Typography>
              {contact.isLink ? (
                <Typography
                  component="a"
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                  sx={styles.link}
                >
                  {contact.value}
                </Typography>
              ) : (
                <Typography sx={styles.link}>{contact.value}</Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
