import React, { ReactElement } from "react";

//Translate - i18next
import { useTranslation } from "react-i18next";

// Styled-components
import { StyledContainer } from "./styles";

// Components
import Image from "../../components/Image/index";
import Button from "../../components/Button";
import { PRIMARY, SECONDARY } from "../../common/constants";
import { useHistory } from "react-router-dom";

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
            <Image alt={t("HomeScreen:ImageAlt")} src="https://www.imagen.com" />
            <h1>{t("HomeScreen:Title")}</h1>
            <p>{t("HomeScreen:Paragraph")}</p>
            <div>
                <Button onClick={handleGoToMovilAuth} variant={PRIMARY}>
                    {t("HomeScreen:SignUp")}
                </Button>
                <Button onClick={handleGoToRegister} variant={SECONDARY}>
                    {t("HomeScreen:LogIn")}
                </Button>
            </div>
        </StyledContainer>
    );
};

export default LoginMain;
