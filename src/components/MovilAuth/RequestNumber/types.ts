export default interface IRequestNumber {
    handleSubmit?: (phoneNumber: string) => void;
    phoneNumber: string;
    buttonId?: string;
}
