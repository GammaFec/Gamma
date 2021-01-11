export interface ICarousel {
    carouselData: Array<{ id: number; imageUrl: string; text: string }>;
    click: () => void;
    children?: JSX.Element;
}
