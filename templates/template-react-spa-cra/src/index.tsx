import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import startServer from "./server";

import "./i18n";

if (process.env.NODE_ENV === "development") {
  startServer();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
