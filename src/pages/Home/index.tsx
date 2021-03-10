import React, { ReactElement } from "react";

// Styled-components
import { StyledHome, StyledHeader, StyledMain, StyledImg, StyledH1 } from "./styles";

// Components
import Logo from "../../img/Logo.svg";
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
        <StyledHome>
            <StyledHeader>
                <StyledImg alt="Logo" src={Logo} />
                <StyledH1>Encuentra a tu compañero ideal</StyledH1>
            </StyledHeader>
            <StyledMain>
                <Button handleClick={handleGoToMovilAuth} variant={PRIMARY}>
                    Ingresar
                </Button>
                <Button handleClick={handleGoToRegister} variant={SECONDARY}>
                    Registrate
                </Button>
            </StyledMain>
        </StyledHome>
    );
};

export default LoginMain;
