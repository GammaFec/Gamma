import { PRIMARY, SECONDARY } from "../../../../common/constants";

export interface IProfileRole {
    children: React.ReactNode;
    styles?: string;
    className?: string;
    selected: boolean | null;
    key: number;
    handleClick?: React.MouseEventHandler<HTMLDivElement>;
    variant: typeof PRIMARY | typeof SECONDARY | string;
    image: string;
}
