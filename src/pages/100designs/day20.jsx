import { Avatar, AvatarGroup, Rating, useMediaQuery } from "@mui/material";
import React from "react";

export default function Day20() {
  const laptop = useMediaQuery("(min-width:769px)");
  const MENU = ["Home", "Products", "Collections", "Inspiration"];
  const people = [
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
  ];

  const handleCartClick = () => {
    alert("Added to Cart!");
  };

  const handleShopNow = () => {
    alert("Yeah! item bought !");
  };

  const handleExploreCollectionClick = () => {
    alert("Collection Exlopred !");
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
            backgroundImage: "url(/images/designs/day20bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-10 py-5">
            <div className="fr text-[#FFFFFF] text-4xl">LOGO</div>
            <div className="flex items-center gap-7">
              {MENU.map((item, key) => (
                <div
                  className="fr text-[#FFFFFF99] hover:text-[#FFFFFF] font-extralight text-lg cursor-pointer"
                  key={key}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div
                className="sfpro-text text-[#FFFFFF] cursor-pointer text-xl"
                onClick={handleCartClick}
              >
                􀍩
              </div>
              <div
                className="bg-[#DA5B18] text-[#FFFFFF]  text-base xl:text-lg  px-6 py-2.5  rounded-xl cursor-pointer"
                onClick={handleShopNow}
              >
                Shop Now
              </div>
            </div>
          </div>
          {/*Center Part */}
          <div className="px-25 pt-25">
            <div className="fr text-[#FFFFFF] text-5xl/15 xl:text-7xl/22 font-extralight">
              Illuminate Your Life with <br />
              Premium Lights
            </div>
            <div className="text-[#FFFFFF] fr font-light text-sm xl:text-lg my-7">
              Upgrade your home with lights that make every moment feel special.
            </div>
            <div
              className="bg-[#DA5B18] text-[#FFFFFF] px-6 py-2.5 text-base xl:text-xl rounded-xl cursor-pointer w-fit"
              onClick={handleExploreCollectionClick}
            >
              Explore Collection
            </div>
          </div>
          {/* Cont Footer */}
          <div className="absolute bottom-0 left-0 right-0 px-25 pb-20 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <AvatarGroup max={3} className="sfpro-text">
                {people.map((item, key) => (
                  <Avatar
                    key={key}
                    alt="Remy Sharp"
                    src={item}
                    sx={{ width: 50, height: 50 }}
                  />
                ))}
              </AvatarGroup>
              <div>
                <Rating name="read-only" value={5} readOnly />
                <div className="text-[#FFFFFF]">From 1500+ ratings</div>
              </div>
            </div>
            <div className="text-[#FFFFFF] fr text-lg xl:text-2xl flex flex-col items-end  gap-2 xl:gap-4">
              <div>14-day return policy</div>
              <div>100% Satisfaction guarantee</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
