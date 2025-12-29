import React from "react";
import { Header } from "../Header/Header";
import { MusicWidget } from "../Misc/MusicWidget";
import { Folder } from "../Misc/Folder";
import { Dock } from "./Dock/Dock";
import { NotesWidget } from "../Misc/NotesWidget";

export const Desktop = ({ setShowApp, onShutdown }) => {
  return (
    <>
      <Header setShowApp={setShowApp} onShutdown={onShutdown} />
      <div className="flex justify-between px-4 py-6">
        <div className="flex flex-col gap-4">
          <MusicWidget />
          <NotesWidget />
        </div>
        <div>
          <Folder />
        </div>
      </div>
      {/* Dock */}
      <Dock />
    </>
  );
};
