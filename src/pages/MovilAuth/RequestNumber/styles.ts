import styled from "styled-components";
import { colors, fonts, fontSizes } from "../../../common/styles/variables";
import { StyledButton } from "../../../components/Button/styles";

export const StyledContainer = styled.div`
    width: 340px;
    min-height: 100vh;
    font-family: ${fonts.poppins};
    position: relative;
    margin: auto;

    & h3 {
        margin: 0;
        text-align: center;
        font-size: ${fontSizes.font17};
        padding-top: 113px;

        & span {
            display: block;
        }
    }

    & p {
        font-size: ${fontSizes.font09};
        text-align: center;
        color: ${colors.lighDarkGray};
    }

    & > svg {
        position: absolute;
        left: 139px;
        bottom: 0px;
    }
`;

export const StyledButtonContinue = styled(StyledButton)`
    font-family: ${fonts.poppins};
    font-size: ${fontSizes.font12};
    margin: 17px auto;
    min-width: 254px;
    height: 42px;
    margin-top: 17px;
    border-radius: 6px;
`;

export const StyledSpan = styled.span`
    color: ${colors.lighDarkGray};
    font-weight: 700;
`;
