import React, { ReactElement } from "react";

// Styled-components
import { Container } from "./Styles";

// Components
import Image from "./Image";
import Message from "./Message";
import Acces from "./Acces";

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
