const InputIsValid = (value: string, isUserInput = false): boolean => {
    if (value === "") {
        return false;
    }
    if (value.length < 6 && !isUserInput) {
        return false;
    }
    if (isUserInput) {
        value.includes("@") ? regexpEmailCheck(value) : regexpUserCheck(value);
    }

    return true;
};

const regexpEmailCheck = (value: string): boolean => {
    const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexp.test(value);
};

const regexpUserCheck = (value: string): boolean => {
    const regexp = /^(?=.{6,20}$)(?![@_.-])(?!.*[_.]{2})[a-zA-Z0-9._-]+(?<![_.-])$/;
    return regexp.test(value);
};

export { InputIsValid };
