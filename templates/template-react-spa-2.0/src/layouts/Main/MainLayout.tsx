import { Outlet } from "react-router-dom";

import { Container } from "@mui/material";

function MainLayout() {
  return (
    <Container component="main" maxWidth="lg">
      <Outlet />
    </Container>
  );
}

export { MainLayout };
