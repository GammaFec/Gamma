export default interface IValidateNumber {
    phoneNumber: string;
    goBack: () => void;
    buttonId?: string;
    handleSubmit: (code: string) => void;
}
