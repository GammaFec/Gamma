import { PRIMARY, SECONDARY } from "../../../common/styles/constants";

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

export interface IProfileRoleContainer {
    Data: IRoleData[];
    handleSubmit: (path?: string) => void;
}
