import React from "react";

const Splash = React.lazy(() => import("../pages/Splash"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

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
        component: NotFound,
        name: "NotFound"
    }
];

export default ROUTES;
