import React from "react";
import { StyledButton } from "./styles";
import { IButton } from "./types";

const Button: React.FC<IButton> = ({
    children,
    variant,
    styles,
    handleClick,
    className,
    disabled = false,
    isSmall = false
}: IButton) => {
    return (
        <StyledButton
            className={className}
            disabled={disabled}
            isSmall={isSmall}
            onClick={handleClick}
            styles={styles}
            variant={variant}>
            {children}
        </StyledButton>
    );
};

export default Button;
