import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#D7EDF5",
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
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="liquidGlass">
          <Box sx={{ px: "12px" }}>
            <Typography
              className="sfpro"
              sx={{ color: "#000000", fontSize: "17px", fontWeight: "bold" }}
            >
              Open "{clickLink?.name}"?
            </Typography>
          </Box>
          <Box sx={{ px: "12px", pt: "9px" }}>
            <Typography
              className="sfpro"
              sx={{ color: "#00000090", fontSize: "17px", fontWeight: "bold" }}
            >
              You are trying to open {clickLink?.name}
            </Typography>
          </Box>
          <Box
            sx={{
              mt: "22px",
              display: "flex",
              flexDirection: "column",
              gap: "9px",
            }}
          >
            <a href={clickLink?.link} target="_blank">
              <Box
                className="sfpro"
                sx={{
                  borderRadius: "28px",
                  textAlign: "center",
                  py: "18px",
                  fontSize: "17px",
                  color: "#000000",
                  fontWeight: "bold",
                  bgcolor: "#00000020",
                }}
              >
                Allow
              </Box>
            </a>
            <Box
              className="sfpro"
              sx={{
                borderRadius: "28px",
                textAlign: "center",
                py: "18px",
                fontSize: "17px",
                color: "#000000",
                fontWeight: "bold",
                bgcolor: "#00000020",
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
