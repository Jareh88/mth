import { PropsWithChildren, useState } from "react";
import { Snackbar } from "@mui/material";
import React from "react";

const CopyToClipboardButton = ({ sx, children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(window.location.toString());
    console.log("Did it");
  };

  const renderChildren = () => {
    return React.Children.map(children, (child) =>
      React.cloneElement(child, {
        onClick: handleClick,
      })
    );
  };

  return (
    <>
      {renderChildren()}
      <Snackbar
        message="Therapist link copied to clipboard"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        open={open}
      />
    </>
  );
};

export default CopyToClipboardButton;
