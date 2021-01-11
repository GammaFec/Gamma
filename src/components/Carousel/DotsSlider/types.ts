export interface IDotsSlider {
    carouselData: Array<{ id: number; imageUrl: string; imageAlt: string; text: string }>;
    click: (index: number) => void;
    activeTabIndex: number;
    children?: JSX.Element;
}
