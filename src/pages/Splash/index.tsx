import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/img/Logo.svg";
import { StyledContainer, StyledImg, StyledParagraph } from "./styles";

const Splash: React.FC = () => {
    const { t } = useTranslation();
    return (
        <StyledContainer>
            <div>
                <StyledImg alt={t("Splash:ImageAlt")} src={Logo} />
                <StyledParagraph>Adogtemos</StyledParagraph>
            </div>
        </StyledContainer>
    );
};

export default Splash;
