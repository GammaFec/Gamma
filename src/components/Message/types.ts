export interface IMessage {
    name: string;
    text: string;
    timeago: string;
    numberofmessage: number;
    isread: boolean;
    handleClick?: () => void;
    src?: string;
}
