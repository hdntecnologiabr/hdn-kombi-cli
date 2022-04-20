import { shallow } from "enzyme";
import { describe, expect, it } from "vitest";

import SignInPage from "./SignInPage";

describe("SignInPage", () => {
  it("renders snapshots", () => {
    const wrapper = shallow(<SignInPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
