import { Divider, Grid2, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Day26() {
  const laptop = useMediaQuery("(min-width:769px)");

  const handleSubmit = () => {
    alert("User Logged in !");
  };

  const LoginWithGoogle = () => {
    alert("Logged in google !");
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
        <div className="h-screen w-screen bg-[#FFFFFF] relative">
          <div className="absolute top-0 left-0 right-0 border-b border-[#ECECEC] h-[38px]" />
          <div className="absolute bottom-0 left-0 right-0 border-t border-[#ECECEC] h-[38px]" />
          <div className="absolute bottom-0 left-[38px] top-0 border-l border-[#ECECEC]" />
          <div className="absolute top-0 bottom-0 left-[calc(50%-38px)] border-l border-[#ECECEC]" />

          <Grid2 container>
            <Grid2
              size={6}
              className="h-screen flex flex-col items-center justify-center relative"
            >
              <Image
                src={"/images/designs/day26grad.png"}
                layout="intrinsic"
                height={141}
                width={642}
                className="absolute bottom-0"
              />
              <Image
                src={"/images/designs/day26logo.png"}
                layout="intrinsic"
                height={33}
                width={44}
              />
              <div className="text-[#1B1B1B] sfpro-text font-medium text-4xl mt-7">
                Get started with Born
              </div>
              <div className="sfpro-text text-[#5E5E5E] text-lg font-normal mt-3">
                Already have an account?{" "}
                <a href="">
                  <u>Log in</u>
                </a>
              </div>
              <form onSubmit={handleSubmit} className="mt-8">
                <div className="w-[350px] max-w-[350px] xl:w-[450px] xl:max-w-[450px]">
                  <div className="sfpro-text text-[#3C3C3C] font-medium mb-3">
                    Enter your email
                  </div>
                  <input
                    type="email"
                    autoComplete="off"
                    placeholder="name@gmail.com"
                    className="w-full border border-[#E5E5E5] sfpro-text p-3 rounded-lg outline-0 text-[#383838] font-light"
                  />
                </div>
                <div className="w-[350px] max-w-[350px] xl:w-[450px] xl:max-w-[450px] mt-5">
                  <div className="sfpro-text text-[#3C3C3C] font-medium mb-3">
                    Password
                  </div>
                  <input
                    type="password"
                    placeholder="your password"
                    className="w-full border border-[#E5E5E5] sfpro-text p-3 rounded-lg outline-0 text-[#383838] font-light"
                    autoComplete="new-password"
                  />
                </div>
                <button
                  type="submit"
                  className="p-3 bg-[#313131] w-full rounded-lg sfpro-text text-[#f1f1f1] cursor-pointer mt-5 font-medium"
                >
                  Continue
                </button>
              </form>
              <div className="w-[350px] max-w-[350px] xl:w-[450px] xl:max-w-[450px] my-8">
                <Divider className="sfpro-text font-extralight text-[#4C4C4C]">
                  <span className="px-16">OR</span>
                </Divider>
              </div>
              <button
                className="p-3 border border-[#D7D7D7] w-[350px] max-w-[350px] xl:w-[450px] xl:max-w-[450px] sfpro-text text-[#3D3D3D] rounded-lg  font-medium cursor-pointer flex items-center justify-center gap-4"
                onClick={LoginWithGoogle}
              >
                <Image
                  src={"/images/designs/google.png"}
                  layout="intrinsic"
                  height={20}
                  width={20}
                />
                Continue with Google
              </button>
            </Grid2>
            <Grid2 size={6} className="h-screen relative">
              <Image
                src={"/images/designs/day26bg.png"}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </Grid2>
          </Grid2>
        </div>
      )}
    </>
  );
}
