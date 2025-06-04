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
import styles from "./Layout.module.css";

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
  const [showProgressBar, setShowProgressBar] = useState(true);
  const [isRestarting, setIsRestarting] = useState(false);

  useEffect(() => {
    let progressInterval;
    if (!showApp) {
      setProgress(0);
      if (isRestarting) {
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
            setIsRestarting(false);
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
    <div className={styles.loadingContainer}>
      <Typography
        className={`${styles.loadingTitle} sfpro`}
        aria-label="Loading screen"
      >
        m.
      </Typography>
      {showProgressBar && (
        <div className={styles.progressContainer}>
          <BorderLinearProgress
            variant="determinate"
            value={progress}
            aria-label="Progress bar"
          />
        </div>
      )}
    </div>
  );

  return (
    <>
      {!showApp && (
        <>
          <LoadingScreen />
          <div className={styles.hiddenPreload}>
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
