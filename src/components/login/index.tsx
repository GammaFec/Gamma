import React, { ReactElement } from "react";

// Styled-components
import { Container } from "./styles";

// Components
import Image from "./image";
import Message from "./message";
import Acces from "./acces";

const LoginMain = (): ReactElement => {
    return (
        <Container>
            <Image src={"https://www.imagen.com"} alt={"perro"} />
            <Message />
            <Acces />
        </Container>
    );
};

export default LoginMain;
