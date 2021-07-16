import styled from "styled-components";

import { colors } from "../../common/styles/variables";

export const StyledNav = styled.header`
    background-color: ${colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 19px;
    width: 100vw;
`;

export const StyledIcon = styled.img`
    width: 30px;
    cursor: pointer;
`;
