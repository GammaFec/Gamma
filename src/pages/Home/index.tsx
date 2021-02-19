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

    const handleGoToMovilAuth = (): void => {
        history.push("/movil-auth/useId");
    };

    const handleGoToRegister = (): void => {
        history.push("/Register");
    };

    return (
        <StyledContainer>
            <Image alt="imagen del perrx gatx" src="https://www.imagen.com" />
            <h1>Hola</h1>
            <p>parrafo</p>
            <div>
                <Button handleClick={handleGoToMovilAuth} variant={PRIMARY}>
                    Login
                </Button>
                <Button handleClick={handleGoToRegister} variant={SECONDARY}>
                    Sign up
                </Button>
            </div>
        </StyledContainer>
    );
};

export default LoginMain;
