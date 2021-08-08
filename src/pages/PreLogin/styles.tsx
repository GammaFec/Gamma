import styled from "styled-components";
import { fontSizes, theme } from "../../common/styles/variables";

const StyledHome = styled.section`
    font-family: ${theme.fontPrimary};
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledHeader = styled.header`
    padding: 40px 50px;
    text-align: center;
    flex-grow: 2;
`;

const StyledMain = styled.div`
    flex-grow: 0.4;
    display: flex;
    flex-direction: column;
`;

const buttonStyles = `
    margin-bottom: 20px;
`;

const StyledImg = styled.img`
    width: 110.76px;
    margin-bottom: 8px;
`;

const StyledH1 = styled.h1`
    font-size: ${fontSizes.font21};
    font-weight: 600;
    line-height: 31.5px;
    letter-spacing: -0.44px;
`;

export { StyledHome, StyledHeader, StyledMain, StyledImg, StyledH1, buttonStyles };
