import React from "react";
import Logo from "../img/Logo.jpg";
import { GlobalStyle, StyledImg, StyledParagraph } from "./Styles";

const Splash = () => {
    return (
        <>
            <GlobalStyle />
            <div>
                <StyledImg src={Logo} alt="Logo de adoptemos" />
                <StyledParagraph>Adogtemos</StyledParagraph>
            </div>
        </>
    );
};

export default Splash;
