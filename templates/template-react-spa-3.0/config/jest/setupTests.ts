import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme from "enzyme";

import "regenerator-runtime/runtime";

import { mockTranslation, mockUseStyles, tick } from "./testHelpers";

Enzyme.configure({
  adapter: new Adapter(),
});

global.tick = tick;
global.mockUseStyles = mockUseStyles;
global.mockTranslation = mockTranslation;
