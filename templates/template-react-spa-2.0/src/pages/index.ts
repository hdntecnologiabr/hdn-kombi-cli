import { lazy } from "react";

// PRIVATE
const SignInPage = lazy(() => import("~/pages/Auth/SignIn/SignInPage"));
const SignUpPage = lazy(() => import("~/pages/Auth/SignUp/SignUpPage"));

// PUBLIC
const HomePage = lazy(() => import("~/pages/Home/HomePage"));

export { SignInPage, SignUpPage, HomePage };
