import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1F9CDA",
    },
    secondary: {
      main: "#FFAA00",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "html, body, #root": {
          height: "100%",
        },
      },
    },
  },
});

export { theme };
