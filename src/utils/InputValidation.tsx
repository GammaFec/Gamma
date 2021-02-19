const InputIsValid = (value: string, isUserInput = false): boolean => {
    if (value === "") {
        return false;
    }
    if (value.length < 6 && !isUserInput) {
        return false;
    }
    if (isUserInput) {
        value.includes("@") ? regexpCheck(value) : userCheck(value);
    }

    return true;
};

const regexpCheck = (value: string): boolean => {
    const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexp.test(value);
};

const userCheck = (value: string): boolean => {
    return value ? true : false;
};

export { InputIsValid };
