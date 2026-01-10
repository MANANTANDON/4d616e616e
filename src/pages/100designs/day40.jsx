import { Avatar, AvatarGroup } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Day40() {
  const MENU = ["How it works", "Features", "Pricing"];
  const people = [
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
  ];
  return (
    <>
      <div
        className="h-screen w-screen bg-zinc-900 pt-[30px] px-[57px]"
        style={{
          backgroundImage: "url(/images/designs/day40/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <h1 className="text-zinc-100 text-xl font-normal">Lumin</h1>
            <div className="flex items-center gap-10">
              {MENU.map((item, key) => (
                <h2
                  className="text-zinc-100 text-sm font-light cursor-pointer"
                  key={key}
                >
                  {item}
                </h2>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button className="text-zinc-100 text-sm font-semibold cursor-pointer">
              Log in
            </button>
            <button className="text-zinc-900 bg-zinc-100 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer">
              Sign up
            </button>
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex flex-col gap-7 pt-[70px]">
          <div className="sfpro-text text-zinc-100 bg-linear-to-r from-zinc-300/20 to-zinc-900/80 px-4 py-2 rounded-[100px] w-fit border border-zinc-100/20 flex items-center gap-2">
            <AvatarGroup max={3} className="sfpro-text">
              {people.map((item, key) => (
                <Avatar
                  key={key}
                  alt="Remy Sharp"
                  src={item}
                  sx={{ width: 20, height: 20 }}
                />
              ))}
            </AvatarGroup>
            Trusted by 1200+ peoples
          </div>
          <div className="text-zinc-200">
            <span className="sfpro-text text-7xl font-light tracking-tighter">
              Walk out of uncertainty.
            </span>
            <br />
            <span className="fr text-7xl font-extralight tracking-tighter">
              <i>Step into Clarity.</i>
            </span>
          </div>
          <p className="text-zinc-100/70 font-normal text-lg ">
            Lumin helps you understand what to don next - without dashboards,{" "}
            <br />
            noice or guesswork. It shows you what matters most by organizing
            <br />
            your data, tasks, and insights in one clear picture.
          </p>
          <div className="flex items-center gap-5">
            <button className="sfpro-text bg-zinc-100 px-6 py-3 font-medium rounded-xl cursor-pointer">
              Start For Free
            </button>
            <button className="sfpro-text text-zinc-100/90 font-light cursor-pointer">
              See How it works
            </button>
          </div>
        </div>
        {/* Footer Section */}
        <div className="absolute bottom-[57px] left-[57px] right-[57px] flex flex-col gap-5">
          <div className="text-zinc-100/80 text-lg">
            Trusted by Leading names
          </div>
          <div className="flex items-center gap-10">
            {Array.from(Array(4)).map((item, key) => (
              <Image
                src={`/images/designs/day39/${key + 1}.png`}
                alt="logos"
                key={key}
                height={30}
                width={100}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
