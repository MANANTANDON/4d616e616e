export const GetCurrentDayAndTime = () => {
  const now = new Date();
  return now.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};
