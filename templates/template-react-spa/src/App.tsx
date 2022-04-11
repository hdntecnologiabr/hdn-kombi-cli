import React from "react";
import { HashRouter } from "react-router-dom";

import { IntlProvider } from "./i18n";
import Routes from "./Routes";

import startServer from "./server";

export default function App() {
  if (process.env.NODE_ENV === "development") {
    startServer({ environment: "development" }).logging = true;
  }

  return (
    <IntlProvider>
      <HashRouter>
        <Routes />
      </HashRouter>
    </IntlProvider>
  );
}
