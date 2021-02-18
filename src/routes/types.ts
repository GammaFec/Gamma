import { FC, LazyExoticComponent } from "react";
import { PATHS } from "./paths";

interface Route {
    path?: PATHS;
    component?: LazyExoticComponent<FC<unknown>>;
    name?: string;
    exact?: boolean;
    // TODO: To implement private routes in the future
    isPrivate?: boolean;
    redirectTo?: () => void;
}

export default Route;
