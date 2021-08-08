import styled from "styled-components";
import { colors, fonts, fontSizes } from "../../../common/styles/variables";

export const StyledContainer = styled.div`
    width: 340px;
    font-family: ${fonts.poppins};
    position: relative;
    margin: auto;

    & h3 {
        margin-top: 113px;
        text-align: center;
        font-size: ${fontSizes.font17};

        & span {
            display: block;
        }
    }

    & p {
        margin-top: 9px;
        font-size: ${fontSizes.font09};
        text-align: center;
        color: ${colors.lighDarkGray};
    }

    & > svg {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }

    .react-tel-input .special-label {
        display: none;
    }
    .arrow {
        display: none;
    }
`;

export const StyledSpan = styled.span`
    color: ${colors.lighDarkGray};
    font-weight: 700;
`;

export const buttonStyles = `
    margin: 17px auto; 
    width: 254px;
    height: 42px; 
    margin-top: 17px; 
    border-radius: 6px; 
    font-size: ${fontSizes.font12};
`;
