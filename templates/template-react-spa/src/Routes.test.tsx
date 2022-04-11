import React from "react";
import { HashRouter } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";

import Routes from "./Routes";

describe("Router", () => {
  it("should render only the example page route", () => {
    render(
      <HashRouter>
        <Routes />
      </HashRouter>,
    );
    waitFor(() => {
      expect(screen.getByText("It works! Translate value")).toBeInTheDocument();
    });
  });
});
