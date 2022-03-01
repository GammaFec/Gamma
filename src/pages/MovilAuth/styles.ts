import styled from "styled-components";

export const StyledContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
`;

export const StyledMain = styled.main`
    align-self: flex-end;
    display: grid;
    justify-content: center;
    & > * {
        margin-bottom: 1.5rem;
    }
`;
