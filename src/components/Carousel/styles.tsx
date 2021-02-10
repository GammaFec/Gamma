import styled from "styled-components";

const StyledLi = styled.li<{ active: boolean }>`
    z-index: ${(props) => (props.active ? "10" : "-10")};
    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: 0.7s cubic-bezier(0, 0.84, 0.81, 1.01);
    overflow: hidden;

    list-style: none;
    width: ${(props) => (props.active ? "100%" : "0")};
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
//
//

const StyledUl = styled.ul`
    display: flex;
    padding: 0;
`;

export { StyledLi, StyledUl };
