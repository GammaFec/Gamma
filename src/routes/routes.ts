import React from "react";
import MovilAuth from "../pages/MovilAuth";

const Home = React.lazy(() => import("../pages/Home"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

const ROUTES = [
    {
        path: "/",
        component: Home,
        name: "Home",
        exact: true
    },
    {
        path: '/movil-auth/:userId',
        component: MovilAuth,
        name: 'MovilAuth'
    },
    {
        component: NotFound,
        name: "NotFound"
    }
];

export default ROUTES;
