/* eslint-disable jsx-a11y/no-autofocus */
import React from "react";

import { StyledInput, StyledImg, StyledInputContainer, StyledIconBox } from "./styles";
import { IInput } from "./types";

const Input: React.FC<IInput> = ({
    type,
    name,
    id,
    icon,
    iconPositionLeft,
    alt,
    value,
    ref,
    minlength,
    maxlength,
    placeholder,
    doFocus,
    autocomplete,
    onChange,
    onIconClick
}: IInput) => {
    return (
        <StyledInputContainer
            iconPositionLeft={iconPositionLeft !== undefined ? iconPositionLeft : false}>
            {icon && (
                <StyledIconBox onClick={onIconClick}>
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
                type={type}
                value={value}
            />
        </StyledInputContainer>
    );
};

export default Input;
