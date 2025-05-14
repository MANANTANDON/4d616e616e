import React, { useEffect, useState } from "react";
import {
  Box,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import dynamic from "next/dynamic";

//Components
const Desktop = dynamic(
  () => import("@/components/Desktop/Desktop").then((mod) => mod.Desktop),
  { ssr: false }
);

const Mobile = dynamic(
  () => import("@/components/Misc/Mobile").then((mod) => mod.Mobile),
  { ssr: false }
);

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#3c3c3c",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
  },
}));

export const Layout = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [showApp, setShowApp] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 0.7; // Faster progression for smoother 3 seconds
        if (next >= 100) {
          clearInterval(interval);
          setShowApp(true);
        }
        return next;
      });
    }, 30); // Ensuring progress happens within 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  const LoadingScreen = () => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "#000000",
        color: "#FFFFFF",
        m: -1,
        gap: 3,
        overflowY: "hidden",
      }}
    >
      <Typography
        sx={{ fontSize: "60px", fontWeight: "bolder" }}
        className="sfpro"
        aria-label="Loading screen"
      >
        m.
      </Typography>
      <Box sx={{ width: { xs: "40%", md: "20%" } }}>
        <BorderLinearProgress
          variant="determinate"
          value={progress}
          aria-label="Progress bar"
        />
      </Box>
    </Box>
  );

  return (
    <>
      {!showApp && (
        <>
          <LoadingScreen />
          <div style={{ display: "none" }}>
            <Desktop />
            <Mobile />
          </div>
        </>
      )}

      {showApp && <>{isMobile ? <Mobile /> : <Desktop />}</>}
    </>
  );
};
