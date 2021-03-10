import styled from "styled-components";
import { IMenu } from "./types";
import { theme, fontSizes, colors } from "../../common/styles";

export const StyledMenu = styled.nav<IMenu>`
    box-sizing: border-box;
    background-color: ${colors.orange};
    padding: 34px 43px;
    font-family: ${theme.fontPrimary};
    font-size: ${fontSizes.font16};
    color: ${colors.white};
    width: 100%;
    position: fixed;
    z-index: 100;
    height: calc(100vh - 64px);
    top: 64px;
    right: 0;
    transform: ${(props): string => (props.isOpen ? "translateX(0)" : "translateX(-100%)")};
    transition: 1s cubic-bezier(0.03, 0.95, 0.11, 1.09);

    a {
        text-decoration: none;
        color: ${colors.white};
        font-size: ${fontSizes.font14};
    }
`;

export const StyledDiv = styled.div`
    box-sizing: border-box;
    display: flex;
`;

export const StyledUserImg = styled.img`
    width: 68px;
    border-radius: 50%;
    margin-right: 10px;
    margin-bottom: 31px;
`;

export const StyledUserName = styled.h3`
    font-family: ${theme.fontPrimary};
    font-weight: 400;
    font-size: ${fontSizes.font16};
`;

export const StyledUl = styled.ul`
    box-sizing: border-box;
    margin: 31px 19px;
    text-align: left;
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
`;

export const StyledLi = styled.li`
    margin: 15px 0;
`;

export const StyledLink = styled.span`
    box-sizing: border-box;
    position: absolute;
    bottom: 77px;
    left: 62px;
`;
