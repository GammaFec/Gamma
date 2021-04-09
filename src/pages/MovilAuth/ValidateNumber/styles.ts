import styled from "styled-components";
import { colors, fontSizes, fonts } from "../../../common/styles";
import { StyledButton } from "../../Button/styles";
import Form from "../../Form";

export const StyledForm = styled(Form)`
    margin-top: 116px;
    text-align: center;
    font-family: ${fonts.poppins};
    button {
        margin: 1rem 0.25rem;
    }
    & h3 {
        font-size: ${fontSizes.font16};
        margin: 0;
        transform: translateY(2px);
    }
    & p {
        margin-top: 4px;
        font-size: 10px;
        font-weight: 300;
        & svg {
            transform: translate(1px, 5px);
        }
    }
`;
export const StyledHand = styled.div`
    svg {
        display: block;
        margin: auto;
        transform: translate(-5px, -6px);
        width: 74px;
    }
`;
export const StyledSub = styled.p``;

export const StyledFoot = styled.p`
    font-size: ${fontSizes.font10};
    margin-top: 4px;
    font-weight: 300;
    transform: translateY(-1px);
`;

export const StyledButtonContinue = styled(StyledButton)`
    font-size: ${fontSizes.font12};
    font-weight: 500;
    width: 253px;
    height: 42px;
    transform: translate(1px, 4px);
    font-family: ${fonts.poppins};
`;

export const StyledA = styled.a`
    color: ${colors.green};
    text-decoration: none;
    font-weight: 600;
`;

export const StyledSpan = styled.span`
    font-weight: 600;
`;