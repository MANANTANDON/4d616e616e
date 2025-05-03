import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#2B2B2B",
  borderRadius: "14px",
  outline: "none",
  width: "270px",
};

export const LinkModal = ({ clickLink, open, setOpen }) => {
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ py: "20px", px: "16px" }}>
            <Typography
              textAlign="center"
              className="sfpro"
              sx={{ color: "#ffffff", fontSize: "17px" }}
            >
              Open "{clickLink?.name}"
            </Typography>
          </Box>
          <Box>
            <a href={clickLink?.link} target="_blank">
              <Box
                className="sfpro"
                sx={{
                  textAlign: "center",
                  py: "11px",
                  fontSize: "17px",
                  color: "#007AFF",
                  fontWeight: "bold",
                  borderTop: "1px solid #ffffff24",
                  borderBottom: "1px solid #ffffff24",
                }}
              >
                Allow
              </Box>
            </a>
            <Box
              className="sfpro"
              sx={{
                textAlign: "center",
                py: "11px",
                fontSize: "17px",
                color: "#007AFF",
              }}
              onClick={() => setOpen(false)}
            >
              Cancel
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
