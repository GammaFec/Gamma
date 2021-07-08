import { PRIMARY, SECONDARY } from "../../common/styles/constants";

export interface IModal {
    children: React.ReactNode;
    handleClickAction?: React.MouseEventHandler<HTMLButtonElement>;
    //isShown: boolean;
    styles?: string;
    title?: string;
    variant?: typeof PRIMARY | typeof SECONDARY;
}
