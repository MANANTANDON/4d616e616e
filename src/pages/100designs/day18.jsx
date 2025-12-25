import { Instagram, LinkedIn, X } from "@mui/icons-material";
import { IconButton, useMediaQuery } from "@mui/material";
import React, { useState } from "react";

export default function Day18() {
  const laptop = useMediaQuery("(min-width:500px)");
  const [value, setValue] = useState("");
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
          className="h-screen w-screen bg-[#FFFFFF] relative"
          style={{
            backgroundImage: "url(/images/designs/day18bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-7 py-4">
            <div className="fr text-[#E6FFFF] font-extralight text-4xl">
              <a href="/100designs/day18">Flex</a>
            </div>
            <div className="flex items-center gap-10">
              <div className="sfpro-text text-[#E6FFFF] cursor-pointer">
                Pricing
              </div>
              <div className="sfpro-text text-[#E6FFFF] cursor-pointer">
                Doc
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="sfpro-text border border-[#E6FFFF] text-[#E6FFFF] px-4 py-1.5 rounded-lg cursor-pointer">
                Sign in
              </button>
              <button className="sfpro-text border border-[#E6FFFF] bg-[#E6FFFF] px-4 py-1.5 rounded-lg cursor-pointer">
                Sign up
              </button>
            </div>
          </div>
          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center py-30">
            <div className="sfpro-text text-7xl text-[#FCFFFF]">
              Idea to SaaS
            </div>
            <div className="sfpro-text text-6xl text-[#FCFFFF]">
              in{" "}
              <span className="fr font-light">
                <i>minutes..</i>
              </span>
            </div>
            <div className="sfpro-text text-xl text-[#fcffff] font-noraml my-5">
              Describe what you want FlexApp builds it.
            </div>
            <div className="w-[550px] max-w-[550px] bg-[#262626] p-3 rounded-xl mt-5">
              <textarea
                placeholder="Build SaaS Dashboard..."
                rows={4}
                className="text-[#FFFFFF] text-sm w-full outline-0 resize-none"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="sfpro-text text-[#DFDFDF] text-xs border border-[#4B4B4B] py-1.5 px-2 rounded-md cursor-pointer">
                    􀉣 Attach
                  </div>
                  <select
                    className="sfpro-text text-[#DFDFDF] text-xs border border-[#4B4B4B] py-1.5 pl-2 rounded-md outline-0 cursor-pointer"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  >
                    <option value="">􀬚 Auto</option>
                    <option value="chat-gpt">Chat GPT</option>
                    <option value="claude">Claude</option>
                  </select>
                </div>
                <div className=" border border-[#4B4B4B] p-0.5 rounded-md">
                  <div className=" bg-[#3994DA] sfpro-text text-[#FFFFFF] py-0.5 px-1.5 rounded-sm cursor-pointer">
                    􀄨
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="flex flex-col items-center justify-between gap-4 absolute bottom-0 left-0 right-0 pb-5">
            <div className="flex items-center gap-4">
              <IconButton
                sx={{ background: "#00000050" }}
                disableFocusRipple
                disableTouchRipple
                disableRipple
              >
                <X className="text-[#FFFFFF]" />
              </IconButton>
              <IconButton
                sx={{ background: "#00000050" }}
                disableFocusRipple
                disableTouchRipple
                disableRipple
              >
                <LinkedIn className="text-[#FFFFFF]" />
              </IconButton>
              <IconButton
                sx={{ background: "#00000050" }}
                disableFocusRipple
                disableTouchRipple
                disableRipple
              >
                <Instagram className="text-[#FFFFFF]" />
              </IconButton>
            </div>
            <div className=" flex items-center gap-3">
              <div className="sfpro-text text-[#FFFFFF] cursor-pointer text-sm">
                Privacy Policy
              </div>
              <div className="sfpro-text text-[#FFFFFF] cursor-pointer text-sm">
                Terms of Service
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
