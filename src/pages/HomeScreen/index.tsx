import React, { ReactElement } from "react";

// Styled-components
import { StyledContainer } from "./styles";

// Components
import Image from "../../components/Image/index";
import Button from "../../components/Button";
import { PRIMARY, SECONDARY } from "../../common/constants";
import { useHistory } from "react-router-dom";

const LoginMain = (): ReactElement => {
    const history = useHistory();

    const handleGoToMovilAuth = () => {
        history.push("/movil-auth/useId");
    };

    const handleGoToRegister = () => {
        history.push("/Register");
    };

    return (
        <StyledContainer>
            <Image src="https://www.imagen.com" alt="imagen del perrx gatx" />
            <h1>Hola</h1>
            <p>parrafo</p>
            <div>
                <Button variant={PRIMARY} onClick={handleGoToMovilAuth}>
                    Login
                </Button>
                <Button variant={SECONDARY} onClick={handleGoToRegister}>
                    Sign up
                </Button>
            </div>
        </StyledContainer>
    );
};

export default LoginMain;
