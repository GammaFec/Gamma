import styled from "styled-components";
import { colors } from "../../../common/styles/index";

const StyledDot = styled.button<{ active: boolean }>`
    padding: 0;
    height: ${({ active }) => (active ? "8px" : "12px")};
    width: ${({ active }) => (active ? "30px" : "14px")};
    border-radius: 10px;
    border: none;
    margin: 0 20px;
    background-color: ${({ active }) => (active ? colors.orange : colors.lightOrange)};
    transition: ${({ active }) => (active ? "2s" : "1s")} ease;
    cursor: pointer;
`;

const StyledUl = styled.ul`
    width: 100%;
    padding: 0;
`;

export { StyledDot, StyledUl };
