import styled from "styled-components";
import { colors } from "../../common/styles";

export const StyledNav = styled.header`
    box-sizing: border-box;
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
