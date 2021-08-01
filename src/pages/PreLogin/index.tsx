import React, { ReactElement } from "react";

//Translate - i18next
import { useTranslation } from "react-i18next";

// Styled-components
import { StyledHome, StyledHeader, StyledMain, StyledImg, StyledH1, buttonStyles } from "./styles";

// Components
import Logo from "../../assets/img/Logo.svg";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import { PRIMARY, SECONDARY } from "../../common/styles/constants";
import { useHistory } from "react-router-dom";
import { PATHS } from "../../routes/paths";

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
        <Layout>
            <StyledHome>
                <StyledHeader>
                    <StyledImg alt={t("PreLogin:ImageAlt")} src={Logo} />
                    <StyledH1>{t("PreLogin:Title")}</StyledH1>
                </StyledHeader>
                <StyledMain>
                    <Button handleClick={handleLogIn} styles={buttonStyles} variant={PRIMARY}>
                        {t("PreLogin:LogIn")}
                    </Button>
                    <Button handleClick={handleRegister} styles={buttonStyles} variant={SECONDARY}>
                        {t("PreLogin:SignUp")}
                    </Button>
                </StyledMain>
            </StyledHome>
        </Layout>
    );
};

export default PreLogin;
