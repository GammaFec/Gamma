import styled from "styled-components";
import { IInput } from "./types";
import { theme, fontSizes, colors } from "../../common/styles";

export const StyledInputContainer = styled.div`
    background-color: ${colors.lightGray};
    margin: 20px 0;
    width: 100%;
    box-sizing: border-box;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: ${colors.lightGray} solid 2px;
    border-radius: 7px;
    padding-left: 10px;
`;

export const StyledIconBox = styled.div`
    padding-left: 5px;
    border-right: 2px solid ${colors.gray};
`;

export const StyledImg = styled.img`
    display: block;
    width: auto;
    height: 19px;
    margin-right: 10px;
`;

export const StyledInput = styled.input<IInput>`
    background-color: ${colors.lightGray};
    color: ${colors.gray};
    font-size: ${fontSizes.font12};
    font-family: ${theme.fontPrimary};
    border: none;
    padding-left: 10px;
    width: 100%;
    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
        box-shadow: none;
        -webkit-box-shadow: 0 0 0px 1000px ${colors.lightGray} inset;
    }
    :focus {
        outline: none;
    }
`;
