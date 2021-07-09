import { PRIMARY, SECONDARY } from "../../common/styles/constants";

export interface IModal {
    children: React.ReactNode;
    handleAccept?: React.MouseEventHandler<HTMLButtonElement>;
    show?: boolean;
    setShow?: React.Dispatch<React.SetStateAction<boolean>>;
    styles?: string;
    title?: string;
    variant?: typeof PRIMARY | typeof SECONDARY;
}
