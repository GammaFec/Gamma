export interface IDotsSlider {
    amountOfDots: Array<{ id: number; imageUrl: string; text: string }>;
    click: (index: number) => void;
    activeTabIndex: number;
    children?: JSX.Element;
}
