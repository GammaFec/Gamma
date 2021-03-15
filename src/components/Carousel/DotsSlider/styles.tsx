import styled from "styled-components";
import { colors } from "../../../common/styles/index";

const StyledDot = styled.button<{ active: boolean }>`
    padding: 0;
    height: ${({ active }): string => (active ? "4px" : "8px")};
    width: ${({ active }): string => (active ? "20px" : "8px")};
    border-radius: 10px;
    border: none;
    margin: auto 3px;
    background-color: ${({ active }): string => (active ? colors.orange : colors.lightOrange)};
    transition: ${({ active }): string => (active ? "2s" : "1s")} ease;
    cursor: pointer;
`;

const StyledUl = styled.ul`
    padding: 0;
    display: flex;
    justify-content: center;
    margin-top: 24px;
`;

export { StyledDot, StyledUl };
