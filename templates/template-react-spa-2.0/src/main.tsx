import "@fontsource/roboto";
import { StrictMode } from "react";
import { render } from "react-dom";

import { App } from "~/components";
import "~/i18n/i18n";

// ONLY USE FOR SANDBOX MODE
// import { makeServer } from "~server";

// if (import.meta.env.MODE === "sandbox") {
//   makeServer();
// }

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root"),
);
