import React from "react";

//Translate - i18next
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

//styled components
//images
import Logo from "../../assets/img/Logo.svg";
import MenuBtn from "../../assets/img/menu.svg";
import MsgBtn from "../../assets/img/message.svg";
import { PATHS } from "../../routes/paths";
import { StyledNav, StyledIcon } from "./styles";

const Nav: React.FC = () => {
    const history = useHistory();
    const { t } = useTranslation();

    const handleGoToSplash = (): void => {
        history.push(PATHS.Splash);
    };

    const handleGoToMessages = (): void => {
        history.push(PATHS.Messages);
    };

    return (
        <StyledNav>
            <StyledIcon alt={t("Nav:MenuAlt")} src={MenuBtn} />
            <StyledIcon alt={t("Nav:LogoAlt")} onClick={handleGoToSplash} src={Logo} />
            <StyledIcon alt={t("Nav:MessagesAlt")} onClick={handleGoToMessages} src={MsgBtn} />
        </StyledNav>
    );
};

export default Nav;
