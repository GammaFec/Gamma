import styled from "styled-components";
import { fontSizes, theme } from "../../common/styles/index";

const StyledHome = styled.section`
    font-family: ${theme.fontPrimary};
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 69px 16px;
`;

const StyledContSup = styled.header`
    max-width: 250px;
    text-align: center;
    box-sizing: border-box;
    width: 80vw;
`;

const StyledContInf = styled.div`
    box-sizing: border-box;
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

export { StyledHome, StyledContSup, StyledContInf, StyledImg, StyledH1 };
