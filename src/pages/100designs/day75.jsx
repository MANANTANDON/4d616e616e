import { Person, SearchOutlined } from "@mui/icons-material";
import React from "react";

export default function Day75() {
  const MENU = ["Journeys", "The Cabin", "Dining", "Heritage"];
  const INFO = [
    { type: "DEPARTURE", value: "Gare du Nord" },
    { type: "DESTINATION", value: "Venice S.L" },
    { type: "STATUS", value: "Boarding" },
  ];
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div className="bg-zinc-900 h-screen w-screen sfpro-text hidden lg:block ">
        {/* Header */}
        <div className="flex items-center justify-between pt-[25px] pb-5 px-[50px] xl:px-[94px]">
          <h1 className="text-[#FFB5A0] fr text-3xl font-semibold tracking-tighter">
            Nocturne
          </h1>
          <div className="text-zinc-100 flex gap-[35px]">
            {MENU.map((item, key) => (
              <a href="" key={key} className="text-[15px]">
                {item}
              </a>
            ))}
          </div>
          <div className="text-zinc-100 flex items-center gap-6">
            <div className="text-[#888689] cursor-pointer">􀊫</div>
            <div className="text-[#888689] cursor-pointer">􀉭</div>
            <button className="text-[#E7A694] bg-[#8D2B0E] ml-3.5 cursor-pointer px-8 py-2.5 rounded-[100px] font-medium">
              Reserve
            </button>
          </div>
        </div>
        {/* Hero Section */}
        <div
          className="mx-[25px] mb-5 h-[calc(100vh-110px)] rounded-[20px] flex flex-col items-center justify-center gap-[30px] relative"
          style={{
            backgroundImage: "url(/images/designs/day75/bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-zinc-100 bg-zinc-100/20 px-3 py-1 rounded-[100px] tracking-widest text-sm -mt-20">
            EST. 1924 • SIGNATURE VOYAGES
          </div>
          <h2 className="text-center text-7xl/16 tracking-tighter font-bold fr text-zinc-100">
            The Art of the
            <br /> Journey
          </h2>
          <p className="text-center text-zinc-100 text-base/5">
            Experience the world at a different pace.
            <br />
            Where every city is a stroy told
          </p>
          <button className="bg-zinc-100 px-6 py-2.5 text-base rounded-[100px] cursor-pointer font-medium">
            Send your story
          </button>
          {/* Footer */}
          <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center">
            <div className="flex gap-10">
              {INFO.map((item, key) => (
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="text-[#A86E60] tracking-widest">
                    {item.type}
                  </div>
                  <div className="text-zinc-100 font-light flex items-center">
                    {item.value === "Boarding" && (
                      <span className="text-[#FFB961] text-[8px] mr-2">􀀁</span>
                    )}
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
