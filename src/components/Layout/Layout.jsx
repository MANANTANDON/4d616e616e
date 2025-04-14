import React from "react";
import { useMediaQuery } from "@mui/material";

//Components
import { Mobile } from "@/components/Misc/Mobile";
import { Desktop } from "@/components/Desktop/Desktop";

export const Layout = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");

  return <>{isDesktop ? <Desktop /> : <Mobile />}</>;
};
