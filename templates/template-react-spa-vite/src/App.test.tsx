import React from "react";
import { BrowserRouter } from "react-router-dom";

import { shallow } from "enzyme";

import { ThemeProvider, CssBaseline } from "@mui/material";

import App from "./App";
import { Routes } from "./Routes";
import { theme } from "./styles/theme";

describe("App", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<App />);

    expect(
      wrapper.matchesElement(
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <CssBaseline />
            <Routes />
          </BrowserRouter>
        </ThemeProvider>,
      ),
    ).toBeTruthy();
  });
});
