export interface IMenu {
    isOpen: boolean;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
    userName: string;
    userType: string;
}
