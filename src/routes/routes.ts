import React from "react";
import { PATHS } from "./paths";
import IRoute from "./types";

const Splash = React.lazy(() => import("../pages/Splash"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const Login = React.lazy(() => import("../pages/Login"));
const Home = React.lazy(() => import("../pages/Home"));

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
        component: NotFound,
        name: "NotFound"
    }
];

export default ROUTES;
