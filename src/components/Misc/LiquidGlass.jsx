export const LiquidGlass = ({
  children,
  x1 = "0%",
  y1 = "0%",
  x2 = "100%",
  y2 = "100%",
}) => {
  return (
    <>
      {/* Main container with frosted glass effect */}
      <div className="relative inline-flex w-fit items-center justify-center backdrop-blur-md bg-zinc-300/20 rounded-[17px] py-1.5 px-6">
        {/* Text content */}
        {children}
        {/* SVG gradient border */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* 
              Gradient configuration:
              - Change x1, y1, x2, y2 to adjust gradient direction
              - Current: x1="0%" y1="0%" x2="100%" y2="100%" (top-left to bottom-right diagonal)
              - For horizontal: x1="0%" y1="0%" x2="100%" y2="0%"
              - For vertical: x1="0%" y1="0%" x2="0%" y2="100%"
              - For other diagonal: x1="100%" y1="0%" x2="0%" y2="100%"
            */}
            <linearGradient
              id="borderGradient"
              x1={x1} // Start X position
              y1={y1} // Start Y position
              x2={x2} // End X position
              y2={y2} // End Y position
            >
              {/* Adjust stopColor values for different colors and opacity */}
              <stop offset="0%" stopColor="#F0EFED" /> {/* Start color */}
              <stop offset="60%" stopColor="#FFFFFF10" /> {/* Middle color */}
              {/* <stop offset="100%" stopColor="#FFFFFF70" />  End color */}
            </linearGradient>
          </defs>
          <rect
            x="1"
            y="1"
            width="calc(100% - 2px)"
            height="calc(100% - 2px)"
            rx="17" // Adjust for border radius (same value in rounded-[25px] above)
            ry="17" // Adjust for border radius
            fill="none"
            stroke="url(#borderGradient)"
            strokeWidth="1" // Adjust for border thickness
          />
        </svg>
      </div>
    </>
  );
};
