import { Button, Typography } from "@mui/material";
import React, { ReactElement, useState } from "react";

import Grid from "@mui/material/Grid2";
import { CheckboxButtonOptions } from "@/lib/types";

type CheckboxButtonProps = {
  handleButtonClick: (id: number) => void;
  selected: {
    number: boolean;
  }[];
  startIcon: ReactElement;
  id: number;
  children: React.ReactNode;
};

type ButtonCheckboxGroup = {
  options: CheckboxButtonOptions;
};

const CheckboxButton = ({
  handleButtonClick,
  selected,
  startIcon,
  id,
  children,
  size,
}: CheckboxButtonProps) => {
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
        p: size === "medium" ? 2 : 1,
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
      <Typography variant={size === "medium" ? "body1" : "body2"}>
        {children}
      </Typography>
    </Button>
  );
};

export default function ButtonCheckboxGroup({
  options,
  size = "medium",
}: ButtonCheckboxGroup) {
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
              size={size}
            >
              {option.label}
            </CheckboxButton>
          </Grid>
        );
      })}
    </Grid>
  );
}
