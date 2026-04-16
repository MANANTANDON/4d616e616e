import React from "react";

export default function Day82() {
  const MENU = ["About", "How it Works", "Results", "Service", "Pricing"];

  const CTAButton = ({ text, classname }) => (
    <button
      className={`${classname} cursor-pointer border-2 border-zinc-800 px-6 py-3 rounded-xl font-medium`}
    >
      {text}
    </button>
  );
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className=" border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="h-screen w-screen sfpro-text hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day82/bg.png)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-center pt-[22px]">
          <div className="border-2 border-[#EDE7D9] flex items-center justify-between w-[1200px] max-w-[1200px] p-4 rounded-2xl">
            <h1 className="fr tracking-tighter text-4xl font-light">
              <i>Joanna Deloume</i>
            </h1>
            <div className="flex items-center gap-4 font-normal text-lg tracking-tight">
              {MENU.map((item, key) => (
                <a href="" key={key}>
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-[7px]">
              <CTAButton text="Contact Me" classname="" />
              <CTAButton text="Book Now" classname="bg-[#75C8EE]" />
            </div>
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-[25px] mt-30">
          <h2 className="text-center fr text-7xl">
            Spaces are limited, <br />
            the choice is yours
          </h2>
          <p className="text-center text-lg/6 font-medium">
            I work with a limited number of students at a time to give each
            <br />
            one full attention and real results.
          </p>
          <CTAButton text="Book Your First Lesson" classname="bg-[#75C8EE]" />
        </div>
      </div>
    </>
  );
}
