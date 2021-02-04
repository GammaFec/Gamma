import React from "react";
import { StyledInput, StyledImg, StyledInputContainer, StyledIconBox } from "./styles";
import { IInput } from "./types";

const Input: React.FunctionComponent<IInput> = ({
    type,
    name,
    id,
    icon,
    alt,
    minlength,
    maxlength,
    placeholder,
    onChange
}: IInput) => {
    return (
        <StyledInputContainer>
            {icon && (
                <StyledIconBox>
                    <StyledImg src={icon} alt={alt} />
                </StyledIconBox>
            )}
            <StyledInput
                type={type}
                name={name}
                id={id}
                minlength={minlength}
                maxlength={maxlength}
                placeholder={placeholder}
                onChange={onChange}
            />
        </StyledInputContainer>
    );
};

export default Input;
