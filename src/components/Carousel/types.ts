export interface ICarousel {
    carouselData: Array<ICarouselData>;
    click: () => void;
    children?: JSX.Element;
}

export interface ICarouselData {
    id: number;
    imageUrl: string;
    imageAlt: string;
    text: string;
}
