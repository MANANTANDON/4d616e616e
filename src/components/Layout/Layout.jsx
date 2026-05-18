import React, { useEffect, useState } from "react";
import {
  LinearProgress,
  linearProgressClasses,
  styled,
  useMediaQuery,
} from "@mui/material";
import dynamic from "next/dynamic";
import styles from "./Layout.module.css";

const Desktop = dynamic(
  () => import("@/components/Desktop/Desktop").then((mod) => mod.Desktop),
  { ssr: false },
);
const Mobile = dynamic(
  () => import("@/components/Misc/Mobile").then((mod) => mod.Mobile),
  { ssr: false },
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
  const [isShutdown, setIsShutdown] = useState(false);
  const [showPressKey, setShowPressKey] = useState(false);

  useEffect(() => {
    let progressInterval;
    if (!showApp && !isShutdown) {
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
  }, [showApp, isRestarting, isShutdown]);

  // Handle shutdown sequence
  useEffect(() => {
    if (isShutdown) {
      const shutdownTimer = setTimeout(() => {
        setShowPressKey(true);
      }, 7000); // Reduced from 7 seconds to 3 seconds

      return () => clearTimeout(shutdownTimer);
    }
  }, [isShutdown]);

  // Handle keyboard events when in shutdown state
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (isShutdown && showPressKey) {
        setIsShutdown(false);
        setShowPressKey(false);
        setShowApp(false);
        setProgress(0);
      }
    };

    if (isShutdown && showPressKey) {
      window.addEventListener("keydown", handleKeyPress);
      return () => window.removeEventListener("keydown", handleKeyPress);
    }
  }, [isShutdown, showPressKey]);

  const handleRestart = () => {
    setIsRestarting(true);
    setShowApp(false);
  };

  const handleShutdown = () => {
    setShowApp(false);
    setIsShutdown(true);
    setShowPressKey(false);
  };

  const LoadingScreen = () => (
    <div className={styles.loadingContainer}>
      <h1
        className={`${styles.loadingTitle} sfpro`}
        aria-label="Loading screen"
      >
        m.
      </h1>
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

  const ShutdownScreen = () => (
    <div className={`shutdown-screen ${showPressKey ? "blurred" : ""}`}>
      {showPressKey && (
        <div className="sfpro shutdown-text">Press any key to enter.</div>
      )}
    </div>
  );

  return (
    <>
      {isShutdown && <ShutdownScreen />}

      {!showApp && !isShutdown && (
        <>
          <LoadingScreen />
          <div className={styles.hiddenPreload}>
            <Desktop />
            <Mobile />
          </div>
        </>
      )}

      {showApp && !isShutdown && (
        <>
          {isMobile ? (
            <Mobile />
          ) : (
            <Desktop setShowApp={handleRestart} onShutdown={handleShutdown} />
          )}
        </>
      )}
    </>
  );
};
