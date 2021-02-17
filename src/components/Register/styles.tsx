import styled from "styled-components";
import { theme, fontSizes, colors } from "../../common/styles";

export const StyledContainer = styled.div`
    width: 100%;
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledContain = styled.div`
    background-color: ${colors.lightGray};
    margin: 1.25rem 0;
    min-width: 320px;
    height: 50px;
    display: flex;
    border: ${colors.gray} solid 2px;
    border-radius: 7px;
    padding-left: 20px;
`;

export const StyledTitle = styled.h1`
    margin-top: 20px;
    margin-bottom: 50px;
`;

export const StyledInput = styled.input`
    background-color: ${colors.lightGray};
    font-size: ${fontSizes.font12};
    font-family: ${theme.fontPrimary};
    border: none;
    padding-left: 0.6rem;
    width: 100%;
    outline: none;
    box-shadow: none;
`;

export const StyledButton = styled.button`
    margin-left: 50%;
    margin-top: 20px;
    transform: translateX(-50%);
    border: none;
    background-color: #ff7b28;
    color: white;
    padding: 15px;
    min-width: 243px;
    border-radius: 5px;
`;
