import React, { ReactElement } from "react";

//Translate - i18next
import { useTranslation } from "react-i18next";

// Styled-components
import { StyledHome, StyledHeader, StyledMain, StyledImg, StyledH1 } from "./styles";

// Components
import Logo from "../../img/Logo.svg";
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
        <StyledHome>
            <StyledHeader>
                <StyledImg alt={t("Home:ImageAlt")} src={Logo} />
                <StyledH1>{t("Home:Title")}</StyledH1>
            </StyledHeader>
            <StyledMain>
                <Button handleClick={handleGoToMovilAuth} variant={PRIMARY}>
                    {t("Home:SignUp")}
                </Button>
                <Button handleClick={handleGoToRegister} variant={SECONDARY}>
                    {t("Home:LogIn")}
                </Button>
            </StyledMain>
        </StyledHome>
    );
};

export default LoginMain;
