import React from "react";

import ProfileRoleContainer from "../../components/ProfileRoleContainer";
import { ChooseContainer, Container, Text } from "./styles";

const ChooseProfile: React.FC = (): JSX.Element => {
    return (
        <Container>
            <ChooseContainer>
                <h1>Elige tu perfil deseado</h1>
                <Text>
                    En PetMatch nos importas mucho, por eso selecciona que papel deseas tener en la
                    aplicación para brindarte una experiencia única.
                </Text>
                <ProfileRoleContainer />
            </ChooseContainer>
        </Container>
    );
};

export default ChooseProfile;
