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
        font-size: ${fontSizes.font17};
    }

    & p {
        font-size: ${fontSizes.font09};
        text-align: center;
        color: ${colors.lighDarkGray};
        transform: translateY(-3px);
    }
`;

export const StyledButtonContinue = styled(StyledButton)`
    margin: 0 auto;
`;

export const StyledSpan = styled.span`
    color: ${colors.lighDarkGray};
    font-weight: 700;
`;
