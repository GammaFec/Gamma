export interface IFilterData {
    filterTitle: string;
    imgSrc: string;
    imgAlt: string;
}

export interface IFilter {
    data: IFilterData[];
    clickHandler: () => void;
}

export interface IFilterDataMapped {
    filterData: IFilterData[];
    active: boolean;
    clickHandler: () => void;
}
