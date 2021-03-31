export default interface iRequestNumber {
    handleSubmit?: (phoneNumber: string) => void;
    phoneNumber: string;
    buttonId?: string;
}
