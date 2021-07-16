import styled from "styled-components";

import { theme, fontSizes } from "../../common/styles/variables";
import Button from "../Button";

const StyledLiContainer = styled.section<{ active: boolean }>`
    z-index: ${(props): string => (props.active ? "0" : "-10")};
    opacity: ${(props): string => (props.active ? "1" : "0")};
    position: ${(props): string => (props.active ? "relative" : "absolute")};
    top: ${(props): string => (props.active ? "0" : "-30px")};
    transition: 0.5s cubic-bezier(0, 0.84, 0.81, 1.01);

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const StyledLi = styled.li`
    overflow: hidden;
    list-style: none;
    width: 100%;
    letter-spacing: -0.44px;

    & > h2 {
        font-size: ${fontSizes.font21};
        margin: 0;
        margin-bottom: 21px;
    }

    & > img {
        width: 70%;
        max-width: 202px;
        height: auto;
        padding: 16px;
        margin-bottom: 11px;
    }

    & > p {
        font-size: ${fontSizes.font12};
        max-width: 272px;
        margin: auto;
    }
`;

const StyledUl = styled.ul`
    display: flex;
    height: 435px;
    font-family: ${theme.fontPrimary};
`;

const StyledButton = styled(Button)`
    width: fit-content;
    margin-right: auto;
    margin-left: auto;
`;

export { StyledLi, StyledUl, StyledLiContainer, StyledButton };
