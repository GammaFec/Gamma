import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

// image
import dog from "../../assets/dog.png";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 360px;
  justify-content: center;
  background-color: #e8edf3;
  background-image: url(${dog});
  background-repeat: no-repeat;
  background-position: 55% 200px;
`;

const Title = styled.div`
  text-align: center;
`;

const Image = styled.div``;

const LoginMain = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/loginuser");
  };

  return (
    <Container>
      <Title>
        <h1>Petlove</h1>
        <p>Encuentra tu mascota!</p>
      </Title>
      <div>
        <button onClick={handleClick}>Ingresar</button>
        <button>Registrate</button>
      </div>
      <Image></Image>
    </Container>
  );
};

export default LoginMain;
