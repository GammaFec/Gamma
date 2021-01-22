import styled from "styled-components";

const StyledContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 375px;
    justify-items: center;
    justify-content: center;
`;

const StyledImageResponsive = styled.img`
    display: block;
    max-width: 100%;
`;

export { StyledContainer, StyledImageResponsive };
