import React, { ReactNode } from "react";
import { Header } from "../Header/Header";
import { Aurora } from "../Header/Aurora";

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <Aurora />
      {children}
    </>
  );
};
