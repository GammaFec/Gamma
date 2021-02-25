import React from "react";
import i18next from "i18next";
import Logo from "../../img/Logo.svg";
import { StyledContainer, StyledImg, StyledParagraph } from "./styles";

const Splash: React.FC = () => {
    return (
        <StyledContainer>
            <div>
                <StyledImg alt={i18next.t("Splash:ImageAlt")} src={Logo} />
                <StyledParagraph>Adogtemos</StyledParagraph>
            </div>
        </StyledContainer>
    );
};

export default Splash;
