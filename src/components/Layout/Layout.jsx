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

  const [showApp, setShowApp] = useState(false); // App visible
  const [progress, setProgress] = useState(0); // Progress percent
  const [showProgressBar, setShowProgressBar] = useState(true); // Controls visibility
  const [isRestarting, setIsRestarting] = useState(false); // Restart trigger

  useEffect(() => {
    let progressInterval;

    if (!showApp) {
      setProgress(0);

      if (isRestarting) {
        // On restart, delay progress bar by 5s
        setShowProgressBar(false);
        const delayTimeout = setTimeout(() => {
          setShowProgressBar(true);
          startProgress();
        }, 5000);

        return () => {
          clearTimeout(delayTimeout);
          clearInterval(progressInterval);
        };
      } else {
        // First load: show immediately
        setShowProgressBar(true);
        startProgress();
      }
    }

    function startProgress() {
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 0.7;
          if (next >= 100) {
            clearInterval(progressInterval);
            setShowApp(true);
            setIsRestarting(false); // Reset restart flag
          }
          return next;
        });
      }, 30);
    }

    return () => clearInterval(progressInterval);
  }, [showApp, isRestarting]);

  const handleRestart = () => {
    setIsRestarting(true);
    setShowApp(false);
  };

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
      {showProgressBar && (
        <Box sx={{ width: { xs: "40%", md: "20%" } }}>
          <BorderLinearProgress
            variant="determinate"
            value={progress}
            aria-label="Progress bar"
          />
        </Box>
      )}
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

      {showApp && (
        <>{isMobile ? <Mobile /> : <Desktop setShowApp={handleRestart} />}</>
      )}
    </>
  );
};
