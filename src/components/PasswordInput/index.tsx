/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from "react";
import Input from "../Input";
import eye from "../../assets/img/eye.svg";
import hiddenEye from "../../assets/img/eye-hidden.svg";
import { InputIsValid } from "../../utils/InputValidation";
// import { StyledInput, StyledImg, StyledInputContainer, StyledIconBox } from "./styles";
import { IInput } from "./types";

const PasswordInput: React.FC<IInput> = () => {
    const [password, setPassword] = useState({
        value: "",
        valid: false
    });
    const passwordInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue = event.target.value.trim();
        const validInput = InputIsValid(newValue);
        const newState = {
            ...password,
            value: newValue,
            valid: validInput
        };

        return setPassword(newState);
    };

    const [inputShow, setInputShow] = useState(false);
    const [eyeIcon, setEyeIcon] = useState(eye);
    const togglePasswordVisibility = (): void => {
        setInputShow(!inputShow);
        setEyeIcon(inputShow ? eye : hiddenEye);
    };
    return (
        <>
            <Input
                autocomplete="current-password"
                icon={eyeIcon}
                id="current-password"
                name="current-password"
                onChange={passwordInputHandler}
                onIconClick={togglePasswordVisibility}
                // placeholder={t("PasswordInputPlaceholder")}
                placeholder={"placeholder hardcodeado"}
                type={inputShow ? "text" : "password"}
                // value={passwordInputHandler}
                value={"password"}
            />
        </>
    );
};

export default PasswordInput;
