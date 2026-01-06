import { useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Day37() {
  const laptop = useMediaQuery("(min-width:769px)");
  const DATA = [
    { type: "Clients", value: "100+" },
    { type: "Evaluation", value: "$40m" },
    { type: "Completed Projects", value: "90+" },
  ];

  const getCurrentTime24 = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const [time, setTime] = useState(getCurrentTime24());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime24());
    }, 60000);

    return () => clearInterval(interval);
  }, []);
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
          className="relative h-screen w-screen bg-zinc-900"
          style={{
            backgroundImage: "url(/images/designs/day37/bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-10 py-6">
            <div className="sfpro-text text-zinc-200/70 text-3xl font-semibold">
              Thorfn
            </div>
            <div className="sfpro-text text-zinc-200/70 text-base">
              India * {time}
            </div>
            <div className="sfpro-text text-zinc-200/70 text-2xl cursor-pointer">
              [Menu]
            </div>
          </div>
          {/* Hero */}
          <div className="px-10 flex flex-col gap-10 my-20">
            <h1 className="sfpro-text text-zinc-100/70 text-8xl font-light tracking-tighter">
              Where ambition
              <br />
              meets elite execution.
            </h1>
            <button className="sfpro-text w-fit bg-zinc-200/80 px-6 py-2.5 rounded-[100px] cursor-pointer font-medium text-lg">
              Work with us 􀄫
            </button>
          </div>
          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 px-10 pt-6 pb-15 flex items-center justify-between">
            <div className="sfpro-text  text-zinc-200/60 text-xl max-[1026px]:text-base">
              Ashlone transforms brands into unstoppable forces built
              <br /> with the precision of sports, the elegance of design, and
              <br />
              the strategy of world-class commerce.
            </div>
            <div className="flex flex-row gap-15">
              {DATA.map((item, key) => (
                <div className="flex flex-col  sfpro-text" key={key}>
                  <span className="text-zinc-200/90 text-3xl font-light tracking-tighter">
                    {item.value}
                  </span>
                  <span className="text-zinc-200/50 font-light">
                    {item.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
