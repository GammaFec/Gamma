export interface ICarousel {
    carouselData: ICarouselData[];
    click: () => void;
    children?: JSX.Element;
}

export interface ICarouselData {
    id: number;
    imageUrl: string;
    imageAlt: string;
    titleOnPage: string;
    text: string;
}
