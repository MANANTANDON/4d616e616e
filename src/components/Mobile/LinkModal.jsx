import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "30px",
  outline: "none",
  width: "calc(100% - 70px)",
  py: "22px",
  pb: "16px",
  px: "16px",
};

export const LinkModal = ({ clickLink, open, setOpen }) => {
  return (
    <div>
      <Modal open={open}>
        <Box sx={style} className="bg-zinc-200/96 border border-zinc-100">
          <div className="sfpro-text font-bold px-3 text-[17px]">
            Open "{clickLink?.name}"?
          </div>
          <div className="sfpro-text text-zinc-900/50 text-sm px-3 pt-[9px]">
            You are trying to open {clickLink?.name}
          </div>
          <div className="mt-[22px] flex flex-col gap-[9px]">
            <a href={clickLink?.link} target="_blank">
              <div className="sfpro-text bg-zinc-400/40 text-center py-2.5 rounded-[30px] font-semibold text-[17px]">
                Allow
              </div>
            </a>
            <div
              className="sfpro-text bg-zinc-400/40 text-center py-2.5 rounded-[30px] font-semibold text-[17px]"
              onClick={() => setOpen(false)}
            >
              Cancel
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
