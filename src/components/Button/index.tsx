import React from "react";
import { StyledButton } from "./styles";
import { IButton } from "./types";

const Button: React.FC<IButton> = ({
    children = "Click",
    variant = "primary",
    styles,
    handleClick,
    className,
    disabled = false
}: IButton) => {
    return (
        <StyledButton
            className={className}
            disabled={disabled}
            onClick={handleClick}
            styles={styles}
            variant={variant}>
            {children}
        </StyledButton>
    );
};

export default Button;
