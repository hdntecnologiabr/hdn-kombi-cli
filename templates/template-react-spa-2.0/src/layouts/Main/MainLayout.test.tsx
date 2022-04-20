import { shallow } from "enzyme";
import { describe, expect, it } from "vitest";

import { MainLayout } from "./MainLayout";

describe("Main Layout", () => {
  it("renders snapshots", () => {
    const wrapper = shallow(<MainLayout />);
    expect(wrapper).toMatchSnapshot();
  });
});
