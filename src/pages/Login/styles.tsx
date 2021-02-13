import styled from "styled-components";

import { fontSizes, theme } from "../../common/styles/index";

const StyledMainWrapper = styled.main`
    font-family: ${theme.fontPrimary};
    margin: auto;
    padding: 4rem 1rem 0px;
    text-align: center;
    max-width: 500px;
`;

const StyledP = styled.p`
    font-size: ${fontSizes.font21};
    font-weight: bold;
    padding: 5px;
    width: 80%;
    margin: 1.5rem auto;
`;

export { StyledMainWrapper, StyledP };
