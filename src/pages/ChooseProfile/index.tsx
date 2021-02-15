import React from "react";

import ProfileRoleContainer from "./ProfileRoleContainer";
import { StyledContainer, StyledMain, StyledText } from "./styles";

const ChooseProfile: React.FC = (): JSX.Element => {
    return (
        <StyledMain>
            <StyledContainer>
                <h1>Elige tu perfil deseado</h1>
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
