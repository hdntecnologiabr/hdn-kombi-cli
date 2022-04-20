import type { RouteObject } from "react-router-dom";

import { MainLayout } from "~/layouts";
import { SignInPage, SignUpPage } from "~/pages";

const PRIVATE_ROUTES: RouteObject[] = [
  {
    path: "/auth",
    element: <MainLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
    ],
  },
];

export { PRIVATE_ROUTES };
