import { ICarouselData } from "../types";

export interface IDotsSlider {
    carouselData: Array<ICarouselData>;
    click: (index: number) => void;
    activeTabIndex: number;
    children?: JSX.Element;
}
