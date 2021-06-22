import { PRIMARY, SECONDARY } from "../../common/styles/constants";

export interface IModal {
    children: React.ReactNode;
    variant?: typeof PRIMARY | typeof SECONDARY;
    styles?: string;
    className?: string;
    handleClickAction?: React.MouseEventHandler<HTMLButtonElement>;
}
