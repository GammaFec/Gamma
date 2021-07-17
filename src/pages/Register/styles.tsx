import styled from "styled-components";

import { fontSizes, theme } from "../../common/styles/variables";

const StyledMainWrapper = styled.main`
    font-family: ${theme.fontPrimary};
    margin: auto;
    padding: 20px 20px 0px;
    text-align: left;
    max-width: 500px;
    user-select: none;
`;

const StyledP = styled.p`
    font-size: ${fontSizes.font21};
    font-weight: bold;
    padding: 8px 0;
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

const StyledImg = styled.img`
    transform: scale(0.6);
    display: block;
    margin: 0 0.5rem 0 auto;
    padding: 0 0 44px 0;
`;

export { StyledMainWrapper, StyledP, StyledForm, StyledImg };
