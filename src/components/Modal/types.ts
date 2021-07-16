import { PRIMARY, SECONDARY } from "../../common/styles/constants";

export interface IModal {
    handleAccept?: () => void;
    show?: boolean;
    setShow?: React.Dispatch<React.SetStateAction<boolean>>;
    styles?: string;
    title?: string;
    message: string;
    variant?: typeof PRIMARY | typeof SECONDARY;
}
