import { Box, Menu } from "@mui/material";
import React, { useState } from "react";

export const WifiMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div
        className="sfpro-text cursor-default text-[14px] text-zinc-50"
        onClick={handleClick}
        id="wifi-icon"
        aria-controls={open ? "wifi-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        􀙇
      </div>
      <Menu
        id="wifi-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "wifi-icon",
        }}
        PaperProps={{
          sx: {
            mt: "4px",
            ml: "5px",
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
            p: 1,
            display: "flex",
            flexDirection: "column",
            gap: 0.7,
          }}
        >
          <div className="sfpro-text text-[#CECCCF] text-[12px]">
            Known Networks
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5 items-center">
              {/*wifi*/}
              <div className="sfpro-text text-zinc-50 bg-[#3B82F7] rounded-[100px] px-[1.7px] py-[0.7px] text-sm">
                􀙇
              </div>
              <div className="sfpro-text text-[12px] text-[#CECCCF]">
                4d616e616e-5G
              </div>
            </div>
            {/*lock.fill*/}
            <div className="sfpro-text text-[14px] text-[#CECCCF]">􀎡</div>
          </div>
        </Box>
      </Menu>
    </>
  );
};
