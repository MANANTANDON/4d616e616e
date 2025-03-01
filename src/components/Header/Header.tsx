import { Box, Container, Tooltip, Typography } from "@mui/material";
import React from "react";

export const Header: React.FC = () => {
  const routes = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "/about",
    },
  ];

  const resumeButton = {
    name: "Resumé",
    route: "/",
  };
  return (
    <>
      <header style={{ zIndex: 1 }}>
        <Box
          sx={{
            mt: -1,
            mx: -1,
            py: 1,
            borderBottom: "0.7px solid lightgrey",
            bgcolor: "#fff",
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ cursor: "pointer" }}>
                <Tooltip arrow title="Manan Tandon">
                  <Typography
                    className="fontFamily"
                    style={{ fontSize: "20px" }}
                  >
                    4d616e616e.
                  </Typography>
                </Tooltip>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  gap: 7,
                  alignItems: "center",
                }}
              >
                {routes?.map((item, key) => (
                  <Typography className="fontFamily" key={key}>
                    {item?.name}
                  </Typography>
                ))}
                <Typography
                  sx={{
                    px: 2,
                    bgcolor: "#000",
                    border: "1px solid lightgrey",
                    color: "white",
                    py: 0.5,
                    borderRadius: "7px",
                  }}
                >
                  {resumeButton?.name}
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </header>
    </>
  );
};
