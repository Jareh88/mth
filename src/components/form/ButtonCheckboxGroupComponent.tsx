import { Button, Typography } from "@mui/material";
import { useState } from "react";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import HouseIcon from "@mui/icons-material/House";
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

export default function ButtonCheckboxGroup() {
  const [selected, setSelected] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const handleButtonClick = (id) => {
    const toggle = selected[id];
    setSelected({ ...selected, [id]: !toggle });
  };

  return (
    <Grid container spacing={1}>
      <Grid size={3}>
        <CheckboxButton
          id={1}
          handleButtonClick={() => handleButtonClick(1)}
          selected={selected}
          startIcon={<ChairOutlinedIcon />}
        >
          In Person
        </CheckboxButton>
      </Grid>
      <Grid size={3}>
        <CheckboxButton
          id={2}
          handleButtonClick={() => handleButtonClick(2)}
          selected={selected}
          startIcon={<LaptopOutlinedIcon />}
        >
          Online
        </CheckboxButton>
      </Grid>
      <Grid size={3}>
        <CheckboxButton
          id={3}
          handleButtonClick={() => handleButtonClick(3)}
          selected={selected}
          startIcon={<PhoneIcon />}
        >
          Phone
        </CheckboxButton>
      </Grid>
      <Grid size={3}>
        <CheckboxButton
          id={4}
          handleButtonClick={() => handleButtonClick(4)}
          selected={selected}
          startIcon={<HouseIcon />}
        >
          Home Visits
        </CheckboxButton>
      </Grid>
    </Grid>
  );
}
