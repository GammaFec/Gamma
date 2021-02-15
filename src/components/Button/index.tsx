import React from "react";
import { StyledButton } from "./styles";
import { IButton } from "./types";

const Button: React.FunctionComponent<IButton> = ({
    children,
    variant,
    styles,
    onClick,
    className,
    disabled = false
}: IButton) => {
    return (
        <StyledButton
            className={className}
            disabled={disabled}
            onClick={onClick}
            styles={styles}
            variant={variant}>
            {children}
        </StyledButton>
    );
};

export default Button;
