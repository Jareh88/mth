import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Box,
  Button,
  Drawer,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import ButtonCheckboxGroupComponent from "./form/ButtonCheckboxGroupComponent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PriceSlider } from "./form/PriceSliderComponent";
import DividerComponent from "./DividerComponent";
import placeholderSpecialisms from "@frontend/_helpers/placeholderSpecialisms";
import Close from "@mui/icons-material/Close";
import placeholderTherapyTypes from "@frontend/_helpers/placeholderTherapyTypes";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import HouseIcon from "@mui/icons-material/House";
import SkateboardingIcon from "@mui/icons-material/Skateboarding";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import placeholderEthnicities from "@frontend/_helpers/placeholderEthnicities";
import { useState } from "react";
import placeholderLanguages from "@frontend/_helpers/placeholderLanguages";

type FilterDrawerProps = {
  onClick: () => void;
  open: boolean;
};

export const FilterDrawer = ({ onClick, open }: FilterDrawerProps) => {
  const [ethnicity, setEthnicity] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState("English");

  const handleEthnicityChange = (event: SelectChangeEvent) => {
    setEthnicity(event.target.value);
  };

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setPreferredLanguage(event.target.value);
  };

  const Filters = (
    <Box
      sx={{
        width: 900,
        height: "100%",
        backgroundColor: "#fff",
        color: "#0A3449",
        py: "56px",
        overflow: "auto",
      }}
      role="presentation"
    >
      <Box
        sx={{
          backgroundColor: "#e5f3fb",
          p: 1,
          position: "absolute",
          top: "0",
          right: "0",
          left: "0",
          zIndex: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            px: 2,
          }}
        >
          Get Matched
        </Typography>
        <Typography component="h6" variant="body2">
          Use our filter tools to narrow down your options
        </Typography>
        <Button variant="text" endIcon={<Close />} onClick={onClick}>
          Close
        </Button>
      </Box>
      <Box sx={{ px: 2 }}>
        {/* Type of Session
      4 Checkboxes */}
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "#fff",
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: "#0A3449",
            },
          }}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="h5" component="h4" sx={{ fontSize: "16px" }}>
              Type of Session
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ButtonCheckboxGroupComponent
              size="small"
              options={[
                {
                  label: "In Person",
                  icon: <ChairOutlinedIcon />,
                },
                {
                  label: "Online",
                  icon: <LaptopOutlinedIcon />,
                },
                {
                  label: "Phone",
                  icon: <PhoneIcon />,
                },
                {
                  label: "Home Visits",
                  icon: <HouseIcon />,
                },
              ]}
            />
          </AccordionDetails>
        </Accordion>

        <Box sx={{ px: 2 }}>
          <DividerComponent width="100%" />
        </Box>

        {/* Price per session
      slider */}
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "#fff",
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: "#0A3449",
            },
            "& .MuiSlider-track": {
              borderColor: "#0A3449",
            },
            "&.MuiAccordion-root": {
              margin: "8px 0",
            },
          }}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography variant="h5" component="h4" sx={{ fontSize: "16px" }}>
              Price per session
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PriceSlider />
          </AccordionDetails>
        </Accordion>

        <Box sx={{ px: 2 }}>
          <DividerComponent width="100%" />
        </Box>

        {/* Specialities 
      autocomplete multi select */}
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "#fff",
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: "#0A3449",
            },
            "& .MuiSlider-track": {
              borderColor: "#0A3449",
            },
          }}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography variant="h5" component="h4" sx={{ fontSize: "16px" }}>
              What do you need help with? &nbsp;
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Autocomplete
              multiple
              id="Specialities"
              options={placeholderSpecialisms}
              getOptionLabel={(option) => option.label}
              // defaultValue={[top100Films[13]]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  sx={{ color: "#fff" }}
                  label="Therapist specialities"
                  placeholder="Start typing to select..."
                />
              )}
            />
          </AccordionDetails>
        </Accordion>

        <Box sx={{ px: 2 }}>
          <DividerComponent width="100%" />
        </Box>

        {/* Therapy type 
      Nested checkboxes */}
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "#fff",
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: "#0A3449",
            },
            "& .MuiSlider-track": {
              borderColor: "#0A3449",
            },
            "&.MuiAccordion-root": {
              margin: "8px 0",
            },
          }}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <Typography variant="h5" component="h4" sx={{ fontSize: "16px" }}>
              Therapy Types
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Autocomplete
              multiple
              id="therapy-types"
              options={placeholderTherapyTypes}
              getOptionLabel={(option) => option.label}
              // defaultValue={[top100Films[13]]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  sx={{ color: "#fff" }}
                  label="Types of therapy"
                  placeholder="Start typing to select..."
                />
              )}
            />
          </AccordionDetails>
        </Accordion>

        <Box sx={{ px: 2 }}>
          <DividerComponent width="100%" />
        </Box>
        {/* Age 
      Multi select like type of session */}
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "#fff",
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: "#0A3449",
            },
          }}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="age-content"
            id="age-header"
          >
            <Typography variant="h5" component="h4" sx={{ fontSize: "16px" }}>
              Your Age
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ButtonCheckboxGroupComponent
              size="small"
              options={[
                {
                  label: "14-18",
                  icon: <SkateboardingIcon />,
                },
                {
                  label: "18-65",
                  icon: <EmojiPeopleIcon />,
                },
                {
                  label: "65+",
                  icon: <EmojiEventsIcon />,
                },
              ]}
            />
          </AccordionDetails>
        </Accordion>

        <Box sx={{ px: 2 }}>
          <DividerComponent width="100%" />
        </Box>

        {/* Ethnicity 
      Autocomplete multi select */}
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "#fff",
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: "#0A3449",
            },
          }}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="ethnicity-content"
            id="ethnicity-header"
          >
            <Typography variant="h5" component="h4" sx={{ fontSize: "16px" }}>
              Therapist Ethnicity
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl variant="standard" sx={{ minWidth: 120 }} fullWidth>
              <InputLabel id="ethnicity-label">Ethnicity</InputLabel>
              <Select
                labelId="ethnicity-label"
                id="label-standard"
                value={ethnicity}
                label="Ethnicity"
                onChange={handleEthnicityChange}
              >
                {placeholderEthnicities.map((ethnicity, index) => {
                  return (
                    <MenuItem key={index} value={ethnicity.id}>
                      {ethnicity.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </AccordionDetails>
        </Accordion>

        <Box sx={{ px: 2 }}>
          <DividerComponent width="100%" />
        </Box>

        {/* Preferred language
      Dropdown single select */}
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "#fff",
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: "#0A3449",
            },
          }}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="ethnicity-content"
            id="ethnicity-header"
          >
            <Typography variant="h5" component="h4" sx={{ fontSize: "16px" }}>
              Preferred Language
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl variant="standard" sx={{ minWidth: 120 }} fullWidth>
              <InputLabel id="ethnicity-label">Language</InputLabel>
              <Select
                labelId="preferredLanguage-label"
                id="preferredLanguage"
                value={preferredLanguage}
                label="Preferred Language"
                onChange={handleLanguageChange}
              >
                {placeholderLanguages.map((language, index) => {
                  return (
                    <MenuItem key={index} value={language.id}>
                      {language.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </AccordionDetails>
        </Accordion>

        <Box
          sx={{
            backgroundColor: "#e5f3fb",
            px: 4,
            py: 1,
            position: "absolute",
            bottom: "0",
            right: "0",
            left: "0",
            zIndex: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button variant="text">Clear Filters</Button>
          <Button
            variant="contained"
            size="small"
          >{`Show ${"xx"} Therapists`}</Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Drawer
        open={open}
        onClose={onClick}
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": {
            top: "20px",
            bottom: "20px",
            height: "auto",
            right: "20px",
            borderRadius: "4px",
          },
        }}
      >
        {Filters}
      </Drawer>
    </Box>
  );
};
