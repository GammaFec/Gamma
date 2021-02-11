import { PRIMARY, SECONDARY } from "../../common/constants";

export interface IButton {
    children: React.ReactNode;
    variant: typeof PRIMARY | typeof SECONDARY;
    onClick?: () => void;
    styles?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
