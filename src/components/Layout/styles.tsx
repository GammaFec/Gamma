import styled from "styled-components";

export const StyledLayout = styled.div`
    max-width: 425px;
    min-height: 100vh;
    margin: auto;
    padding: 25px;
    display: flex;
    flex-direction: column;
`;

export const StyledLayoutChildren = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;
