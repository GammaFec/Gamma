import styled from "styled-components";
import { theme, fontSizes, colors } from "../../common/styles/variables";

export const StyledMenu = styled.nav<{ isOpen: boolean }>`
    box-sizing: border-box;
    background-color: ${colors.orange};
    padding: 34px 43px;
    font-family: ${theme.fontPrimary};
    font-size: ${fontSizes.font16};
    color: ${colors.white};
    width: 100%;
    position: fixed;
    z-index: 1;
    height: 100vh;
    top: 0;
    right: 0;
    display: ${(props): string => (props.isOpen ? "block" : "none")};

    a {
        text-decoration: none;
        color: ${colors.white};
        font-size: ${fontSizes.font14};
        display: flex;
        align-items: center;
    }
`;

export const StyledDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 50px;

    img {
        width: 68px;
        height: 68px;
        margin-right: 10px;
    }

    button {
        width: 50px;
        background-color: transparent;
        position: absolute;
        top: 13px;
        right: -20px;
        border: none;
        border-radius: 50%;
        outline: none;
        cursor: pointer;

        img {
            width: 24px;
            height: 24px;
        }
    }
`;

export const StyledUser = styled.div`
    font-family: ${theme.fontPrimary};

    h3 {
        font-weight: 400;
        font-size: ${fontSizes.font16};
        margin-block-start: 0;
        margin-block-end: 0;
    }

    p {
        font-weight: 300;
        font-size: ${fontSizes.font11};
        margin-block-start: 0;
        margin-block-end: 0;
    }
`;

export const StyledOptions = styled.ul`
    box-sizing: border-box;
    margin: 31px 19px;
    text-align: left;
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;

    li {
        margin: 35px 0;

        img {
            width: 21px;
            margin-right: 12px;
        }
    }
    li:last-of-type {
        margin-top: 75px;
    }
`;
