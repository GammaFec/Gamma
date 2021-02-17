import React from "react";
import { StyledButton } from "./styles";
import { IButton } from "./types";

const Button: React.FC<IButton> = ({ children, variant, styles }: IButton) => {
    return (
        <StyledButton styles={styles} variant={variant}>
            {children}
        </StyledButton>
    );
};

export default Button;
