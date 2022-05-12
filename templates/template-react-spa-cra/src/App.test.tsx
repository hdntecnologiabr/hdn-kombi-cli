import React from "react";
import { BrowserRouter } from "react-router-dom";

import { shallow } from "enzyme";

import { ThemeProvider, CssBaseline } from "@mui/material";

import App from "./App";
import { IntlProvider } from "./i18n";
import { Routes } from "./Routes";
import { theme } from "./styles/theme";

describe("App", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<App />);

    expect(
      wrapper.matchesElement(
        <ThemeProvider theme={theme}>
          <IntlProvider>
            <BrowserRouter>
              <CssBaseline />
              <Routes />
            </BrowserRouter>
          </IntlProvider>
        </ThemeProvider>,
      ),
    ).toBeTruthy();
  });
});
