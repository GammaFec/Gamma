import { PRIMARY, SECONDARY } from "../../common/styles/constants";

export interface IButton {
    children: React.ReactNode;
    variant: typeof PRIMARY | typeof SECONDARY;
    styles?: string;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}
