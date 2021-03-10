import React from "react";
import { Link } from "react-router-dom";
import { IMenu } from "./types";
//styles components
import {
    StyledDiv,
    StyledLink,
    StyledLi,
    StyledMenu,
    StyledUl,
    StyledUserImg,
    StyledUserName
} from "./styles";
//images
import UserPic from "../../img/user-avatar.png";

const Menu: React.FC<IMenu> = ({ isOpen, handleClick }: IMenu) => {
    return (
        <StyledMenu isOpen={isOpen}>
            <StyledDiv>
                <StyledUserImg alt="profile image" src={UserPic} />
                <StyledUserName>Sebastian Gonzales</StyledUserName>
            </StyledDiv>
            <StyledUl>
                <StyledLi>
                    <Link onClick={handleClick} to="/">
                        Match
                    </Link>
                </StyledLi>
                <StyledLi>
                    <Link onClick={handleClick} to="/">
                        Dar en adopción
                    </Link>
                </StyledLi>
                <StyledLi>
                    <Link onClick={handleClick} to="/">
                        Mensajes
                    </Link>
                </StyledLi>
                <StyledLi>
                    <Link onClick={handleClick} to="/">
                        Favoritos para adoptar
                    </Link>
                </StyledLi>
                <StyledLi>
                    <Link onClick={handleClick} to="/">
                        Configuración
                    </Link>
                </StyledLi>
            </StyledUl>
            <StyledLink>
                <Link onClick={handleClick} to="/">
                    Salir
                </Link>
            </StyledLink>
        </StyledMenu>
    );
};

export default Menu;
