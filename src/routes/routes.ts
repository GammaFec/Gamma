import React from "react";

const Splash = React.lazy(() => import("../pages/Splash"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const MovilAuth = React.lazy(() => import("../pages/MovilAuth"));

const ROUTES = [
    // {
    //     path: "/",
    //     component: Home,
    //     name: "Home",
    //     exact: true
    // },
    {
        path: "/Splash",
        component: Splash,
        name: "Splash",
        exact: true
    },
    {
        path: "/movil-auth/:userId",
        component: MovilAuth,
        name: "MovilAuth"
    },
    {
        component: NotFound,
        name: "NotFound"
    }
];

export default ROUTES;
