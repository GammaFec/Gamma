import React, { ReactElement } from "react";

// Styled-components
import { StyledContainer } from "./styles";

// Components
import Image from "./image";
import Message from "./message";
import Access from "./access";

const LoginMain = (): ReactElement => {
    return (
        <StyledContainer>
            <Image src="https://www.imagen.com" alt="imagen del perrx gatx" />
            <Message />
            <Access />
        </StyledContainer>
    );
};

export default LoginMain;
