import styled, { css } from "styled-components";
import { IModal } from "./types";
import { theme, fontSizes } from "../../common/styles/variables";

//Revisar posición del modal
// export const StyledModal = styled.div<{ isShown: boolean }>`
export const StyledModal = styled.div`
    position: fixed;
    top: 30%;
    left: 30%;
    align-items: center;
    font-size: ${fontSizes.font16};
    font-family: ${theme.fontPrimary};
    border-radius: 10px;
    flex-direction: column;
    line-height: 24px;
    justify-content: center;
    text-decoration: none;
    padding: 1rem;
    margin: 0.2rem;
    min-width: 243px;
    max-width: 70%;
    height: 200px;
    border: solid 1px red;
`;
//display: ${(props): string => (props.isShown ? "block" : "none")};
// export const StyledModal = styled.div`
//     position: fixed;
//     top: 30%;
//     left: 30%;
//     align-items: center;
//     font-size: ${fontSizes.font16};
//     font-family: ${theme.fontPrimary};
//     border-radius: 10px;
//     display: flex;
//     flex-direction: column;
//     line-height: 24px;
//     justify-content: center;
//     text-decoration: none;
//     padding: 1rem;
//     margin: 0.2rem;
//     min-width: 243px;
//     max-width: 70%;
//     height: 200px;
//     border: solid 1px red;
// `;

export const StyledModalHeader = styled.div<IModal>`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

export const StyledModalMain = styled.div<IModal>`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    padding: 0.5rem;
`;

export const StyledButtonsWrapper = styled.div<IModal>`
    display: flex;
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
