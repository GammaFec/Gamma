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

    const handleClick = (): void => setIsOpen(!isOpen);

    return (
        <StyledNav>
            <StyledIcon alt="Menu button" onClick={handleClick} src={MenuBtn} />
            <Menu handleClick={handleClick} isOpen={isOpen} />
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
