import styled from "styled-components";

const StyledParagraph = styled.p`
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
`;

const StyledList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
`;

const StyledItemList = styled.li`
    margin: 0 1rem;
    font-size: 1.5rem;
`;

const StyledSvg = styled.svg`
    width: 25px;
    height: 25px;
    border-radius: 100%;
    padding: 3px;
    fill: white;
`;

export { StyledParagraph, StyledList, StyledItemList, StyledSvg };
