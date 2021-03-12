import React from "react";
import { Link } from "react-router-dom";
//Translate - i18next
import { useTranslation } from "react-i18next";
//styled components
import { StyledNav, StyledIcon } from "./styles";
//images
import Logo from "../../assets/img/Logo.svg";
import MenuBtn from "../../assets/img/gg_menu-left.png";
import MsgBtn from "../../assets/img/bx-message.png";

const Nav: React.FC = () => {
    const { t } = useTranslation();

    return (
        <StyledNav>
            <StyledIcon alt={t("Nav:MenuAlt")} src={MenuBtn} />
            <Link to="/">
                <StyledIcon alt={t("Nav:LogoAlt")} src={Logo} />
            </Link>
            <Link to="/">
                <StyledIcon alt={t("Nav:MessagesAlt")} src={MsgBtn} />
            </Link>
        </StyledNav>
    );
};

export default Nav;
