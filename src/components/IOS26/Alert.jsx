import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

export const Alert = () => {
  return (
    <Box
      sx={{
        width: 300,
        position: "relative",
        borderRadius: "34px",
        background: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(2px)",
        padding: 3.5,
      }}
    >
      <Stack spacing={2.5} alignItems="center">
        <Stack spacing={1.25} alignItems="center" sx={{ px: 2, py: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily:
                "SF Pro, -apple-system, BlinkMacSystemFont, sans-serif",
              fontWeight: 600,
              fontSize: "17px",
              lineHeight: "22px",
              letterSpacing: "-0.43px",
              color: "white",
              textAlign: "center",
            }}
          >
            A Short Title Is Best
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily:
                "SF Pro, -apple-system, BlinkMacSystemFont, sans-serif",
              fontWeight: 400,
              fontSize: "17px",
              lineHeight: "22px",
              letterSpacing: "-0.43px",
              color: "white",
              textAlign: "center",
            }}
          >
            A description should be a short, complete sentence.
          </Typography>
        </Stack>

        <Stack spacing={1.25} sx={{ width: "100%" }}>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#007AFF",
              color: "white",
              borderRadius: "100px",
              height: 48,
              fontFamily:
                "SF Pro, -apple-system, BlinkMacSystemFont, sans-serif",
              fontWeight: 500,
              fontSize: "17px",
              letterSpacing: "-0.43px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#0056CC",
              },
            }}
          >
            Primary
          </Button>

          <Button
            variant="outlined"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "white",
              borderRadius: "100px",
              height: 48,
              fontFamily:
                "SF Pro, -apple-system, BlinkMacSystemFont, sans-serif",
              fontWeight: 500,
              fontSize: "17px",
              letterSpacing: "-0.43px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.3)",
              },
            }}
          >
            Secondary
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Alert;
