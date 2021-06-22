import styled, { css } from "styled-components";
import { IModal } from "./types";
import { theme, fontSizes } from "../../common/styles/variables";

export const StyledModal = styled.div<IModal>`
    align-items: center;
    font-size: ${fontSizes.font16};
    font-family: ${theme.fontPrimary};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    line-height: 24px;
    justify-content: center;
    text-decoration: none;
    padding: 0.7rem 3rem;
    margin: 0.2rem;
    min-width: 243px;
    height: 480px;
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
