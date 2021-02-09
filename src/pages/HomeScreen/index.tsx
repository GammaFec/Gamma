import React, { ReactElement } from "react";

// Styled-components
import { StyledContainer } from "./styles";

// Components
import ContainerLoginSignUp from "./ContainerLoginSignUp/index";
import Image from "../../components/Image/index";

const LoginMain = (): ReactElement => {
    return (
        <StyledContainer>
            <Image src="https://www.imagen.com" alt="imagen del perrx gatx" />
            <h1>Hola</h1>
            <p>parrafo</p>
            <ContainerLoginSignUp />
        </StyledContainer>
    );
};

export default LoginMain;
