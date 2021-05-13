import React from "react";
import { useTranslation } from "react-i18next";

import ProfileRoleContainer from "./ProfileRoleContainer";
import { StyledContainer, StyledMain, StyledText, StyledTitle } from "./styles";

const ChooseProfile: React.FC = (): JSX.Element => {
    const { t } = useTranslation();
    return (
        <StyledMain>
            <StyledContainer>
                <StyledTitle>{t("ChooseProfile:title")}</StyledTitle>
                <StyledText>{t("ChooseProfile:description")}</StyledText>
                <ProfileRoleContainer />
            </StyledContainer>
        </StyledMain>
    );
};

export default ChooseProfile;
