import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { HeaderAppleMenu } from "../HeaderAppleMenu";
import { useMediaQuery } from "@mui/material";

export const AppleMenu = ({ setShowApp, onShutdown }) => {
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleModalOpen = () => {
    setOpen(false);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleShutdown = () => {
    setOpen(false);
    onShutdown();
  };

  const menuItems = [
    {
      label: "About Manan",
      icon: "􁟬",
      onClick: handleModalOpen,
    },
    {
      label: "System Settings...",
      icon: "􁓹",
    },
    {
      label: "Sleep",
      icon: "􀜚",
    },
    {
      label: "Restart...",
      icon: "􀯆",
      onClick: () => setShowApp(false),
    },
    {
      label: "Shutdown...",
      icon: "􀆨",
      onClick: handleShutdown,
    },
  ];

  return (
    <>
      <div
        ref={buttonRef}
        className="cursor-default text-[14px] text-zinc-50 hover:bg-zinc-900/10 py-1 px-3 rounded-[100px]"
        onClick={() => setOpen((prev) => !prev)}
        id="apple-icon"
        aria-controls={open ? "apple-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        􀣺
      </div>

      {open && (
        <div
          ref={menuRef}
          id="apple-menu"
          className="absolute left-2 top-7 z-50 w-[250px]"
        >
          <HeaderAppleMenu>
            <div className="flex flex-col w-full">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className={`cursor-default rounded-md px-2 py-1 text-[13px] ${isDarkMode ? "text-zinc-100" : "text-zinc-900"} hover:bg-[rgb(73,119,220)] hover:text-zinc-100 flex gap-2 font-medium`}
                  onClick={item.onClick}
                >
                  <div className="w-5.5 font-light flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>{item.label}</div>
                </div>
              ))}
            </div>
          </HeaderAppleMenu>
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 z-60 flex items-start justify-center">
          <div className="absolute inset-0" onClick={handleModalClose} />

          <div className="relative mt-[12%] w-[200px] rounded-xl border border-white/30 bg-black/50 p-3 shadow-2xl backdrop-blur-[20px]">
            <div className="flex gap-1">
              <div
                className="h-3 w-3 rounded-full bg-[#ED6A5E] transition-all hover:bg-[#ED6A5E90]"
                onClick={handleModalClose}
              />

              <div className="h-3 w-3 rounded-full bg-[#54504E]" />

              <div className="h-3 w-3 rounded-full bg-[#54504E]" />
            </div>

            <div className="my-5">
              <div className="relative mx-auto h-[150px] w-[106px] overflow-hidden">
                <Image
                  src="/images/manananimoji.png"
                  fill
                  className="object-cover object-center"
                  alt="Manan Tandon"
                />
              </div>

              <h2 className="sfpro text-center text-[22px] font-extrabold text-white">
                Manan Tandon
              </h2>

              <p className="sfpro text-center text-[12px] text-lightgrey">
                CEO
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
