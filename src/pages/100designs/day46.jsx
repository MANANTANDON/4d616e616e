import React from "react";

const Day46 = () => {
  const MENU = ["Home", "Projects", "Services", "About", "Contact Us"];

  const handleClick = () => {
    alert("user logged in !");
  };

  const browseClick = () => {
    alert("browse handled !");
  };

  const ButtonDeisgn = ({ text, classname }) => (
    <button
      className={`bg-zinc-100 ${classname} px-6 py-2.5 rounded-4xl shadow-[inset_0_2px_6px_rgba(105,75,49,0.6)] cursor-pointer sfpro-text font-medium`}
      onClick={handleClick}
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
        className="h-screen w-screen bg-zinc-600 xl:px-[77px] lg:px-[30px] py-10 hidden lg:block"
        style={{
          backgroundImage: "url(/images/designs/day46/bg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="fr text-zinc-50 tracking-tighter text-3xl font-light">
            <i>Roomify</i>
          </h1>
          <div className="text-zinc-50 flex  lg:gap-10 xl:gap-15 font-light text-lg bg-zinc-100/30 px-6 py-2 rounded-4xl backdrop-blur-sm">
            {MENU.map((item, key) => (
              <a href="/100designs/day46" key={key}>
                {item}
              </a>
            ))}
          </div>
          <ButtonDeisgn text="Log in for Comfort" />
        </div>
        {/* Footer */}
        <div
          className="absolute xl:left-[77px] lg:left-[30px] xl:right-[77px] lg:right-[30px] bottom-10 flex flex-col gap-7"
          onClick={browseClick}
        >
          <h1 className="fr font-light text-zinc-50 text-7xl tracking-tighter">
            Design Rooms that define <i className="font-medium">you</i>
          </h1>
          <h2 className="sfpro-text text-zinc-100/80 text-lg">
            Our interior experts craft modern, timeless, and functional spaces
            tailored to your lifestyle. From concept
            <br />
            to comfort, which reflect you!
          </h2>
          <div className="flex gap-5">
            <ButtonDeisgn text="Book Your Design" />
            <button className="text-zinc-100 border border-zinc-100 px-6 py-2.5 rounded-4xl cursor-pointer">
              Browse Comfort
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Day46;
