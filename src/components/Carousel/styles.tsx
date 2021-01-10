import styled from "styled-components";

const StyledButton = styled.button`
    position: fixed;
    bottom: 0%;
    z-index: 100;
    width: 100%;
    height: 55px;
    padding: 0;
    left: 0rem;
    cursor: pointer;
`;

const StyledSection = styled.section<{ active: boolean }>`
    z-index: ${(props) => (props.active ? "10" : "-10")};
    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: ${(props) => (props.active ? "2s" : "1s")} ease;
    position: absolute;

    width: 100%;
    height: 30rem;
    top: 0;

    & > img {
        width: 70%;
        max-width: 300px;
        height: auto;
        padding: 1rem;
    }

    & > p {
        margin: 2rem 2rem;
    }
`;

export { StyledButton, StyledSection };
