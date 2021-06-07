import styled from "styled-components";
import { colors, fontSizes, theme } from "../../../common/styles/variables";
import { StyledButton } from "../../../components/Button/styles";
import Form from "../../../components/Form";

export const StyledForm = styled(Form)`
    padding-top: 116px;
    margin: auto;
    font-family: ${theme.fontPrimary};
    width: 340px;
    min-height: 100vh;
    position: relative;
    box-sizing: border-box;

    button {
        margin: 16px 0 16px 47px;
    }

    & h3 {
        font-size: ${fontSizes.font16};
        margin: 0;

        & span {
            display: block;
        }
    }
    & > svg {
        position: absolute;
        bottom: 0px;
        left: 123px;
    }
`;

export const StyledSub = styled.p`
    margin-top: 4px;
    font-size: 10px;
    font-weight: 300;
`;

export const StyledFoot = styled.p`
    font-size: ${fontSizes.font10};
    margin-top: 4px;
    font-weight: 300;
`;

export const StyledButtonContinue = styled(StyledButton)`
    font-size: ${fontSizes.font12};
    font-weight: 500;
    width: 253px;
    height: 42px;
    font-family: ${theme.fontPrimary};
    border-radius: 4px;
`;

export const StyledA = styled.a`
    color: ${colors.green};
    text-decoration: none;
    font-weight: 600;
`;

export const StyledSpan = styled.span`
    font-weight: 600;
`;

export const StyledGoBack = styled.button`
    display: none;
`;
