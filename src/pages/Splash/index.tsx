import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { PATHS } from "../../routes/paths";
import Logo from "../../assets/img/Logo.svg";
import { StyledContainer, StyledImg, StyledParagraph } from "./styles";

const Splash: React.FC = () => {
    const { t } = useTranslation();
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push(PATHS.Home);
        }, 3000);
    }, []);

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
