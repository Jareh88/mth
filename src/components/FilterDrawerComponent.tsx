import { Box, Drawer } from "@mui/material";
import ButtonCheckboxGroupComponent from "./form/ButtonCheckboxGroupComponent";

type FilterDrawerProps = {
  onClick: () => void;
  open: boolean;
};

export const FilterDrawer = ({ onClick, open }: FilterDrawerProps) => {
  const Filters = (
    <Box
      sx={{
        width: 700,
        height: "100%",
        backgroundColor: "#fff",
        color: "#0A3449",
      }}
      role="presentation"
    >
      {/* Type of Session
      4 Checkboxes */}
      <ButtonCheckboxGroupComponent />

      {/* Price per session
      slider */}

      {/* Specialities 
      autocomplete multi select */}

      {/* Therapy type 
      Nested dropdown */}

      {/* Age 
      Multi select like type of session */}

      {/* Ethnicity 
      Autocomplete multi select */}

      {/* Preferred language
      Dropdown single select */}

      {/* Keyword search 
      Textfield */}
    </Box>
  );

  return (
    <Box>
      <Drawer
        open={open}
        onClose={onClick}
        anchor="right"
        sx={{
          "& .MuiPaper-root": {
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
