import React, { ReactElement } from "react";

//Translate - i18next
import { useTranslation } from "react-i18next";

// Styled-components
import { StyledHome, StyledHeader, StyledMain, StyledImg, StyledH1 } from "./styles";

// Components
import Logo from "../../assets/img/Logo.svg";
import Button from "../../components/Button";
import { PRIMARY, SECONDARY } from "../../common/styles/constants";
import { useHistory } from "react-router-dom";

const LoginMain = (): ReactElement => {
    const history = useHistory();
    const { t } = useTranslation("Home");

    const handleGoToMovilAuth = (): void => {
        history.push("/movil-auth/:id");
    };

    const handleGoToLogin = (): void => {
        history.push("/login");
    };

    return (
        <StyledHome>
            <StyledHeader>
                <StyledImg alt={t("ImageAlt")} src={Logo} />
                <StyledH1>{t("Title")}</StyledH1>
            </StyledHeader>
            <StyledMain>
                <Button handleClick={handleGoToMovilAuth} variant={PRIMARY}>
                    {t("SignUp")}
                </Button>
                <Button handleClick={handleGoToLogin} variant={SECONDARY}>
                    {t("LogIn")}
                </Button>
            </StyledMain>
        </StyledHome>
    );
};

export default LoginMain;
