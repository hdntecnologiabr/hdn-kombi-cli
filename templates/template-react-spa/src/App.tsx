import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider, CssBaseline } from "@mui/material";

import { IntlProvider } from "./i18n";
import { Routes } from "./Routes";
import { theme } from "./styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider>
        <BrowserRouter>
          <CssBaseline />
          <Routes />
        </BrowserRouter>
      </IntlProvider>
    </ThemeProvider>
  );
}
