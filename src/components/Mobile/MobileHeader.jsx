import React, { useEffect, useState } from "react";
import { MobileCharging } from "../Misc/MobileCharging";

export const MobileHeader = () => {
  const getTime = () =>
    new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
    });

  const [currentTime, setCurrentTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getTime());
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between pt-2 mx-9">
      <div className="sfpro-text text-zinc-100 font-semibold text-[14px]">
        {currentTime}
      </div>

      <div className="flex items-center gap-[5px]">
        <div className="sfpro-text text-zinc-100 text-[14px]">􀭧</div>
        <div className="sfpro-text text-zinc-100 text-[14px]">􀙇</div>
        <MobileCharging />
      </div>
    </div>
  );
};
