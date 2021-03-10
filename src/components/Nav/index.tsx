import React, { useState } from "react";
import { Link } from "react-router-dom";
//styled components
import { StyledNav, StyledIcon } from "./styles";
//images
import Logo from "../../img/Logo.svg";
import MenuBtn from "../../img/gg_menu-left.png";
import MsgBtn from "../../img/bx-message.png";
//components
import Menu from "../Menu/index";

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <StyledNav>
            <StyledIcon alt="Menu button" onClick={(): void => setIsOpen(!isOpen)} src={MenuBtn} />
            <Menu isOpen={isOpen} />
            <Link to="/">
                <StyledIcon alt="Logo" src={Logo} />
            </Link>
            <Link to="/">
                <StyledIcon alt="Messages" src={MsgBtn} />
            </Link>
        </StyledNav>
    );
};

export default Nav;
