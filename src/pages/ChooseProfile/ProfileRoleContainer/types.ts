import { PRIMARY, SECONDARY } from "../../../common/styles/constants";

export interface IRoleData {
    id: string;
    name: string;
    path: string;
    variant: typeof PRIMARY | typeof SECONDARY | string;
    image: string;
}

export interface ISelectedRol {
    id: string | null;
    path: string;
}
