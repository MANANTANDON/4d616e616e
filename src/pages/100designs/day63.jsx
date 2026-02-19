import React from "react";

const Day63 = () => {
  const date = new Date();
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div className="h-screen w-screen bg-[#000000] sfpro-text py-[17px] px-7 hidden lg:block">
        {/* Header */}
        <div className="flex items-center justify-between animate-fadeInDown">
          <div className=" text-zinc-100 font-bold text-xl tracking-tighter">
            Kath.designs
          </div>
          <button className="bg-[#1A1A1A] text-zinc-100 w-[150px] max-w-[150px] py-2 rounded-[100px] cursor-pointer">
            􀜓
          </button>
          <button className="bg-zinc-100 tracking-tighter font-light cursor-pointer px-7 py-2 rounded-[100px]">
            LET'S CONNECT
          </button>
        </div>
        {/* Hero Section */}
        <div
          className="h-[700px] max-h-[700px] w-full my-[23px] relative animate-fadeInUp"
          style={{
            backgroundImage: "url(/images/designs/day63/bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "9px",
          }}
        >
          <div className="absolute bottom-[42px] left-[38px] right-[38px] flex justify-between animate-fadeInUp">
            <div className="flex flex-col text-zinc-100 gap-15 xl:gap-20">
              <p className=" text-2xl/7 xl:text-3xl/9">
                Brand and UI /UX
                <br />
                Designer based in
                <br />
                London
              </p>
              <a href="" className="tracking-wider">
                SEE MY WORK
              </a>
            </div>
            <div className="text-[200px]/40 xl:text-[300px]/60 -tracking-[27px] xl:-tracking-[37px] text-zinc-100 font-bold">
              Kath
            </div>
            <div className="text-xl xl:text-3xl/9 tracking-widest text-zinc-100">
              © {date.getFullYear()}
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="flex items-center justify-center">
          <a
            href=""
            class="font-medium bg-linear-to-r from-zinc-100/20 to-zinc-100 bg-clip-text text-transparent"
          >
            SCROLL DOWN
          </a>
        </div>
      </div>
    </>
  );
};

export default Day63;
