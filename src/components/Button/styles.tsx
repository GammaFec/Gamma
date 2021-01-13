import styled, { css } from "styled-components";
import { IButton } from "./types";
import { theme, fontSizes, colors } from "../../common/styles";

export const StyledButton = styled.button<IButton>`
    font-size: ${fontSizes.font10};
    font-family: ${theme.fontPrimary};
    color: ${colors.darkGray};
    border-radius: 2rem;
    text-align: center;
    text-decoration: none;
    padding: 0.7rem 3rem;
    margin: 0.2rem;
    width: 10rem;
    cursor: pointer;
    &:hover {
        opacity: 0.6;
    }
    ${({ variant }) => variants[variant]}
    ${({ styles }) => styles}
`;

export const variants = {
    primary: css`
        background-color: ${theme.colorPrimary};
        border: ${theme.colorPrimary} solid 3px;
    `,
    secondary: css`
        background-color: ${theme.colorSecondary};
        border: ${theme.colorPrimary} solid 3px;
    `
};
