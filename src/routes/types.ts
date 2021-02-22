import { PATHS } from "./paths";
import React, { FC } from "react";

interface Route {
    path?: PATHS;
    component?: React.LazyExoticComponent<FC<unknown>>;
    name?: string;
    exact?: boolean;
    // TODO: To implement private routes in the future
    isPrivate?: boolean;
    redirectTo?: () => void;
}

export default Route;
