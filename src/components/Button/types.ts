import { PRIMARY, SECONDARY } from "../../common/styles/constants";

export interface IButton {
    children: React.ReactNode;
    variant: typeof PRIMARY | typeof SECONDARY;
    styles?: string;
    className?: string;
    disabled?: boolean;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}
