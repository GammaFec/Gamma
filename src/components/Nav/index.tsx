import React from "react";
import { Link } from "react-router-dom";
//styled components
import { StyledNav, StyledIcon } from "./styles";
//images
import Logo from "../../img/Logo.svg";
import MenuBtn from "../../img/gg_menu-left.png";
import MsgBtn from "../../img/bx-message.png";

const Nav: React.FC = () => {
    return (
        <StyledNav>
            <StyledIcon alt="Menu button" src={MenuBtn} />
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
