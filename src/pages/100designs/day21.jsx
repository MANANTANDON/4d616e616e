import { useMediaQuery } from "@mui/material";
import React from "react";

export default function Day21() {
  const laptop = useMediaQuery("(min-width:769px)");
  const MENU = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const handleGetStartedClick = () => {
    alert("Welcome aboard!");
  };

  const GetStartedButton = (
    <button
      className="bg-[#000102] text-[#FFFFFF] font-medium px-8 py-4 text-xl rounded-xl cursor-pointer"
      onClick={handleGetStartedClick}
    >
      Get Started
    </button>
  );
  return (
    <>
      {!laptop && (
        <div className="flex items-center justify-center h-screen">
          <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
            Switch to Desktop
          </div>
        </div>
      )}
      {laptop && (
        <div
          className="h-screen w-screen overflow-hidden bg-[#FFFFFF]"
          style={{
            backgroundImage: "url(/images/designs/day21bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Header */}
          <div className="sfpro-text flex items-center justify-between px-5 xl:px-25 py-10 bg-linear-to-t from-transparent to-zinc-50">
            <div className="text-4xl font-semibold">Traverse</div>
            <div className="flex items-center gap-5">
              {MENU.map((item, key) => (
                <div
                  key={key}
                  className={`text-xl  text-center w-25 max-w-25 ${
                    item.path === "/" ? "font-semibold" : "font-light"
                  } cursor-pointer hover:font-semibold`}
                >
                  {item.name}
                </div>
              ))}
            </div>
            {GetStartedButton}
          </div>
          {/* Hero Section */}
          <div className="py-10 flex flex-col items-center justify-center ">
            <div className="text-7xl/23 font-semibold text-center">
              Don't Just See The
              <br />
              World, Connect With It.
            </div>
            <div className="text-center text-[#3C5E79] font-medium text-2xl/10 my-7 ">
              We help you travel with purpose, connecting deeply with
              <br /> nature and communities while leaving a positive impact
              <br />
              wherever you go
            </div>

            {GetStartedButton}
          </div>
        </div>
      )}
    </>
  );
}
