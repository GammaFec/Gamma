import React from "react";
import { useTranslation } from "react-i18next";
import ProfileRoleContainer from "./ProfileRoleContainer";
import { StyledContainer, StyledMain, StyledText, StyledTitle } from "./styles";
import rolesData from "./ProfileRoleContainer/rolesData.json";

const ChooseProfile: React.FC = (): JSX.Element => {
    const { t } = useTranslation("ChooseProfile");
    return (
        <StyledMain>
            <StyledContainer>
                <StyledTitle>{t("title")}</StyledTitle>
                <StyledText>{t("description")}</StyledText>
                <ProfileRoleContainer Data={rolesData} handleSubmit={(): void => alert("submit")} />
            </StyledContainer>
        </StyledMain>
    );
};

export default ChooseProfile;
