import "@fontsource/roboto";
import { StrictMode } from "react";
import { render } from "react-dom";

import { App } from "~/components";
import "~/libs/i18n";
// <--SANDBOX-->
import { MODE } from "~/utils/constants";
import { makeServer } from "~mocks";

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
