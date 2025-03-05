import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ExtensionIcon from "@mui/icons-material/Extension";
import { FilterDrawer } from "./FilterDrawerComponent";
import { useSearchParams } from "next/navigation";

export default function GetMatchedFilters() {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams(); //=== "/therapists";
  const isForced = searchParams.get("openFilter");

  useEffect(() => {
    if (isForced) {
      setOpen(isForced);
    }
  }, []);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Box
        className="pulse"
        sx={{
          border: "2px solid #ff9900",
          p: 3,
          lineHeight: 1,
          transition: "all .2s ease-in-out",
          backgroundColor: "#ff9900",
          color: "#0A3449",
          "&:hover": {
            backgroundColor: "transparent",
            color: "#ff9900",
            cursor: "pointer",
          },
          borderRadius: "4px",
        }}
        onClick={toggleDrawer(true)}
      >
        <Box className="pulse-delay" justifyItems="center">
          <Box sx={{ fontSize: "62px" }}>
            <ExtensionIcon fontSize="inherit" />
          </Box>
          <Box>
            <Typography variant="h5">Get Matched</Typography>
          </Box>
        </Box>
      </Box>
      <FilterDrawer open={open} onClick={toggleDrawer(false)} />
    </>
  );
}
