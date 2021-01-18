import { ICarouselData } from "../types";

export interface IDotsSlider {
    carouselData: Array<ICarouselData>;
    handleClick: (index: number) => void;
    activeTabIndex: number;
    children?: JSX.Element;
}
