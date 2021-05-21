import styled from "styled-components";
import { fontSizes, theme } from "../../common/styles/variables";

export const StyledContainer = styled.div`
    width: 320px;
    min-height: 81px;
    margin: auto;
    font-family: ${theme.fontPrimary};

    & h1 {
        font-size: ${fontSizes.font20};
    }
`;
