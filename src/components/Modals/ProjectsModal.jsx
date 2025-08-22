import { Box, Container, Grid, Modal, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { ProjectsFileModal } from "./ProjectsFileModal";
import { MananTandon } from "../Desktop/manantandon";
import { Applications } from "../Desktop/Applications";

const style = {
  bgcolor: "transparent",
  boxShadow: 24,
  height: "100vh",
  position: "relative",
};

export const ProjectsModal = ({ handleModalClose }) => {
  const [maxWidth, setMaxWidth] = useState("md");
  const [open, setOpen] = useState(false);
  const [selectMenu, setSelectedMenu] = useState("Applications");

  const handleWidth = () => {
    maxWidth === "lg" ? setMaxWidth("md") : setMaxWidth("lg");
  };

  const sideMenu = [
    { icons: "􀎞", name: "manantandon" },
    { icons: "􀈕", name: "Applications" },
  ];
  return (
    <Container
      maxWidth={maxWidth}
      sx={{
        position: "absolute",
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "#ffffff90",
        px: "0px !important",
        borderRadius: "10px",
        backdropFilter: "blur(80px)",
        overflow: "hidden",
        boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;",
      }}
    >
      <Grid container>
        <Grid item xs={2}>
          <Box sx={{ display: "flex", gap: 1, p: 1.5 }}>
            <Box
              sx={{
                height: "12px",
                width: "12px",
                bgcolor: "#ED6A5E",
                borderRadius: "50%",
                border: "0.1px solid #00000030",
                "&:hover": {
                  bgcolor: "#ED6A5E90",
                },
              }}
              onClick={handleModalClose}
            ></Box>
            <Box
              sx={{
                height: "12px",
                width: "12px",
                bgcolor: "#F5BF4F",
                borderRadius: "50%",
                border: "0.1px solid #00000030",
                "&:hover": {
                  bgcolor: "#F5BF4F90",
                },
              }}
              onClick={handleWidth}
            ></Box>
            <Box
              sx={{
                height: "12px",
                width: "12px",
                bgcolor: "#62C755",
                borderRadius: "50%",
                border: "0.1px solid #00000030",
                "&:hover": {
                  bgcolor: "#62C75590",
                },
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              px: 1,
              my: 2,
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
            }}
          >
            <Typography
              className="sfpro"
              sx={{ fontSize: "12px", color: "#00000070", px: 0.5 }}
            >
              Favorites
            </Typography>
            {sideMenu?.map((item, key) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  px: 0.5,
                  py: 0.6,
                  bgcolor: selectMenu === item.name && "#00000015",
                  borderRadius: "5px",
                  "&:hover": {
                    cursor: "default",
                  },
                }}
                key={key}
                onClick={() => setSelectedMenu(item.name)}
              >
                <Typography
                  className="sfpro"
                  sx={{ fontSize: "13px", color: "#0271F1" }}
                >
                  {item.icons}
                </Typography>
                <Typography sx={{ fontSize: "13px" }}>{item?.name}</Typography>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid
          item
          xs={10}
          sx={{
            bgcolor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            borderLeft: "1px solid #EEEEEE",
            height: "400px",
          }}
        >
          <Box
            sx={{
              bgcolor: "#F6F6F7",
              py: 1.5,
              px: 1,
              display: "flex",
              gap: 2.5,
              borderBottom: "1px solid #EEEEEE",
            }}
          >
            <Typography className="sfpro" sx={{ color: "#B5B5B9" }}>
              􀆉
            </Typography>
            <Typography className="sfpro" sx={{ color: "#B5B5B9" }}>
              􀆊
            </Typography>
            <Typography
              className="sfpro"
              sx={{ fontSize: "14px", fontWeight: "bold" }}
            >
              {selectMenu === "manantandon" ? "manantandon" : "Applications"}
            </Typography>
          </Box>
          <Box
            sx={{
              px: selectMenu === "manantandon" ? 3 : 1,
              py: selectMenu === "manantandon" ? 3 : 3,
            }}
          >
            {selectMenu === "manantandon" ? (
              <MananTandon setOpen={setOpen} />
            ) : (
              <Applications />
            )}
          </Box>
        </Grid>
      </Grid>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          backdropFilter: "none", // Removes blur effect
          "& .MuiBackdrop-root": {
            backgroundColor: "transparent", // Makes backdrop transparent
          },
        }}
      >
        <Box sx={style}>
          <ProjectsFileModal setOpen={setOpen} />
        </Box>
      </Modal>
    </Container>
  );
};
1;
