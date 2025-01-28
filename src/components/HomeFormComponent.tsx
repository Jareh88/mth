"use client";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import placeholderOptions from "../helpers/placeholderSpecialisms";
import SearchIcon from "@mui/icons-material/Search";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import { useState } from "react";
import Link from "next/link";

export const HomeForm = () => {
  const [hasClicked, setHasClicked] = useState(false);
  const [selectedInPerson, setSelectedInPerson] = useState(true);
  const [selectedOnline, setSelectedOnline] = useState(false);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSelectedInPerson(event.target.checked);
  // };

  const handleInPersonClick = () => {
    if (!hasClicked) {
      setHasClicked(true);
    } else if (!selectedInPerson) {
      setSelectedInPerson(true);
    } else {
      setSelectedInPerson(false);
    }
  };

  const handleOnlineClick = () => {
    setSelectedOnline(!selectedOnline);
  };

  return (
    <Card
      raised={true}
      sx={{
        bgcolor: "primary.dark",
        color: "primary.contrastText",
        p: 6,
        border: "6px solid #ff9900",
        borderRadius: "16px",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{ mb: 2, textDecoration: "underline" }}
        >
          Let&apos;s get you started:
        </Typography>
        <FormControl fullWidth>
          <FormLabel id="sessions-group-label" focused={false}>
            <Typography variant="h5" component="h4" mb={2}>
              How would you like your sessions?
            </Typography>
          </FormLabel>
          {/* <FormGroup
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              mb: 2,
            }}
          >
            <FormControlLabel
              control={<Checkbox onChange={(e) => handleChange(e)} />}
              label="In person"
            />
            <FormControlLabel control={<Checkbox />} label="Online" />
          </FormGroup> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              mb: 4,
            }}
          >
            <Button
              variant="outlined"
              size="large"
              startIcon={<ChairOutlinedIcon />}
              onClick={handleInPersonClick}
              sx={{
                width: "50%",
                mr: 1,
                p: 2,
                ...(selectedInPerson &&
                  hasClicked && {
                    backgroundColor: "rgba(2, 136, 209, 0.2)",
                    fontWeight: 700,
                    borderColor: "#07a0c3",
                    "& p": {
                      fontWeight: 700,
                    },
                  }),
              }}
            >
              <Typography variant="body1">In Person</Typography>
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<LaptopOutlinedIcon />}
              onClick={handleOnlineClick}
              sx={{
                width: "50%",
                ml: 1,
                p: 2,
                ...(selectedOnline && {
                  backgroundColor: "rgba(2, 136, 209, 0.2)",
                  borderColor: "#07a0c3",
                  "& p": {
                    fontWeight: 700,
                  },
                }),
              }}
            >
              <Typography variant="body1">Online</Typography>
            </Button>
          </Box>
          {selectedInPerson && (
            <>
              <FormLabel id="sessions-group-label" focused={false}>
                <Typography variant="h5" component="h4">
                  Where are you based?
                </Typography>
              </FormLabel>
              <TextField
                variant="filled"
                id="input-with-icon-textfield"
                placeholder="Postcode, town, etc"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnOutlinedIcon color="secondary" />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{ mb: 3 }}
              />
            </>
          )}

          <FormLabel
            id="sessions-group-label"
            focused={false}
            sx={{ color: "primary.contrastText", mb: 2 }}
          >
            <Typography variant="h5" component="h4">
              What do you need help with?
            </Typography>
          </FormLabel>
          <Autocomplete
            options={placeholderOptions}
            openOnFocus
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                sx={{ color: "#fff" }}
                label="Please select..."
              />
            )}
            sx={{
              mb: 4,
            }}
          />
          <Link href="/therapists">
            <Button
              variant="contained"
              type="submit"
              size="large"
              startIcon={<SearchIcon />}
              fullWidth
            >
              Search
            </Button>
          </Link>
        </FormControl>
      </Box>
    </Card>
  );
};
