export interface IMessage {
    name: string;
    text: string;
    creationDate: Date;
    count: number;
    isRead: boolean;
    handleClick?: () => void;
    profileIcon?: string;
}
