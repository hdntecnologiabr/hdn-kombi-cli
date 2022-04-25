import "@fontsource/roboto";
import { StrictMode } from "react";
import { render } from "react-dom";

import { App } from "~/components";
import "~/i18n";
// <--SANDBOX-->
import { MODE } from "~/utils/constants";

import { makeServer } from "../mock";

if (MODE === "sandbox") {
  makeServer();
}
// <--SANDBOX-->

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root"),
);
