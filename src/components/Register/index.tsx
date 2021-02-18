import React from "react";
import { StyledContainer } from "../../pages/Splash/styles";
import * as variantType from "../../common/constants/";
import { StyledInput, StyledButton, StyledTitle } from "./styles";
import { StyledInputContainer } from "../Input/styles";

const index: React.FC = () => {
    return (
        <StyledContainer>
            <div>
                <StyledTitle>Registrate</StyledTitle>
                <form>
                    <StyledInputContainer>
                        <StyledInput id="name" name="name" placeholder="Username" type="text" />
                    </StyledInputContainer>
                    <StyledInputContainer>
                        <StyledInput
                            id="email"
                            name="email"
                            placeholder="Correo electronico"
                            type="email"
                        />
                    </StyledInputContainer>
                    <StyledInputContainer>
                        <StyledInput
                            id="password"
                            name="password"
                            placeholder="Contraseña"
                            type="password"
                        />
                    </StyledInputContainer>
                    <StyledButton variant={variantType.PRIMARY}>Registrarse</StyledButton>
                </form>
            </div>
        </StyledContainer>
    );
};

export default index;
