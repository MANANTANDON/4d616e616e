"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ProjectsModal } from "../Modals/ProjectsModal";

export const Folder = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const desktopIcons = [
    {
      type: "folder",
      src: "/images/folder.png",
      iconHeight: "60px",
      iconWidth: "70px",
      name: "Projects",
      description: "Click to view my projects.",
      left: "-220px",
      onClick: handleModalOpen,
    },
    {
      type: "file",
      src: "/images/resume.png",
      iconHeight: "70px",
      iconWidth: "47px",
      name: "Resume",
      description: "You can check my resume",
      left: "-220px",
      href: "/resume.pdf",
    },
  ];

  const IconComponent = ({ icon }) => {
    const content = (
      <div className="flex flex-col items-center justify-center">
        <div
          className="relative overflow-hidden cursor-pointer"
          style={{ height: icon.iconHeight, width: icon.iconWidth }}
        >
          <Image
            src={icon.src}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            alt={`${icon.name} Icon`}
          />
        </div>
        <p
          className={`sfpro text-center text-[13px] text-white [text-shadow:1px_1px_2px_rgba(0,0,0,0.5)] ${
            icon.type === "folder" ? "mt-1" : "mt-0"
          }`}
        >
          {icon.name}
        </p>
      </div>
    );

    return (
      <div className="relative">
        {icon.type === "file" ? (
          <a href={icon.href} target="_blank" rel="noopener noreferrer">
            {content}
          </a>
        ) : (
          <div onClick={icon.onClick}>{content}</div>
        )}
        <div
          className="absolute top-[30px] rounded-xl border border-[#66666680] bg-[#00000090] px-4 py-1"
          style={{ left: icon.left }}
        >
          <p className="text-[14px] font-light text-white">
            {icon.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="w-fit flex flex-col items-center gap-5">
        {desktopIcons.map((icon, index) => (
          <IconComponent key={index} icon={icon} />
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="pointer-events-auto">
            <ProjectsModal handleModalClose={handleModalClose} />
          </div>
        </div>
      )}
    </>
  );
};
