import styled from "styled-components";

import { fonts, fontSizes } from "../../common/styles";

export const StyledContainer = styled.div`
    width: 320px;
    min-height: 81px;
    margin: auto;
    font-family: ${fonts.poppins};

    & h1 {
        font-size: ${fontSizes.font20};
    }
`;
