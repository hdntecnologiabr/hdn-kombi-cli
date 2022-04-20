import type { RouteObject } from "react-router-dom";

import { MainLayout } from "~/layouts";
import { HomePage } from "~/pages";

const PUBLIC_ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];

export { PUBLIC_ROUTES };
