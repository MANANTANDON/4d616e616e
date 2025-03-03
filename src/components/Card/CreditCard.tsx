import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import creditCardCss from "@/styles/CreditCard.module.css";
import Image from "next/image";

export const CreditCard: React.FC = () => {
  return (
    <Box className={creditCardCss.cc1}>
      {/* Grid container for the credit card layout */}
      <Grid container>
        {/* Left side: Card title or name */}
        <Grid item xs={8} sm={9} className={creditCardCss.cc3}>
          <Typography className={creditCardCss.cc2}>manan.</Typography>
        </Grid>

        <Grid item xs={4} sm={3} className={creditCardCss.cc4}>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              height: "47px", // Height of the image
              width: "61px", // Width of the image
            }}
          >
            <Image
              src="/images/simAntenna.png"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="credit card antenna"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
