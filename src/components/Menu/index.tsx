import React from "react";
import { NavLink } from "react-router-dom";
import { IMenu } from "./types";
import { PATHS } from "../../routes/paths";
//Translate - i18next
import { useTranslation } from "react-i18next";
//styles components
import { StyledDiv, StyledLink, StyledMenu, StyledUl, StyledUser } from "./styles";
//images
import UserPic from "../../assets/img/user-avatar.png";
import Close from "../../assets/img/close-x.png";
import Heart from "../../assets/img/heart-filled.png";
import House from "../../assets/img/home-heart.png";
import Msg from "../../assets/img/bxs-message.png";
import Fav from "../../assets/img/favorite.png";
import Config from "../../assets/img/config.png";
import LogOut from "../../assets/img/close.png";

const Menu: React.FC<IMenu> = ({ isOpen, handleClick }: IMenu) => {
    const { t } = useTranslation();

    return (
        <StyledMenu isOpen={isOpen}>
            <StyledDiv>
                <img alt="" src={UserPic} />
                <StyledUser>
                    <h3>Sebastian Gonzales</h3>
                    <p>{t("Menu:UserType")}</p>
                </StyledUser>
                <button onClick={handleClick}>
                    <img alt={t("Menu:CloseAlt")} className="Close" src={Close} />
                </button>
            </StyledDiv>
            <StyledUl>
                <li>
                    <NavLink to={PATHS.Match}>
                        <img alt="" src={Heart} />
                        {t("Menu:Match")}
                    </NavLink>
                </li>
                <li>
                    <NavLink to={PATHS.GiveUp}>
                        <img alt="" src={House} />
                        {t("Menu:GiveUp")}
                    </NavLink>
                </li>
                <li>
                    <NavLink to={PATHS.Messages}>
                        <img alt="" src={Msg} />
                        {t("Menu:Msgs")}
                    </NavLink>
                </li>
                <li>
                    <NavLink to={PATHS.Favorites}>
                        <img alt="" src={Fav} />
                        {t("Menu:Fav")}
                    </NavLink>
                </li>
                <li>
                    <NavLink to={PATHS.Config}>
                        <img alt="" src={Config} />
                        {t("Menu:Config")}
                    </NavLink>
                </li>
            </StyledUl>
            <StyledLink>
                <NavLink to={PATHS.Login}>
                    <img alt="" src={LogOut} />
                    {t("Menu:LogOut")}
                </NavLink>
            </StyledLink>
        </StyledMenu>
    );
};

export default Menu;
