import React from "react";

import { shallow } from "enzyme";

import { Box } from "./ExampleComponent.style";
import { ExampleComponentView } from "./ExampleComponentView";

describe("ExampleComponentView", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<ExampleComponentView />);

    expect(
      wrapper.matchesElement(
        <Box>
          <code>Example component</code>
        </Box>,
      ),
    ).toBeTruthy();
  });
});
