import { PRIMARY, SECONDARY } from "../../common/constants";

export interface IRoleData {
    id: string;
    name: string;
    path: string;
    variant: typeof PRIMARY | typeof SECONDARY | string;
}

export interface ISelectedRol {
    id: string | null;
    path: string;
}
