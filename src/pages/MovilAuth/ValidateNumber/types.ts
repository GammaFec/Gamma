export default interface iValidateNumber {
    phoneNumber: string;
    goBack: () => void;
    buttonId?: string;
    handleSubmit: (code: string) => void;
}
