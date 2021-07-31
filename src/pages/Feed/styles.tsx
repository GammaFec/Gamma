import styled from "styled-components";

import { theme } from "../../common/styles/variables";

const StyledMainWrapper = styled.main`
    font-family: ${theme.fontPrimary};
    margin: auto;
    text-align: center;
    max-width: 500px;
    user-select: none;
    border: solid black 1px;
`;

const StyledHeader = styled.main`
    font-family: ${theme.fontPrimary};
    height: 50px;
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    max-width: 500px;
    user-select: none;
    border: solid red 1px;
`;

const StyledIconBox = styled.div`
    position: static;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 50px;
    cursor: pointer;
    flex-direction: row-reverse;
`;

const StyledImg = styled.img`
    display: block;
    transform: translate(-1px, -5px);
`;

export { StyledMainWrapper, StyledHeader, StyledIconBox, StyledImg };
