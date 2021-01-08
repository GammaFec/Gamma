const PhoneValidator = (phoneNumber: string): boolean => {
    try {
        const intNumber = parseInt(phoneNumber);

        return `${intNumber}`.length > 6;
    } catch {
        return false;
    }
};

export default PhoneValidator;
