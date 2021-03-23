import React from "react";
import { NavLink } from "react-router-dom";
import { IMenu } from "./types";
import menuOptions from "./const";
//Translate - i18next
import { useTranslation } from "react-i18next";
//styles components
import { StyledDiv, StyledMenu, StyledOptions, StyledUser } from "./styles";
//images
import UserPic from "../../assets/img/user-avatar.svg";
import Close from "../../assets/img/close-x.svg";

const Menu: React.FC<IMenu> = ({ isOpen, handleClick, userName, userType }: IMenu) => {
    const { t } = useTranslation();
    return (
        <StyledMenu isOpen={isOpen}>
            <StyledDiv>
                <img alt="" src={UserPic} />
                <StyledUser>
                    <h3>{userName}</h3>
                    <p>{userType}</p>
                </StyledUser>
                <button onClick={handleClick}>
                    <img alt={t("Menu:CloseAlt")} className="Close" src={Close} />
                </button>
            </StyledDiv>
            <StyledOptions>
                {menuOptions.map((option) => (
                    <li key={option.id}>
                        <NavLink to={option.route}>
                            <img alt="" src={option.image} />
                            {option.text}
                        </NavLink>
                    </li>
                ))}
            </StyledOptions>
        </StyledMenu>
    );
};

export default Menu;
