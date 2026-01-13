import { Avatar, AvatarGroup, useMediaQuery } from "@mui/material";
import React from "react";

export default function Day41() {
  const laptop = useMediaQuery("(min-width:769px)");
  const MENU = ["About", "Training", "Accountability", "Support", "Contact"];

  const people = [
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
  ];

  const handleClick = () => {
    alert("Wlcome user !");
  };

  const BUTTON = (
    <button
      className="sfpro-text bg-zinc-100/20 text-zinc-100 px-6 py-2.5 rounded-[100px] border border-zinc-100/30 text-[19px] backdrop-blur-lg cursor-pointer"
      onClick={handleClick}
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
          className="h-screen w-screen bg-zinc-900"
          style={{
            backgroundImage: "url(/images/designs/day41/bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-zinc-900/30">
            {/* HEADER */}
            <div className="flex items-center justify-between px-[70px] pt-5">
              <div className="sfpro-text text-3xl font-semibold text-zinc-100/90">
                Clario
              </div>
              <div className="flex items-center gap-10">
                {MENU.map((item, key) => (
                  <button
                    key={key}
                    className="sfpro-text text-zinc-100 font-light cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </div>
              {BUTTON}
            </div>
            {/* HERO SECTION */}
            <div className="flex flex-col items-center gap-5 justify-center py-60">
              <div className="text-center sfpro-text text-zinc-200/90 text-6xl font-semibold">
                Turn Mental Chaos
                <br />
                Into Calm
              </div>
              {BUTTON}
            </div>
            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 px-[70px] pb-5 flex items-center justify-between bg-linear-to-t from-zinc-950/80 to-transparent">
              <p className="sfpro-text text-zinc-100 font-normal text-xl">
                Transform stress and confusion into <br /> calm, focus and
                confident decision.
              </p>
              <div className="flex flex-col items-center gap-3 ">
                <AvatarGroup max={3} className="sfpro-text">
                  {people.map((item, key) => (
                    <Avatar
                      key={key}
                      alt="Remy Sharp"
                      src={item}
                      sx={{ width: 35, height: 35 }}
                    />
                  ))}
                </AvatarGroup>
                <h1 className="sppro-text text-zinc-100 font-normal text-[21px]">
                  <span className="font-semibold">1000+</span> Happy Clients
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
