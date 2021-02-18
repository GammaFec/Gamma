import React, { ReactElement } from "react";

// Styled-components
import { StyledContainer } from "./styles";

// Components
import Image from "../../components/Image/index";
import Button from "../../components/Button";
import { PRIMARY, SECONDARY } from "../../common/constants";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next, { TFunction } from "i18next";

const LoginMain = (): ReactElement => {
    const history = useHistory();
    const { t } = useTranslation();

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
                <Button onClick={handleGoToMovilAuth} variant={PRIMARY}>
                    {t("HomeScreen:Login")}
                </Button>
                <Button onClick={handleGoToRegister} variant={SECONDARY}>
                    {t("HomeScreen:SignUp")}
                </Button>
            </div>

            <button onClick={(): Promise<TFunction> => i18next.changeLanguage("es")} type="button">
                español
            </button>
            <button onClick={(): Promise<TFunction> => i18next.changeLanguage("en")} type="button">
                ingles
            </button>
        </StyledContainer>
    );
};

export default LoginMain;
