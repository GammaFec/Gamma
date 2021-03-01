import React from "react";

import ProfileRoleContainer from "./ProfileRoleContainer";
import { StyledContainer, StyledMain, StyledText, StyledTitle } from "./styles";

const ChooseProfile: React.FC = (): JSX.Element => {
    return (
        <StyledMain>
            <StyledContainer>
                <StyledTitle>Elige tu perfil deseado</StyledTitle>
                <StyledText>
                    En PetMatch nos importas mucho, por eso selecciona que papel deseas tener en la
                    aplicación para brindarte una experiencia única.
                </StyledText>
                <ProfileRoleContainer />
            </StyledContainer>
        </StyledMain>
    );
};

export default ChooseProfile;
