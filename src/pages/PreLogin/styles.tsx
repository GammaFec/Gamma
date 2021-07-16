import styled from "styled-components";

import { fontSizes, theme } from "../../common/styles/variables";

const StyledHome = styled.section`
    font-family: ${theme.fontPrimary};
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 69px 16px;
`;

const StyledHeader = styled.header`
    max-width: 250px;
    text-align: center;
    width: 80vw;
`;

const StyledMain = styled.div`
    width: 80vw;
    height: 148px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const StyledImg = styled.img`
    width: 110.76px;
`;

const StyledH1 = styled.h1`
    font-size: ${fontSizes.font21};
    font-weight: 600;
    line-height: 31.5px;
    letter-spacing: -0.44px;
`;

export { StyledHome, StyledHeader, StyledMain, StyledImg, StyledH1 };
