import { shallow } from "enzyme";
import { describe, expect, it } from "vitest";

import SignUpPage from "./SignUpPage";

describe("SignUpPage", () => {
  it("renders snapshots", () => {
    const wrapper = shallow(<SignUpPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
