import styled from "styled-components";
import { fontSizes, theme } from "../../common/styles/variables";

export const StyledContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledImg = styled.img`
    width: 200px;
    height: 140px;
    display: block;
    margin: auto;
`;

export const StyledParagraph = styled.p`
    font-family: ${theme.fontPrimary};
    text-align: center;
    margin-top: 30px;
    font-size: ${fontSizes.font24};
    font-weight: 900;
`;
