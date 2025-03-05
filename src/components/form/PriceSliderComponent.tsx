import { Box, Slider, Typography } from "@mui/material";
import { useState } from "react";

const marks = [
  {
    value: 40,
    label: "Under £40",
  },
  {
    value: 120,
    label: "£120",
  },
  {
    value: 200,
    label: "£200+",
  },
];

const valueText = (value: number) => {
  if (value === 40) {
    return `Under £${value}`;
  }
  if (value === 200) {
    return `Over £${value}`;
  }
  return `£${value}`;
};

export const PriceSlider = () => {
  const [value, setValue] = useState<number[]>([50, 100]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <>
      <Box sx={{ width: "80%", mx: "auto" }}>
        <Slider
          aria-label="Custom marks"
          defaultValue={80}
          getAriaValueText={valueText}
          step={5}
          marks={marks}
          valueLabelDisplay="auto"
          valueLabelFormat={(x) => {
            return valueText(x);
          }}
          min={40}
          max={200}
          sx={{
            color: "#0A3449",
            height: "10px",
            mb: 4,
            "& .MuiSlider-markLabel": {
              color: "text.primary",
            },
          }}
          onChange={handleChange}
          value={value}
        />
      </Box>
      <Typography
        variant="body1"
        component="h5"
        sx={{ fontWeight: 400 }}
        mb={1}
      >{`Price Range: ${valueText(value[0])} - ${valueText(
        value[1]
      )}`}</Typography>
    </>
  );
};
