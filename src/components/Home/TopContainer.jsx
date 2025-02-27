import React from "react";
import { VIDEOLINK } from "../../constant";

export const TopContainer = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={VIDEOLINK} type="video/mp4" />
      </video>
      <div
        style={{
          zIndex: 1,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="websiteTitle">Manan Tandon</h1>
        <h2 style={{ fontWeight: 500 }}>(4d616e616e)</h2>
      </div>
    </div>
  );
};
