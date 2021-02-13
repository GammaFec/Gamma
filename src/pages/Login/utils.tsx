const InputIsValid = (value: string, isEmail = false): boolean => {
    if (value === "") {
        return false;
    }
    if (value.length < 6 && !isEmail) {
        return false;
    }
    if (isEmail) {
        const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexp.test(value);
    }

    return true;
};

export { InputIsValid };
