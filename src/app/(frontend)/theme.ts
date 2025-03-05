"use client";

import { grey } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff9900",
      dark: "#ffffff",
      contrastText: "#0A3449",
    },
    secondary: {
      main: "#0A3449",
      dark: "#63372c",
    },
    background: {
      default: "#0A3449",
      paper: "#0A3449",
    },
    text: {
      primary: "#0A3449",
      secondary: "#fff",
    },
    info: {
      main: "#07a0c3",
    },
  },
  spacing: 8,
  typography: {
    fontSize: 16,
    fontFamily: "var(--font-roboto)",
    h1: {
      fontFamily: "Rubik",
      fontWeight: 700,
      fontSize: 36,
    },
    h2: {
      fontFamily: "Rubik",
      fontWeight: 700,
      fontSize: 26,
    },
    h3: {
      fontFamily: "Rubik",
      fontWeight: 700,
      fontSize: 22,
    },
    h4: {
      fontFamily: "Rubik",
      fontWeight: 700,
      fontSize: 20,
    },
    h5: {
      fontFamily: "Rubik",
      fontWeight: 700,
      fontSize: 16,
    },
    h6: {
      fontFamily: "Rubik",
      fontWeight: 700,
      fontSize: 14,
    },
    subtitle1: {
      fontFamily: "Rubik",
      fontWeight: 700,
      fontSize: 22,
    },
    subtitle2: {
      fontFamily: "Rubik",
      fontWeight: 700,
      fontSize: 20,
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.8rem",
      opacity: "1",
      lineHeight: "1.8",
      color: "#0A3449",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#ff9900",
            color: "#fff",
          },
          "&.header-link": {
            color: "#ff9900",
            textTransform: "uppercase",
            letterSpacing: "4px",
            padding: "6px 16px",
            border: "2px solid transparent",
            lineHeight: "1.2",
          },
          "&.header-link:hover": {
            color: "#0A3449",
            transition:
              "color .2s ease-in-out, background-color .2s ease-in-out , border-color .2s ease-in-out",
          },
          "&.header-link--em": {
            backgroundColor: "#ff9900",
            color: "#0A3449",
            // textTransform: "none",
            // letterSpacing: "initial",
          },
          "&.header-link--em:hover": {
            color: "#ff9900",
            // backgroundColor: "rgba(255, 153, 0, 0.7)",
            backgroundColor: "rgba(2, 136, 209, 0.2)",
            borderColor: "#ff9900",
          },
          "&.header-link--icon": {
            color: "#fff",
          },
          "&.header-link--icon:hover": {
            color: "#0A3449",
          },
          "&.header-link--login": {
            backgroundColor: "#07a0c3",
            color: "#fff",
            letterSpacing: "2px",
          },
          "&.header-link--login:hover": {
            backgroundColor: "#ff9900",
            color: "#0A3449",
            letterSpacing: "2px",
          },
        },
      },
      variants: [
        {
          props: { variant: "text" },
          style: {
            color: "#0A3449",
          },
        },
        {
          props: { variant: "contained" },
          style: {
            color: "#fff",
            backgroundColor: "#0A3449",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            borderColor: grey[400],
            color: "#0A3449",

            "&:hover": {
              color: "#0A3449",
              borderColor: "transparent",
              backgroundColor: "rgba(2, 136, 209, 0.1)",
            },
          },
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:not(.MuiAutocomplete-popupIndicator,.MuiAutocomplete-clearIndicator)":
            {
              backgroundColor: "#0A3449",
              // "&.bookmark-btn": {
              // },
              "&:hover": {
                backgroundColor: "#ff9900",
              },
            },
          "&.MuiAutocomplete-popupIndicator": {
            color: "#0A3449",
          },
          "&.MuiAutocomplete-popupIndicatorOpen": {
            color: "#ff9900",
          },
          "&.MuiAutocomplete-clearIndicator": {
            color: "#0A3449",
          },
          "&.MuiAutocomplete-clearIndicatorOpen": {
            color: "#ff9900",
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          borderColor: "#0A3449",
          backgroundColor: "transparent",

          // .mui-19jubgg-MuiAutocomplete-root .MuiInput-root .MuiInput-input
          // "& .MuiInput-root .MuiInput-input": {
          //   padding: "20px",
          // },
          "& .MuiAutocomplete-clearIndicator:hover": {
            backgroundColor: "#ff9900",
            color: "#fff",
          },
        },
        option: {
          backgroundColor: "#fff",
          "&:hover": {
            color: "#fff",
          },
        },
        listbox: {
          backgroundColor: "#fff",
          "& .MuiAutocomplete-option.Mui-focused": {
            backgroundColor: "#07a0c3",
          },
          "& .MuiAutocomplete-option[aria-selected='true']": {
            backgroundColor: "#0A3449",
            color: "#fff",
          },
          // "& .MuiAutocomplete-option[aria-selected='true'].Mui-focused": {
          //   backgroundColor: "#ff9900",
          // },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderColor: "#0A3449",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#0A3449",
          "&.Mui-focused": {
            color: "#0A3449",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#0A3449",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#0A3449",
          color: "#fff",
          "& .MuiChip-deleteIcon": {
            color: "#fff",
          },
          "& .MuiChip-deleteIcon:hover": {
            color: "#ff9900",
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          margin: "8px 0",
          "&.Mui-expanded": {
            margin: "8px 0",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          minHeight: "24px",
          padding: "8px 16px",
          "&:hover:not(.MuiDisabled)": {
            backgroundColor: "#e5f3fb",
          },
          "&:hover:not(.MuiDisabled)[aria-expanded='false']": {
            backgroundColor: "transparent",
          },
          "& .MuiAccordionSummary-contentGutters": {
            margin: 0,
          },
          "&.Mui-expanded": {
            minHeight: "24px",
            padding: "8px 16px",
            "& .MuiAccordionSummary-contentGutters": {
              margin: 0,
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "& .MuiMenu-list": {
            backgroundColor: "#fff",
          },
          "& .MuiMenuItem-root:hover": {
            backgroundColor: "#07a0c3",
            color: "#fff",
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
