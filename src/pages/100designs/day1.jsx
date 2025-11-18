import { Box, Container, Grid2, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export default function Day1() {
  const router = useRouter();

  const SideMenu = [
    { name: "Search", icon: "􀊫", path: "" },
    { name: "Home", icon: "􀎞", path: "/100designs" },
    { name: "New", icon: "􀇷", path: "" },
    { name: "Radio", icon: "􀌙", path: "" },
  ];

  const Library = [
    { name: "Pin", icon: "􀎦", path: "" },
    { name: "Recently Added", icon: "􀐫", path: "" },
    { name: "Artist", icon: "􀑫", path: "" },
    { name: "Albums", icon: "􀐋", path: "" },
    { name: "Songs", icon: "􀑪", path: "" },
  ];

  const Playlists = [
    { name: "All Playlists", icon: "􀦲", path: "" },
    { name: "Favoutite Songs", icon: "􀠧", path: "" },
  ];
  return (
    <>
      <div className="w-screen h-screen bg-[#dfdfdf] overflow-scroll">
        <Container maxWidth="xl">
          <Box
            sx={{
              p: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Parent div */}
            <Box
              sx={{
                p: "11px",
                width: "230px",
                border: "1px solid #F9FFFF",
                borderRadius: "17px",
                bgcolor: "#F3F9FC",
                height: "calc(100vh - 18px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                {/* window button */}
                <Box sx={{ display: "flex", alignItems: "center", gap: "9px" }}>
                  <Box
                    sx={{
                      height: "14px",
                      width: "14px",
                      borderRadius: "50%",
                      border: "1px solid #E40017",
                      bgcolor: "#FF5C60",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      height: "14px",
                      width: "14px",
                      borderRadius: "50%",
                      border: "1px solid #EFAD00",
                      bgcolor: "#FAC800",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      height: "14px",
                      width: "14px",
                      borderRadius: "50%",
                      border: "1px solid #00AC00",
                      bgcolor: "#35C759",
                    }}
                  ></Box>
                </Box>
                {/* Initial Menu */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: "10px",
                  }}
                >
                  {SideMenu.map((item, key) => (
                    <Box
                      key={key}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        py: "5px",
                        px: "20px",
                        borderRadius: "8px",
                        bgcolor: router.asPath === item.path && "#EBEFF1",
                        "&:hover": {
                          bgcolor: "#EBEFF1",
                          cursor: "default",
                        },
                      }}
                    >
                      <Typography
                        className="sfpro"
                        sx={{
                          width: "30px",
                          fontSize: "14px",
                          fontWeight: "bold",
                          color: router.asPath === item.path && "#FF0030",
                        }}
                      >
                        {item.icon}
                      </Typography>
                      <Typography
                        className="sfpro"
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          color: router.asPath === item.path && "#FF0030",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                {/* Library */}
                <Box sx={{ my: "15px" }}>
                  <Typography
                    className="sfpro"
                    sx={{
                      color: "#B7B9BA",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    Library
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      mt: "10px",
                    }}
                  >
                    {Library.map((item, key) => (
                      <Box
                        key={key}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          py: "5px",
                          px: "20px",
                          borderRadius: "8px",
                          bgcolor: router.asPath === item.path && "#EBEFF1",
                          "&:hover": {
                            bgcolor: "#EBEFF1",
                            cursor: "default",
                          },
                        }}
                      >
                        <Typography
                          className="sfpro"
                          sx={{
                            width: "30px",
                            fontSize: "14px",
                            fontWeight: "bold",
                            color: router.asPath === item.path && "#FF0030",
                          }}
                        >
                          {item.icon}
                        </Typography>
                        <Typography
                          className="sfpro"
                          sx={{
                            fontSize: "14px",
                            fontWeight: "bold",
                            color: router.asPath === item.path && "#FF0030",
                          }}
                        >
                          {item.name}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
                {/* Playlists */}
                <Box sx={{ my: "15px" }}>
                  <Typography
                    className="sfpro"
                    sx={{
                      color: "#B7B9BA",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    Playlists
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      mt: "10px",
                    }}
                  >
                    {Playlists.map((item, key) => (
                      <Box
                        key={key}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          py: "5px",
                          px: "20px",
                          borderRadius: "8px",
                          bgcolor: router.asPath === item.path && "#EBEFF1",
                          "&:hover": {
                            bgcolor: "#EBEFF1",
                            cursor: "default",
                          },
                        }}
                      >
                        <Typography
                          className="sfpro"
                          sx={{
                            width: "30px",
                            fontSize: "14px",
                            fontWeight: "bold",
                            color: router.asPath === item.path && "#FF0030",
                          }}
                        >
                          {item.icon}
                        </Typography>
                        <Typography
                          className="sfpro"
                          sx={{
                            fontSize: "14px",
                            fontWeight: "bold",
                            color: router.asPath === item.path && "#FF0030",
                          }}
                        >
                          {item.name}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
              {/* Logged In User */}
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Box
                  sx={{
                    height: "28px",
                    width: "28px",
                    borderRadius: "50%",
                    backgroundImage:
                      "linear-gradient(to bottom, #B5CCE8, #8A95C8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#FFFFFF",
                  }}
                  className="sfpro"
                >
                  MT
                </Box>
                <Typography
                  className="sfpro"
                  sx={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  Manan Tandon
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
}
