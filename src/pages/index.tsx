"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return <div>Loading...</div>;

  return (
    <div className="dark:bg-gray-950 bg-slate-100 h-screen p-4 ">
      <div className="dark:bg-slate-800 bg-slate-200 rounded-md p-2 dark:text-white flex gap-4">
        <div
          className="inline-flex flex-none rounded-full border border-orange-300 bg-orange-100 p-4 sm:p-2 dark:border-orange-300/10 dark:bg-orange-400/10"
          style={{
            position: "relative",
            overflow: "hidden",
            height: "40px",
            width: "40px",
          }}
        >
          <Image
            src="/manan.jpeg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Manan Tandon"
          />
        </div>
        <div>
          <p className="text-sm dark:text-gray-400 text-gray-700">
            <span>Welcome to </span>
            <span className="font-semibold dark:text-white">
              Manan Tandon (manantandon.com){" "}
            </span>
            <span>website</span>
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "20px",
            }}
          >
            <p className="text-xs dark:text-gray-400 text-gray-700">
              IND: {time.toLocaleTimeString("en-IN", { hour12: true })}
            </p>
            <p className="text-xs dark:text-gray-400 text-gray-700">
              LON:{" "}
              {time
                .toLocaleTimeString("en-GB", {
                  timeZone: "Europe/London",
                  hour12: true,
                })
                .replace(/(am|pm)/i, (match) => match.toUpperCase())}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

//4d616e616e Portfolio
