export interface props {
    amountOfDots: number;
    click: (index: number) => void;
    activeTabIndex: number;
    children?: JSX.Element;
}
