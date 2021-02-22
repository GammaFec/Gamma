import React from "react";
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
    className,
    onChange
}: IInput) => {
    return (
        <StyledInputContainer>
            {icon && (
                <StyledIconBox>
                    <StyledImg alt={alt} src={icon} />
                </StyledIconBox>
            )}
            <StyledInput
                className={className}
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
