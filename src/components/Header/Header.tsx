import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
    children: ReactNode;
    className?: string;
}

const StyledHeader = styled.header`
    height: 10vh;
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
`;

const Header: React.FC<Props> = ({ children, className }: Props) => {
    return (
        <StyledHeader className={className}>
            <nav>{children}</nav>
        </StyledHeader>
    );
};

export default Header;
