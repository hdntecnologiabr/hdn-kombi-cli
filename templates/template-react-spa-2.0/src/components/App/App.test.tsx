import { shallow } from "enzyme";
import { describe, expect, it } from "vitest";

import { App } from "./App";

describe("App", () => {
  it("renders snapshots", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
