import styled from "styled-components";

import { fontSizes, theme } from "../../common/styles/index";

const StyledMainWrapper = styled.main`
    font-family: ${theme.fontPrimary};
    margin: auto;
    padding: 64px 20px 0px;
    text-align: center;
    max-width: 500px;
`;

const StyledP = styled.p`
    font-size: ${fontSizes.font21};
    font-weight: bold;
    padding: 8px 0;
    width: 80%;
    margin: auto;
    letter-spacing: -0.44px;
`;

const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    div {
        margin: 21px 0 9px 0;

        input {
            letter-spacing: -0.44px;
        }
    }

    button {
        margin-top: 30px;
    }
`;

export { StyledMainWrapper, StyledP, StyledForm };
