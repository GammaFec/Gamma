import React from "react";

import { StyledHeader } from "./styles";
import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = ({ children, className }: HeaderProps) => {
    return (
        <StyledHeader className={className}>
            <nav>{children}</nav>
        </StyledHeader>
    );
};

export default Header;
