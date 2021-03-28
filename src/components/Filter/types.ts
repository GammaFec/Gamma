export interface IFilterData {
    id: number;
    title: string;
    imgSrc: string;
    imgAlt: string;
    active: boolean;
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
