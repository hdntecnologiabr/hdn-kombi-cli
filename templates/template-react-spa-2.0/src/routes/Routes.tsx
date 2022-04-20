import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import { PRIVATE_ROUTES } from "./private.routes";
import { PUBLIC_ROUTES } from "./public.routes";

function Routes() {
  const element = useRoutes([...PUBLIC_ROUTES, ...PRIVATE_ROUTES]);

  return <Suspense fallback={<span>Loading ...</span>}>{element}</Suspense>;
}

export { Routes };
