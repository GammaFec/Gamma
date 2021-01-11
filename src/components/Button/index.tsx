import React from "react";
import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

const Button: React.FunctionComponent<ButtonProps> = ({
    children,
    variant,
    styles
}: ButtonProps) => {
    return (
        <StyledButton variant={variant} styles={styles}>
            {children}
        </StyledButton>
    );
};

export default Button;
