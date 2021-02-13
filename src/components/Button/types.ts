import { PRIMARY, SECONDARY } from "../../common/constants";

export interface IButton {
    children: React.ReactNode;
    variant: typeof PRIMARY | typeof SECONDARY;
    styles?: string;
    className?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
