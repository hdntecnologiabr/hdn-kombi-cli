import React, { lazy, Suspense } from "react";
import { Route, Routes as Switch } from "react-router-dom";

const ExamplePage = lazy(() => import("pages/ExamplePage/ExamplePage"));

export function Routes(): JSX.Element {
  return (
    <Suspense fallback={<span>Loading ...</span>}>
      <Switch>
        <Route path="/" element={<ExamplePage />} />
      </Switch>
    </Suspense>
  );
}
