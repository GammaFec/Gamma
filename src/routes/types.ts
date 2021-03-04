import { RouteProps } from "react-router-dom";
import { PATHS } from "./paths";

interface IRoute {
    path?: PATHS;
    component?: React.LazyExoticComponent<React.FC<RouteProps>>;
    name?: string;
    exact?: boolean;
    // TODO: To implement private routes in the future
    isPrivate?: boolean;
    redirectTo?: () => void;
}

export default IRoute;
