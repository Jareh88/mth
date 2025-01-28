"use client";

import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
      main: "#0288d1",
    },
  },
  spacing: 8,
  typography: {
    fontSize: 16,
    fontFamily: "var(--font-roboto)",
    h1: {
      fontFamily: "Rubik",
      fontWeight: 700,
      fontSize: 42,
    },
    h2: {
      fontFamily: "Rubik",
      fontWeight: 700,
      fontSize: 32,
    },
    h3: {
      fontFamily: "Rubik",
      fontWeight: 700,
      fontSize: 24,
    },
    h4: {
      fontFamily: "Rubik",
      fontWeight: 700,
      fontSize: 22,
    },
    h5: {
      fontFamily: "Rubik",
      fontWeight: 700,
      fontSize: 18,
    },
    h6: {
      fontFamily: "Rubik",
      fontWeight: 700,
      fontSize: 14,
    },
    subtitle1: {
      fontFamily: "Rubik",
      fontWeight: 700,
      fontSize: 24,
    },
    subtitle2: {
      fontFamily: "Rubik",
      fontWeight: 700,
      fontSize: 24,
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
            backgroundColor: "#0288d1",
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
        },
        option: {
          backgroundColor: "#fff",
          "&:hover": {
            color: "#fff",
          },
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
  },
});

export default theme;
