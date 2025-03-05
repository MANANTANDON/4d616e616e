//REACT IMPORT
import React from "react";

//Components
import { Header } from "@/components/Header/Header";
import { TimeCard } from "@/components/Misc/TimeCard";
import { Mobile } from "@/components/Misc/Mobile";

//MUI IMPORTS

export const Layout = () => {
  return (
    <>
      <Mobile />
      <Header />
      <TimeCard />
    </>
  );
};
