import styled from "styled-components";
import { colors, fonts, fontSizes } from "../../../common/styles";
import { StyledButton } from "../../Button/styles";

export const StyledContainer = styled.div`
    width: 340px;
    margin: 113px auto auto auto;
    font-family: ${fonts.poppins};
    & h3 {
        margin: 0;
        text-align: center;
        font-size: ${fontSizes.font20};
    }

    & p {
        font-size: 11px;
        text-align: center;
        color: ${colors.lighDarkGray};
        transform: translateY(-3px);
    }
    & svg {
        transform: translate(124px, 44px);
    }
`;

export const StyledButtonContinue = styled(StyledButton)`
    margin: 24px auto;
    display: block;
    width: 320px;
`;

export const StyledSpan = styled.span`
    color: ${colors.lighDarkGray};
    font-weight: 700;
`;
