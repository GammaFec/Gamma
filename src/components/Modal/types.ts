export interface IModal {
    handleAccept?: () => void;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    title?: string;
    message: string | number;
}
