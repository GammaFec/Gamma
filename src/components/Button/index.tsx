import React from "react";
import { StyledButton } from "./styles";
import { IButton } from "./types";

const Button: React.FunctionComponent<IButton> = ({
    children,
    variant,
    styles,
    onClick
}: IButton) => {
    return (
        <StyledButton onClick={onClick} variant={variant} styles={styles}>
            {children}
        </StyledButton>
    );
};

export default Button;
