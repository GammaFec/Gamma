import React from "react";

import { StyledHeader } from "./styles";
import iHeader from "./types";

const Header: React.FC<iHeader> = ({ children, className }: iHeader) => {
    return (
        <StyledHeader className={className}>
            <nav>{children}</nav>
        </StyledHeader>
    );
};

export default Header;
