import { Avatar, AvatarGroup, useMediaQuery } from "@mui/material";
import React from "react";

export default function Day19() {
  const laptop = useMediaQuery("(min-width:769px)");
  const MENU = ["About", "Services", "Contact"];
  const people = [
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
  ];
  const handleClick = () => {
    alert("Service Booked !");
  };
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
            backgroundImage: "url(/images/designs/day19bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between py-4 px-10 bg-linear-to-t from-transparent to-zinc-900/70">
            <div className="sfpro-text flex items-center gap-2">
              <div className="text-[#F6B849] text-3xl">􁇗</div>
              <div className="text-[#FFFFFF] text-2xl">Power Pro</div>
            </div>
            <div className="sfpro-text flex items-center gap-10">
              {MENU.map((item, key) => (
                <div key={key} className="sfpro-text text-[#FFFFFF]">
                  {item}
                </div>
              ))}
            </div>
            <div className="bg-[#FFFFFF] w-fit flex items-center gap-5 p-2 rounded-[40px] ">
              <div className="text-xl pl-3">Book A Service</div>
              <button
                className="sfpro-text font-extralight text-xl bg-[#1f1f1f] text-[#FFFFFF] h-10 w-10 rounded-[30px] cursor-pointer"
                onClick={handleClick}
              >
                􀰾
              </button>
            </div>
          </div>
          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 px-10 pb-10 bg-linear-to-b from-transparent to-zinc-900/90">
            <div className="sfpro-text text-[#FFFFFF] text-5xl/15 ">
              Reliable, Safe and Fast
              <br /> Electrical Services From
              <br /> Experts You Can Trust
            </div>
            <div className="flex justify-between mt-5">
              <div className="bg-[#FFFFFF] w-fit flex items-center gap-5 p-2 rounded-[40px] h-fit">
                <div className="text-xl pl-3">Book A Service</div>
                <button
                  className="sfpro-text font-extralight text-xl bg-[#1f1f1f] text-[#FFFFFF] h-10 w-10 rounded-[30px] cursor-pointer"
                  onClick={handleClick}
                >
                  􀰾
                </button>
              </div>
              <div>
                <div className="text-[#FFFFFF] sfpro-text">
                  Get certified electricians for installation, repairs,
                  <br />
                  maintanence, and full electrical upgrades delivered
                  <br /> with guaranteed safety and ling-lasting quality.
                </div>
                <div className="flex items-center justify-center gap-5 mt-4">
                  <AvatarGroup max={3} className="sfpro-text">
                    {people.map((item, key) => (
                      <Avatar
                        key={key}
                        alt="Remy Sharp"
                        src={item}
                        sx={{ width: 30, height: 30 }}
                      />
                    ))}
                  </AvatarGroup>
                  <div className="flex flex-col items-center text-[#FFFFFF] sfpro-text">
                    <div>1500 +</div>
                    <div>Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
