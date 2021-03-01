import { LazyExoticComponent } from "react";
import { RouteProps } from "react-router-dom";
import { PATHS } from "./paths";

interface Route {
    path?: PATHS;
    component?: LazyExoticComponent<React.FC<RouteProps>>;
    name?: string;
    exact?: boolean;
    // TODO: To implement private routes in the future
    isPrivate?: boolean;
    redirectTo?: () => void;
}

export default Route;
