import { Button, Typography } from "@mui/material";
import { useState } from "react";

import Grid from "@mui/material/Grid2";

const CheckboxButton = ({
  handleButtonClick,
  selected,
  startIcon,
  id,
  children,
}) => {
  const isSelected = selected[id];

  return (
    <Button
      variant="outlined"
      size="large"
      startIcon={startIcon}
      onClick={() => handleButtonClick(id)}
      sx={{
        width: "100%",
        mr: 1,
        p: 2,
        ...(isSelected && {
          backgroundColor: "rgba(2, 136, 209, 0.2)",
          fontWeight: 700,
          borderColor: "#07a0c3",
          "& p": {
            fontWeight: 700,
          },
        }),
      }}
    >
      <Typography variant="body1">{children}</Typography>
    </Button>
  );
};

export default function ButtonCheckboxGroup({ options }) {
  let initialState = {};

  options.forEach((option, index) => {
    initialState = { ...initialState, [index]: false };
  });
  const [selected, setSelected] = useState(initialState);

  const handleButtonClick = (id) => {
    const toggle = selected[id];
    setSelected({ ...selected, [id]: !toggle });
  };

  return (
    <Grid container spacing={1}>
      {options.map((option, index) => {
        return (
          <Grid size={3} key={index}>
            <CheckboxButton
              id={index}
              handleButtonClick={() => handleButtonClick(index)}
              selected={selected}
              startIcon={option.icon}
            >
              {option.label}
            </CheckboxButton>
          </Grid>
        );
      })}
    </Grid>
  );
}
