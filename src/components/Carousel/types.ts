export interface ICarousel {
    carouselData: ICarouselData[];
    handleClickOnContinue: () => void;
}

export interface ICarouselData {
    id: number;
    imageUrl: string;
    imageAlt: string;
    titleOnPage: string;
    text: string[];
}
