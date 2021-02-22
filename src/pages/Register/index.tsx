import React, { useState } from "react";
import { StyledContainer } from "../Splash/styles";
import * as variantType from "../../common/constants";
import { InputIsValid } from "../../utils/InputValidation";
import { StyledInput, StyledButton, StyledTitle } from "./styles";
import { StyledInputContainer } from "../../components/Input/styles";

const index: React.FC = () => {
    const [username, setUsername] = useState({
        value: "",
        valid: false
    });

    const [password, setPassword] = useState({
        value: "",
        valid: false
    });

    const AccountInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue = event.target.value.trim();
        const vadidInput = InputIsValid(newValue, true);
        const newState = {
            ...username,
            value: newValue,
            valid: vadidInput
        };

        return setUsername(newState);
    };

    const PasswordInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue = event.target.value.trim();
        const vadidInput = InputIsValid(newValue);
        const newState = {
            ...password,
            value: newValue,
            valid: vadidInput
        };

        return setPassword(newState);
    };

    const submitHandler = (event: React.ChangeEvent<HTMLFormElement>): void =>
        event.preventDefault();

    const loginButtonClicked = (): void => {
        if (username.valid && password.valid) {
            //do something with the form Data
            console.log("clicked!!! The user and the password ARE valid");
        } else {
            return console.log("clicked!! The user OR the password IS NOT valid");
        }
    };
    return (
        <StyledContainer>
            <div>
                <StyledTitle>Registrate</StyledTitle>
                <form onSubmit={submitHandler}>
                    <StyledInputContainer>
                        <StyledInput id="name" name="name" placeholder="Username" type="text" />
                    </StyledInputContainer>
                    <StyledInputContainer>
                        <StyledInput
                            id="email"
                            name="email"
                            onChange={AccountInputHandler}
                            placeholder="Correo electronico"
                            type="email"
                            value={username.value}
                        />
                    </StyledInputContainer>
                    <StyledInputContainer>
                        <StyledInput
                            id="password"
                            name="password"
                            onChange={PasswordInputHandler}
                            placeholder="Contraseña"
                            type="password"
                            value={password.value}
                        />
                    </StyledInputContainer>
                    <StyledButton
                        onClick={(): void => loginButtonClicked()}
                        variant={variantType.PRIMARY}>
                        Registrarse
                    </StyledButton>
                </form>
            </div>
        </StyledContainer>
    );
};

export default index;
