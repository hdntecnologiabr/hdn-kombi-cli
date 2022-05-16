import React from "react";
import { useTranslation } from "react-i18next";

import { shallow } from "enzyme";

import { Box, Grid, Typography } from "@mui/material";

import ExamplePage from "./ExamplePage";

jest.mock("react-i18next");

describe("ExamplePage", () => {
  beforeEach(() => {
    mockTranslation(useTranslation as jest.Mock);
  });

  it("should render a message", () => {
    const wrapper = shallow(<ExamplePage />);
    expect(
      wrapper.matchesElement(
        <Box>
          <Typography variant="h2">example.title</Typography>
          <Grid>
            <Typography>example.title</Typography>
          </Grid>
        </Box>,
      ),
    ).toBeTruthy();
  });
});
