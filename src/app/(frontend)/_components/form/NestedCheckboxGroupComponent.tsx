import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import placeholderTherapyTypes from "@frontend/_helpers/placeholderTherapyTypes";

function NestedCheckboxGroupChildren({ options, checked, handleChange }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      {options.map((child, index) => {
        return (
          <FormControlLabel
            key={index}
            label={child.label}
            control={
              <Checkbox checked={checked[child.id]} onChange={handleChange} />
            }
          />
        );
      })}
    </Box>
  );
}

export default function NestedCheckboxGroup() {
  const initialState = {};
  placeholderTherapyTypes.forEach((therapyType) => {
    initialState[therapyType.parent.id] = false;
    if (therapyType.children && therapyType.children.length > 0) {
      therapyType.children.forEach((child) => {
        initialState[child.id] = false;
      });
    }
  });
  const [checked, setChecked] = useState(initialState);

  const handleChangeParent = (
    event: React.ChangeEvent<HTMLInputElement>,
    option
  ) => {
    setChecked({ ...checked, [option.parent.id]: event.target.checked });
    // setChecked([event.target.checked, event.target.checked]);
  };

  const handleChangeChild = (
    event: React.ChangeEvent<HTMLInputElement>,
    option
  ) => {
    setChecked({ ...checked, [option.id]: event.target.checked });
  };

  return (
    <Box>
      {placeholderTherapyTypes.map((therapyType, index) => {
        //const areAnyChildrenChecked = therapyType?.children ?? null;
        return (
          <div key={index}>
            <FormControlLabel
              label={therapyType.parent.label}
              control={
                <Checkbox
                  checked={
                    checked[therapyType.parent.id] //&& areAnyChildrenChecked
                  }
                  onChange={(e) => {
                    handleChangeParent(e, therapyType);
                  }}
                />
              }
            />
            {therapyType.children && (
              <NestedCheckboxGroupChildren
                options={therapyType.children}
                checked={checked}
                handleChange={(e) => {
                  handleChangeChild(e, therapyType);
                }}
              />
            )}
          </div>
        );
      })}
    </Box>
  );
}
