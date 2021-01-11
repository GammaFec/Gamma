export interface ICarousel {
    carouselData: Array<{ id: number; imageUrl: string; imageAlt: string; text: string }>;
    click: () => void;
    children?: JSX.Element;
}
