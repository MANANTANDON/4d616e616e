import { Apple, Google, X } from "@mui/icons-material";
import { Divider } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Day32() {
  return (
    <>
      <div
        className="h-screen w-screen flex items-center justify-center"
        style={{
          backgroundImage: "url(/images/designs/day32bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative flex items-center backdrop-blur-xs bg-zinc-600/10 rounded-[28px] overflow-hidden">
          <div className="h-[700px] max-h-[700px] w-[1000px] max-w-[1011px] overflow-hidden grid grid-cols-2">
            <div className=" bg-zinc-900/90 p-15 flex flex-col justify-between">
              <Image
                src="/images/designs/day32logo.png"
                layout="intrinsic"
                height={22}
                width={49}
                className="animate-fadeInDown"
              />
              <div className="animate-fadeInUp">
                <div className="text-[#FFFEFD] text-xl sfpro-text font-bold">
                  Sign up
                </div>
                <div className="text-[#FFFEFD60] text-[13px] sfpro-text font-normal my-3">
                  Create your BTR account and grow your share of the Bitcoin
                  Treasury Reserve.
                </div>
                <form className="flex flex-col gap-3 mt-6" autoComplete="off">
                  <input
                    className="w-full bg-stone-800/80 outline-0 text-zinc-300 py-2.5 px-4 rounded-xl text-[14px]"
                    type="email"
                    name="email"
                    autoComplete="off"
                    placeholder="Enter Email"
                  />

                  <input
                    className="w-full bg-stone-800/80 outline-0 text-zinc-300 py-2.5 px-4 rounded-xl text-[14px]"
                    type="password"
                    name="new-password"
                    autoComplete="new-password"
                    placeholder="Create Password"
                  />

                  <div className="flex gap-2">
                    <input type="checkbox" className="" />
                    <div className="text-sm text-stone-500">
                      I Agree To The Terms & Privacy Policy
                    </div>
                  </div>
                  <button className="bg-zinc-100 sfpro-text  py-2 rounded-xl font-semibold cursor-pointer text-[14px] mt-5 ">
                    Create Account
                  </button>
                </form>
                <Divider
                  className="sfpro-text"
                  sx={{
                    my: 2,
                    color: "#a1a1aa",
                    fontSize: "12px",
                    "&::before, &::after": {
                      borderColor: "#3f3f46",
                    },
                  }}
                >
                  or sign up via
                </Divider>
                <div className="flex items-center justify-between text-zinc-300 ">
                  <div className="flex items-center gap-2 bg-stone-800/60 px-5 py-2 rounded-lg cursor-pointer text-[15px]">
                    <Google fontSize="small" /> Google
                  </div>
                  <div className="flex items-center gap-2 bg-stone-800/60 px-5 py-2 rounded-lg cursor-pointer text-[15px]">
                    <Apple fontSize="small" /> Apple
                  </div>
                  <div className="flex items-center gap-2 bg-stone-800/60 px-5 py-2 rounded-lg cursor-pointer text-[15px]">
                    <X fontSize="small" /> Twitter
                  </div>
                </div>
              </div>
            </div>
            <div className=""></div>
          </div>

          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="borderGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <rect
              x="1"
              y="1"
              width="calc(100% - 2px)"
              height="calc(100% - 2px)"
              rx="28"
              ry="28"
              fill="none"
              stroke="url(#borderGradient)"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
