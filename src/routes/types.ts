import { PATHS } from "./paths";

interface Route {
    path?: PATHS;
    component: React.LazyExoticComponent<any>;
    name?: string;
    exact?: boolean;
    // TODO: Cuando se hagan rutas privadas se deberia implementar la validacion aca
    isPrivate?: boolean;
    redirectTo?: () => void;
}

export default Route;
