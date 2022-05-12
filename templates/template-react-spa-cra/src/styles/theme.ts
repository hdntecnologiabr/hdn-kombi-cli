import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
    },
    error: {
      main: "#CA3C3C",
    },
    success: {
      main: "#109853",
    },
    warning: {
      main: "#E67A00",
    },
    info: {
      main: "#17305A",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F8F9FA",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "9.6rem",
      fontWeight: 400,
    },
    h2: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "6rem",
      fontWeight: 400,
    },
    h3: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "4.8rem",
      fontWeight: 400,
    },
    h4: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "3.4rem",
      fontWeight: 400,
    },
    h5: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "2.4rem",
      fontWeight: 400,
    },
    h6: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "2rem",
      fontWeight: 400,
    },
    body1: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "1.4rem",
      fontWeight: 400,
    },
    body2: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "1.8rem",
      fontWeight: 700,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          fontSize: "62.5%",
          boxSizing: "border-box",
        },
      },
    },
  },
});
