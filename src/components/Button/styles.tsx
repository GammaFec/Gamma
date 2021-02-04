import styled, { css } from "styled-components";
import { IButton } from "./types";
import { theme, fontSizes, colors } from "../../common/styles";

export const StyledButton = styled.button<IButton>`
    font-size: ${fontSizes.font10};
    font-family: ${theme.fontPrimary};
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    padding: 0.7rem 3rem;
    margin: 0.2rem;
    width: 243px;
    height: 48px;
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
        border: ${theme.colorPrimary} solid 2px;
        color: white;
    `,
    secondary: css`
        background-color: ${theme.colorSecondary};
        border: ${theme.ghostButton} solid 2px;
        color: ${theme.ghostButton};
    `
};
