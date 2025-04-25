import { Box, Divider, Menu, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const useBatteryStatus = () => {
  const [batteryInfo, setBatteryInfo] = useState({
    level: null,
    charging: null,
  });

  useEffect(() => {
    const getBatteryStatus = async () => {
      if (navigator.getBattery) {
        const battery = await navigator.getBattery();

        setBatteryInfo({
          level: Math.round(battery.level * 100),
          charging: battery.charging,
        });

        const updateLevel = () =>
          setBatteryInfo((prev) => ({
            ...prev,
            level: Math.round(battery.level * 100),
          }));
        const updateCharging = () =>
          setBatteryInfo((prev) => ({ ...prev, charging: battery.charging }));

        battery.addEventListener("levelchange", updateLevel);
        battery.addEventListener("chargingchange", updateCharging);

        return () => {
          battery.removeEventListener("levelchange", updateLevel);
          battery.removeEventListener("chargingchange", updateCharging);
        };
      }
    };

    getBatteryStatus();
  }, []);

  return batteryInfo;
};

export const Charging = ({ type }) => {
  const { level, charging } = useBatteryStatus();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {level !== null ? (
        <>
          <Typography
            className="sfpro"
            sx={{
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              cursor: "default",
              px: 1,
              "&:hover": {
                bgcolor: "#00000020",
                cursor: "default",
                borderRadius: "5px",
              },
            }}
            onClick={handleClick}
            id="charging-icon"
            aria-controls={open ? "charging-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {type !== "mobile" && (
              <span style={{ fontSize: "12px" }}>{level}% </span>
            )}
            {charging
              ? "􀢋"
              : level <= 25
              ? "􀛩"
              : level <= 50
              ? "􀺶"
              : level <= 75
              ? "􀺸"
              : "􀛨"}
          </Typography>
          <Menu
            id="charging-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "charging-icon",
            }}
            PaperProps={{
              sx: {
                mt: "4px",
                ml: "-150px",
                py: "0px !important ",
                width: "230px",
                bgcolor: "rgba( 0, 0, 0, 0.5 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 20px )",
                border: "1px solid rgba( 255, 255, 255, 0.3 )",
                borderRadius: "6px",
              },
            }}
            sx={{
              "& .MuiList-root.MuiMenu-list": {
                paddingTop: 0,
                paddingBottom: 0,
              },
            }}
          >
            <Box
              sx={{
                p: 1.5,
              }}
            >
              <Typography
                className="sfpro"
                sx={{ color: "#FFFFFF", fontSize: "14px" }}
              >
                Battery
              </Typography>
              <Typography
                className="sfpro"
                sx={{ color: "#FFFFFF90", fontSize: "12px" }}
              >
                Power Source: Battery
              </Typography>
              <hr style={{ border: "0.5px solid #FFFFFF90" }} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              ></Box>
            </Box>
          </Menu>
        </>
      ) : (
        <Tooltip arrow title="Real Time Battery does not supports Safari.">
          <Typography
            className="sfpro"
            sx={{
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              cursor: "default",
              px: 1,
              "&:hover": {
                bgcolor: "#00000020",
                cursor: "default",
                borderRadius: "5px",
              },
            }}
          >
            <span style={{ fontSize: "12px" }}>100% </span>
            􀛨
          </Typography>
        </Tooltip>
      )}
    </div>
  );
};
