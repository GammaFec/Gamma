import styled from "styled-components";
import { fontSizes } from "../../common/styles";

export const StyledMain = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100vw;
`;

export const StyledContainer = styled.div`
    text-align: center;
    padding: 1rem;
    max-width: 90%;
`;

export const StyledTitle = styled.h1`
    font-size: ${fontSizes.font21};
    line-height: 31.5px;
`;

export const StyledText = styled.p`
    line-height: 18px;
    font-size: ${fontSizes.font12};
`;
