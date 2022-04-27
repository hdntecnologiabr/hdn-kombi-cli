import { useEffect } from "react";
import { HashRouter } from "react-router-dom";

import { Routes } from "~/routes/Routes";
import { TodoService } from "~/services";
import { theme } from "~/styles/theme";
import { useRegisterSW } from "virtual:pwa-register/react";

import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  useRegisterSW();

  const loadAll = async () => {
    let todos = await TodoService.findAll();
    console.log(todos);

    const todo = await TodoService.create({
      color: "#438eA2",
      description: "officiis fugiat quod",
      id: "4beb6816-ceb2-4882-ae9b-2c85b130dc92",
      status: 2,
      title: "aspernatur",
    });
    console.log(todo);

    todos = await TodoService.findAll();
    console.log(todos);
  };

  useEffect(() => {
    loadAll();
  });

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </HashRouter>
  );
}

export { App };
