import { IFilterData } from "../types";

export interface IFilterTab {
    data: IFilterData;
    activeFilter: boolean;
    clickHandler: () => void;
}
