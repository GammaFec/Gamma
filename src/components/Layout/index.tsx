import React from "react";
import { StyledLayout, StyledLayoutChildren } from "./styles";
import { ILayout } from "./types";

const Layout: React.FC<ILayout> = ({ children }: ILayout) => {
    return (
        <StyledLayout>
            <StyledLayoutChildren>{children}</StyledLayoutChildren>
        </StyledLayout>
    );
};

export default Layout;
