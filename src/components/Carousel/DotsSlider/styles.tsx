import styled from "styled-components";

const StyledDot = styled.button<{ active: boolean }>`
    margin-right: 1rem;
    height: 25px;
    width: 25px;
    border-radius: 15px;
    margin: 0 1rem;
    background-color: ${({ active }) => (active ? "blue" : "grey")};
    transition: ${({ active }) => (active ? "2s" : "1s")} ease;
    cursor: pointer;
`;

const StyledUl = styled.ul`
    width: 100%;
    padding: 0;
`;

export { StyledDot, StyledUl };
