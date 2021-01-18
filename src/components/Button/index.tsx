import React from "react";
import { StyledButton } from "./styles";
import { IButton } from "./types";

const Button: React.FunctionComponent<IButton> = ({ children, variant, styles }: IButton) => {
    return (
        <StyledButton variant={variant} styles={styles}>
            {children}
        </StyledButton>
    );
};

export default Button;
