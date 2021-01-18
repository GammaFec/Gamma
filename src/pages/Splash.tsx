import React from "react";
import Logo from "../img/Logo.jpg";
import { StyledContainer, StyledImg, StyledParagraph } from "./Styles";

const Splash = () => {
    return (
        <StyledContainer>
            <div>
                <StyledImg src={Logo} alt="Logo de adoptemos" />
                <StyledParagraph>Adogtemos</StyledParagraph>
            </div>
        </StyledContainer>
    );
};

export default Splash;
