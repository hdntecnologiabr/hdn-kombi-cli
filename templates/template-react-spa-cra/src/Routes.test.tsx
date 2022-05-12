import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";

import { Routes } from "./Routes";

describe("Router", () => {
  it("should render only the example page route", () => {
    render(
      <BrowserRouter>
        <Routes />
      </BrowserRouter>,
    );
    waitFor(() => {
      expect(screen.getByText("It works! Translate value")).toBeInTheDocument();
    });
  });
});
