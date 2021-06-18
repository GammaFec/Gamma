/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from "react";
import { StyledInput, StyledImg, StyledInputContainer, StyledIconBox } from "./styles";
import { IInput } from "./types";

const Input: React.FC<IInput> = ({
    type,
    name,
    id,
    icon,
    iconPosition,
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
    const [inputShow, setInputShow] = useState(isText);
    const togglePasswordVisibility = (): void => {
        setInputShow(!inputShow);
    };

    return (
        <StyledInputContainer iconPosition={iconPosition !== undefined ? iconPosition : "right"}>
            {icon && (
                <StyledIconBox onClick={(): void => togglePasswordVisibility()}>
                    <StyledImg alt={alt} src={icon} />
                </StyledIconBox>
            )}
            <StyledInput
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
