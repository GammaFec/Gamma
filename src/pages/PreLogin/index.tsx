import React, { ReactElement } from "react";

import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import Logo from "../../assets/img/Logo.svg";
import { PRIMARY, SECONDARY } from "../../common/styles/constants";
import Button from "../../components/Button";
import { PATHS } from "../../routes/paths";
import { StyledHome, StyledHeader, StyledMain, StyledImg, StyledH1 } from "./styles";

const PreLogin = (): ReactElement => {
    const history = useHistory();
    const { t } = useTranslation();

    const handleLogIn = (): void => {
        history.push(PATHS.Login);
    };

    const handleRegister = (): void => {
        history.push(PATHS.Register);
    };

    return (
        <StyledHome>
            <StyledHeader>
                <StyledImg alt={t("PreLogin:ImageAlt")} src={Logo} />
                <StyledH1>{t("PreLogin:Title")}</StyledH1>
            </StyledHeader>
            <StyledMain>
                <Button handleClick={handleLogIn} variant={PRIMARY}>
                    {t("PreLogin:LogIn")}
                </Button>
                <Button handleClick={handleRegister} variant={SECONDARY}>
                    {t("PreLogin:SignUp")}
                </Button>
            </StyledMain>
        </StyledHome>
    );
};

export default PreLogin;
