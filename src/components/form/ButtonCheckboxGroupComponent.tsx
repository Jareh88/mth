import { Button, Typography } from "@mui/material";
import { useState } from "react";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import HouseIcon from "@mui/icons-material/House";

const CheckboxButton = ({
  handleButtonClick,
  selected,
  startIcon,
  key,
  children,
}) => {
  const isSelected = selected[key];

  return (
    <Button
      variant="outlined"
      size="large"
      startIcon={startIcon}
      onClick={() => handleButtonClick(key)}
      sx={{
        width: "50%",
        mr: 1,
        p: 2,
        ...(isSelected && {
          backgroundColor: "rgba(2, 136, 209, 0.2)",
          fontWeight: 700,
          borderColor: "#0288d1",
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
  console.log(selected);
  const handleButtonClick = (key) => {
    const toggle = selected[key];
    setSelected({ ...selected, [key]: !toggle });
  };

  return (
    <>
      <CheckboxButton
        key={1}
        handleButtonClick={() => handleButtonClick(1)}
        selected={selected}
        startIcon={<ChairOutlinedIcon />}
      >
        In Person
      </CheckboxButton>
      <CheckboxButton
        key={2}
        handleButtonClick={() => handleButtonClick(2)}
        selected={selected}
        startIcon={<LaptopOutlinedIcon />}
      >
        Online
      </CheckboxButton>
      <CheckboxButton
        key={3}
        handleButtonClick={() => handleButtonClick(3)}
        selected={selected}
        startIcon={<PhoneIcon />}
      >
        Phone
      </CheckboxButton>
      <CheckboxButton
        key={4}
        handleButtonClick={() => handleButtonClick(4)}
        selected={selected}
        startIcon={<HouseIcon />}
      >
        Home Visits
      </CheckboxButton>
    </>
  );
}
