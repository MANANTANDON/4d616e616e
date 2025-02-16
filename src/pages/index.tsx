import React from "react";

export default function Home() {
  return (
    <div className="dark:bg-gray-950 bg-slate-100 h-screen p-4 ">
      <div className="dark:bg-slate-800 bg-slate-200 rounded-md p-2 dark:text-white flex gap-4">
        <span className="inline-flex flex-none rounded-full border border-pink-300 bg-pink-100 p-4 sm:p-2 dark:border-pink-300/10 dark:bg-pink-400/10">
          <svg className="size-6 stroke-pink-700 dark:stroke-pink-500"></svg>
        </span>
        <div>
          <p className="text-sm dark:text-gray-400 text-gray-700">
            <span className="font-semibold dark:text-white">Manan Tandon</span>
            <span> mentioned you in</span>
            <span className="font-semibold dark:text-white">
              {" "}
              Website Development
            </span>
          </p>
          <p className="text-xs dark:text-gray-400 text-gray-700">9:35 a.m</p>
        </div>
      </div>
    </div>
  );
}

//4d616e616e Portfolio
