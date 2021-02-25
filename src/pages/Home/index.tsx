import React, { ReactElement } from "react";

//Translate - i18next
import i18next from "i18next";

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
            <Image alt={i18next.t("HomeScreen:ImageAlt")} src="https://www.imagen.com" />
            <h1>{i18next.t("HomeScreen:Title")}</h1>
            <p>{i18next.t("HomeScreen:Paragraph")}</p>
            <div>
                <Button onClick={handleGoToMovilAuth} variant={PRIMARY}>
                    {i18next.t("HomeScreen:SignUp")}
                </Button>
                <Button onClick={handleGoToRegister} variant={SECONDARY}>
                    {i18next.t("HomeScreen:LogIn")}
                </Button>
            </div>
        </StyledContainer>
    );
};

export default LoginMain;
