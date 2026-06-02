import React from "react";

export default function Day96() {
  const MENU = ["Discover", "Reviews", "Community", "Lists"];

  const handleSubmit = () => {
    alert("newsletter subscribed");
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen lg:hidden">
        <div className="border border-slate-600 bg-slate-800 p-5 text-zinc-100 rounded-3xl">
          Switch to Desktop
        </div>
      </div>
      <div
        className="relative isolate h-screen w-screen sfpro-text hidden lg:block bg-zinc-100 px-12 py-10"
        style={{
          backgroundImage: "url(/images/designs/day98/bg.png)",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-zinc-100/20 -z-10" />
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-[#3E2F28]">PAGETURN</h1>
          <div className="flex items-center gap-15 bg-zinc-100/20 backdrop-blur-xs px-6 py-3 rounded-[100px] border border-[#CABDAD] text-[17px] text-[#3E2F28]  tracking-tight">
            {MENU.map((item, key) => (
              <a href="" key={key}>
                {item}
              </a>
            ))}
          </div>
          <button className="bg-[#3E2F28] text-zinc-100 text-lg px-6 py-2.5 rounded-[100px] cursor-pointer tracking-tight border border-zinc-100/50">
            Join Newsletter
          </button>
        </div>
        {/* Hero */}
        <div className="flex flex-col items-center gap-5 mt-15">
          <h3 className="text-sm tracking-widest text-[#544C41] font-medium">
            {" "}
            JOIN 50,000+ READERS EVERY WEEK
          </h3>
          <p className="text-center fr text-7xl tracking-tight text-[#3E2F28]">
            Find books.
            <br />
            Share stories.
          </p>
          <p className="text-center text-lg text-[#3E2F28] tracking-tight">
            Curated reads, honest reviews, and a community
            <br /> that's always turning the page.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex items-center bg-zinc-100/30 rounded-[100px] pt-1 pr-1 pb-1 pl-4 gap-1 w-85 backdrop-blur-xs border border-[#3E2F2850]">
              <input
                placeholder="Enter your email"
                className="w-full outline-0 text-sm"
                type="email"
                required
              />
              <button
                className="cursor-pointer bg-[#3E2F28] text-zinc-100 px-4 py-2.5 rounded-[100px] text-sm font-light tracking-tight"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
