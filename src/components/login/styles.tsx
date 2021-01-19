import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 375px;
    justify-items: center;
    justify-content: center;
`;

const ImageResonsive = styled.img`
    display: block;
    max-width: 100%;
`;

export { Container, ImageResonsive };
