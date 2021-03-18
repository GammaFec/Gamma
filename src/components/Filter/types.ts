export interface IFilterData {
    id: number;
    filterTitle: string;
    imgSrc: string;
    imgAlt: string;
    activeFilter: boolean;
}

export interface IFilter {
    data: IFilterData[];
    clickHandler: (id: number) => void;
}

export interface IFilterDataMapped {
    filterData: IFilterData[];
    activeFilter: boolean;
    clickHandler: (id: number) => void;
}
