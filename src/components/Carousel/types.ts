export interface ICarousel {
    carouselData: ICarouselData[];
    ButtonClick: () => void;
}

export interface ICarouselData {
    id: number;
    imageUrl: string;
    imageAlt: string;
    titleOnPage: string;
    text: string[];
}
