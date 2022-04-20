import React from "react";
import { useIntl } from "react-intl";

import { shallow } from "enzyme";

import { Box, Grid, Typography } from "@mui/material";

import ExamplePage from "./ExamplePage";

jest.mock("react-intl");

describe("ExamplePage", () => {
  beforeEach(() => {
    mockFormatMessage(useIntl as jest.Mock);
  });

  it("should render a message", () => {
    const wrapper = shallow(<ExamplePage />);
    expect(
      wrapper.matchesElement(
        <Box>
          <Typography variant="h2">TEST.TRANSLATE</Typography>
          <Grid>
            <Typography>TEST.MISSING</Typography>
          </Grid>
        </Box>,
      ),
    ).toBeTruthy();
  });
});
