import { PRIMARY, SECONDARY } from "../../common/styles/constants";
export interface IButton {
    /** Text or component label */
    children: React.ReactNode;
    /** With background or no */
    variant: typeof PRIMARY | typeof SECONDARY;
    /** CSS styles */
    styles?: string;
    className?: string;
    disabled?: boolean;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}
