/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from "react";
import { StyledInput, StyledImg, StyledInputContainer, StyledIconBox } from "./styles";
import { IInput } from "./types";

const Input: React.FC<IInput> = ({
    type,
    name,
    id,
    icon,
    alt,
    value,
    ref,
    minlength,
    maxlength,
    placeholder,
    doFocus,
    autocomplete,
    onChange
}: IInput) => {
    const isText = type === "text" ? true : false;
    const [inputShow, setPasswordVisibility] = useState(isText);
    const togglePasswordVisibility = (): void => {
        setPasswordVisibility(!inputShow);
    };

    return (
        <StyledInputContainer>
            {icon && (
                <StyledIconBox onClick={(): void => togglePasswordVisibility()}>
                    <StyledImg alt={alt} src={icon} />
                </StyledIconBox>
            )}
            <StyledInput
                // autoComplete={isLogin ? "current-password" : "new-password"}
                autoFocus={doFocus}
                autocomplete={autocomplete}
                id={id}
                maxlength={maxlength}
                minlength={minlength}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                ref={ref}
                type={inputShow ? "text" : "password"}
                value={value}
            />
        </StyledInputContainer>
    );
};

export default Input;
