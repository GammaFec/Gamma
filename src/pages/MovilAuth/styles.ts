import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const StyledMain = styled.main`
    align-self: flex-end;
    display: grid;
    justify-content: center;
    & > * {
        margin-bottom: 1.5rem;
    }
`;
