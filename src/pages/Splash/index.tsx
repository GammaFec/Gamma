import React from "react";
import Logo from "../../img/Logo.svg";
import { StyledContainer, StyledImg, StyledParagraph } from "./styles";

const Splash: React.FunctionComponent = () => {
    return (
        <StyledContainer>
            <div>
                <StyledImg alt="Logo de adoptemos" src={Logo} />
                <StyledParagraph>Adogtemos</StyledParagraph>
            </div>
        </StyledContainer>
    );
};

export default Splash;
