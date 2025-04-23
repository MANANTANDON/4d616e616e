import { useEffect, useState } from "react";

export const useCurrentMobileTime = () => {
  const getTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    hours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${formattedMinutes}`;
  };

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 60000); // Update every 1 minute

    return () => clearInterval(interval); // Cleanup
  }, []);

  return time;
};
