import { PRIMARY, SECONDARY } from "../../../../common/constants";

export interface IProfileRole {
    children: React.ReactNode;
    styles?: string;
    className?: string;
    selected: string | null;
    key: number;
    id: string | null | number;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    variant: typeof PRIMARY | typeof SECONDARY | string;
}
