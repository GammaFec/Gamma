import React from "react";
import { PATHS } from "./paths";
import IRoute from "./types";

const Splash = React.lazy(() => import("../pages/Splash"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const MovilAuth = React.lazy(() => import("../pages/MovilAuth"));
const Login = React.lazy(() => import("../pages/Login"));
const Home = React.lazy(() => import("../pages/Home"));
const ChooseProfile = React.lazy(() => import("../pages/ChooseProfile"));
const Onboarding = React.lazy(() => import("../pages/Onboarding"));

const ROUTES: IRoute[] = [
    {
        path: PATHS.Splash,
        component: Splash,
        name: "Splash",
        exact: true,
        isPrivate: false
    },
    {
        path: PATHS.Login,
        component: Login,
        name: "Login",
        exact: true,
        isPrivate: false
    },
    {
        path: PATHS.Home,
        component: Home,
        name: "Home",
        exact: true,
        isPrivate: false
    },
    {
        path: PATHS.ChooseProfile,
        component: ChooseProfile,
        name: "ChooseProfile",
        exact: true,
        isPrivate: false
    },
    {
        path: PATHS.Onboarding,
        component: Onboarding,
        name: "Carousel",
        exact: true,
        isPrivate: false
    },
    {
        path: PATHS.MovilAuth,
        component: MovilAuth,
        name: "MovilAuth",
        exact: true,
        isPrivate: false
    },
    {
        component: NotFound,
        name: "NotFound"
    }
];

export default ROUTES;
