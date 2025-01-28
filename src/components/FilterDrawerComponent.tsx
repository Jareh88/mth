import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Box,
  Button,
  Drawer,
  TextField,
  Typography,
} from "@mui/material";
import ButtonCheckboxGroupComponent from "./form/ButtonCheckboxGroupComponent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PriceSlider } from "./form/PriceSliderComponent";
import DividerComponent from "./DividerComponent";
import placeholderSpecialisms from "@/helpers/placeholderSpecialisms";
import Close from "@mui/icons-material/Close";
import NestedCheckboxGroup from "./form/NestedCheckboxGroupComponent";

type FilterDrawerProps = {
  onClick: () => void;
  open: boolean;
};

export const FilterDrawer = ({ onClick, open }: FilterDrawerProps) => {
  const Filters = (
    <Box
      sx={{
        width: 900,
        height: "100%",
        backgroundColor: "#fff",
        color: "#0A3449",
        py: "72px",
        overflow: "auto",
      }}
      role="presentation"
    >
      <Box
        sx={{
          backgroundColor: "#e5f3fb",
          p: 2,
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
          variant="h3"
          sx={{
            px: 2,
          }}
        >
          Get Matched
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
            <Typography variant="h5" component="h4">
              Type of Session
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ButtonCheckboxGroupComponent />
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
            mb: 1,
          }}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography variant="h5" component="h4">
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
            <Box>
              <Typography variant="h5" component="h4">
                Specialities&nbsp;
              </Typography>
              <Typography variant="h6" component="h4">
                (Pick one or more)
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Autocomplete
              multiple
              id="tags-standard"
              options={placeholderSpecialisms}
              getOptionLabel={(option) => option.label}
              // defaultValue={[top100Films[13]]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  sx={{ color: "#fff" }}
                  label="Specialisms"
                  placeholder="Pick one or more"
                />
              )}
            />
          </AccordionDetails>
        </Accordion>

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
            mb: 1,
          }}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <Typography variant="h5" component="h4">
              Therapy Types
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <NestedCheckboxGroup />
          </AccordionDetails>
        </Accordion>

        {/* Age 
      Multi select like type of session */}

        {/* Ethnicity 
      Autocomplete multi select */}

        {/* Preferred language
      Dropdown single select */}

        {/* Keyword search 
      Textfield */}
        <Box
          sx={{
            backgroundColor: "#e5f3fb",
            px: 4,
            py: 2,
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
          <Button variant="contained">{`Show ${"xx"} Therapists`}</Button>
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
