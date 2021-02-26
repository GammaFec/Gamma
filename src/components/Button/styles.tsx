import styled, { css } from "styled-components";
import { IButton } from "./types";
import { theme, fontSizes } from "../../common/styles";

export const StyledButton = styled.button<IButton>`
    font-size: ${fontSizes.font10};
    font-family: ${theme.fontPrimary};
    border-radius: 10px;
    outline-style: none;
    text-align: center;
    text-decoration: none;
    padding: 0.7rem 3rem;
    margin: 0.2rem;
    min-width: 243px;
    height: 48px;
    cursor: pointer;
    ${({ variant }) => variants[variant]}
    ${({ styles }) => styles}
     
      &:hover {
        opacity: 0.6;
    }
`;

export const variants = {
    primary: css`
        background-color: ${theme.colorPrimary};
        border: ${theme.colorPrimary} solid 2px;
        color: ${theme.colorWhite};
    `,
    secondary: css`
        background-color: ${theme.colorWhite};
        border: ${theme.colorSecondary} solid 2px;
        color: ${theme.colorSecondary};
    `
};
