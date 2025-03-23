"use client";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { HowToDrawer } from "./HowToDrawerComponent";

export default function HowToComponent() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Box
        sx={{
          border: "2px solid #07a0c3",
          width: "100%",
          maxWidth: "200px",
          py: 2,
          px: 3,
          backgroundColor: "#07a0c3",
          color: "#fff",
          borderRadius: "20px",
          "&:hover": {
            backgroundColor: "transparent",
            // color: "#07a0c3",
            cursor: "pointer",
          },
        }}
        onClick={toggleDrawer(true)}
      >
        <Typography variant="h5" align="center">
          How to choose a therapist
        </Typography>
      </Box>
      <HowToDrawer open={open} onClick={toggleDrawer(false)} />
    </>
  );
}
