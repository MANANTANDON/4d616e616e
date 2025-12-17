import { Grid2, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Day14() {
  const laptop = useMediaQuery("(min-width:500px)");
  const menu = ["How It Works", "Use Cases", "Pricing", "Research Feed"];
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
          className="h-screen w-screen"
          style={{
            backgroundImage: "url(/images/designs/day14.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Header */}
          <div className="absolute top-5 left-0 right-0 flex items-center justify-center">
            <div
              className="flex items-center gap-15  bg-zinc-500/20 w-fit px-4 py-3 rounded-[100px] border-t border-zinc-50/20 backdrop-blur-sm"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
            >
              <Image
                src={"/images/designs/perplexity.png"}
                layout="intrinsic"
                height={35}
                width={30}
              />
              {menu.map((item, key) => (
                <div key={key} className="varsf font-light text-zinc-50">
                  {item}
                </div>
              ))}
            </div>
          </div>
          {/* Hero Footer */}
          <div className="absolute bottom-0 left-10 right-10 pb-6">
            <div className=" pb-5 border-b border-zinc-50/20">
              <div className="text-zinc-50/90 text-[50px] lg:text-[70px] font-light varsf">
                Perplexity AI
              </div>
              <Grid2 container className="-mt-3">
                <Grid2 size={{ sm: 7, md: 8 }}>
                  <div className="text-zinc-50/70 text-[30px] lg:text-[40px]font-light varsf">
                    Where Knowledge Begins.
                  </div>
                </Grid2>
                <Grid2 size={{ sm: 5, md: 4 }}>
                  <button className="border border-zinc-50 varsf font-extralight text-zinc-50 py-3 px-4 rounded-[100px] backdrop-blur-lg bg-zinc-400/20 ">
                    Start Exploring
                  </button>
                </Grid2>
              </Grid2>
            </div>
            <div className="mt-5">
              <Grid2 container>
                <Grid2 size={{ sm: 7, md: 8 }}></Grid2>
                <Grid2 size={{ sm: 5, md: 4 }}>
                  <div className="varsf text-zinc-50 font-extralight">
                    Discovery doesn't always begin with knowing - it starts with
                    questions. Context that guide understanding forward.
                  </div>
                  <div className="varsf text-zinc-50 font-extralight mt-4">
                    Lumen Atlas is your companion for deeper insight. A calm
                    interface for asking better questions and drawing
                    thoughtful. Less noise. More meaning.
                  </div>
                </Grid2>
              </Grid2>
            </div>
            <div className="flex items-center gap-5 lg-gap-10">
              <div className="varsf text-zinc-50 font-extralight text-sm">
                Clarity begins with a good question.
              </div>
              <div className="varsf text-zinc-50 font-extralight text-sm">
                Perplexity AI ©2025
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
