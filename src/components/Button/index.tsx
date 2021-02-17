import React from "react";
import { StyledButton } from "./styles";
import { IButton } from "./types";

const Button: React.FunctionComponent<IButton> = ({
    children,
    variant,
    styles,
    handleClick
}: IButton) => {
    return (
        <StyledButton onClick={handleClick} styles={styles} variant={variant}>
            {children}
        </StyledButton>
    );
};

export default Button;
