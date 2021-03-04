import styled from "styled-components";
import { theme, fontSizes } from "../../common/styles/index";

const StyledLi = styled.li<{ active: boolean }>`
    z-index: ${(props): string => (props.active ? "0" : "-10")};
    opacity: ${(props): string => (props.active ? "1" : "0")};
    transition: 0.5s cubic-bezier(0, 0.84, 0.81, 1.01);
    overflow: hidden;
    position: ${(props): string => (props.active ? "relative" : "absolute")};
    top: ${(props): string => (props.active ? "0" : "-30px")};

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
    padding: 0 10px;
    height: 435px;
    font-family: ${theme.fontPrimary};

    @media (min-width: 400px) {
        height: 470px;
    } ;
`;

export { StyledLi, StyledUl };
