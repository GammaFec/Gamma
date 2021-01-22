import React, { ReactElement } from "react";

// Styled-components
import { StyledContainer } from "./styles";

// Components
import Image from "./image";
import Message from "./message";
import Acces from "./acces";

const LoginMain = (): ReactElement => {
    return (
        <StyledContainer>
            <Image src="https://www.imagen.com" alt="imagen del perrx gatx" />
            <Message />
            <Acces />
        </StyledContainer>
    );
};

export default LoginMain;
