import React from "react";
import { StyledInput, StyledContain, StyledTitle, StyledButton, StyledContainer } from "./styles";

const index = () => {
    return (
        <StyledContainer>
            <div>
                <StyledTitle>Registrarse</StyledTitle>
                <StyledContain>
                    <StyledInput name="name" placeholder="Username" type="text"></StyledInput>
                </StyledContain>
                <StyledContain>
                    <StyledInput
                        name="email"
                        placeholder="Correo electronico"
                        type="email"></StyledInput>
                </StyledContain>
                <StyledContain>
                    <StyledInput
                        name="password"
                        placeholder="Contraseña"
                        type="password"></StyledInput>
                </StyledContain>
                <StyledButton>Registrarse</StyledButton>
            </div>
        </StyledContainer>
    );
};

export default index;
