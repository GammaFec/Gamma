import React from "react";
import { PATHS } from "./paths";
import Route from "./types";

const Splash = React.lazy(() => import("../pages/Splash"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const Login = React.lazy(() => import("../pages/Login"));
const HomeScreen = React.lazy(() => import("../pages/HomeScreen"));

const ROUTES: Route[] = [
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
        path: PATHS.HomeScreen,
        component: HomeScreen,
        name: "HomeScreen",
        exact: true,
        isPrivate: false
    },
    {
        component: NotFound,
        name: "NotFound"
    }
];

export default ROUTES;
