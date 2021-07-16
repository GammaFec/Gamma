import React from "react";

import { useTranslation } from "react-i18next";

import ProfileRoleContainer from "./ProfileRoleContainer";
import { StyledContainer, StyledMain, StyledText, StyledTitle, StyledBlueDog } from "./styles";

const ChooseProfile: React.FC = (): JSX.Element => {
    const { t } = useTranslation("ChooseProfile");
    return (
        <StyledMain>
            <StyledContainer>
                <StyledTitle>{t("title")}</StyledTitle>
                <StyledText>{t("description")}</StyledText>
                <ProfileRoleContainer />
            </StyledContainer>
            <StyledBlueDog />
        </StyledMain>
    );
};

export default ChooseProfile;
