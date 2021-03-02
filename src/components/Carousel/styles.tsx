import styled from "styled-components";
import { fonts } from "../../common/styles/index";

const StyledLi = styled.li<{ active: boolean }>`
    z-index: ${(props): string => (props.active ? "0" : "-10")};
    opacity: ${(props): string => (props.active ? "1" : "0")};
    transition: 0.5s cubic-bezier(0, 0.84, 0.81, 1.01);
    overflow: hidden;
    position: ${(props): string => (props.active ? "relative" : "absolute")};
    top: ${(props): string => (props.active ? "0" : "-30px")};

    list-style: none;
    width: 100%;

    & > img {
        width: 70%;
        max-width: 300px;
        height: auto;
        padding: 16px;
    }

    & > p {
        margin: 25px;
    }
`;

const StyledUl = styled.ul`
    display: flex;
    padding: 0 10px;
    height: 450px;
    font-family: ${fonts.roboto};

    @media (min-width: 400px) {
        height: 470px;
    } ;
`;

export { StyledLi, StyledUl };
