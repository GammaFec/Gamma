import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { InputIsValid } from "./utils";
import Logo from "../../img/Logo.svg";
import * as variantType from "../../common/constants";
import { StyledMainWrapper, StyledP } from "./styles";

const LoginPage: React.FC = () => {
    const [usernameObj, setUsernameObj] = useState({
        value: "",
        valid: false
    });

    const [passwordObj, setPasswordObj] = useState({
        value: "",
        valid: false
    });

    const AccountInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue = event.target.value.trim();
        const vadidInput = InputIsValid(newValue, true);
        const newState = {
            ...usernameObj,
            value: newValue,
            valid: vadidInput
        };

        return setUsernameObj(newState);
    };

    const PasswordInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue = event.target.value.trim();
        const vadidInput = InputIsValid(newValue);
        const newState = {
            ...passwordObj,
            value: newValue,
            valid: vadidInput
        };

        return setPasswordObj(newState);
    };

    const submitHandler = (event: React.ChangeEvent<HTMLFormElement>): void =>
        event.preventDefault();

    const loginButtonClicked = (): void => {
        if (usernameObj.valid && passwordObj.valid) {
            //do something with the form Data
            console.log("clicked!!! The user and the password ARE valid");
        } else {
            return console.log("clicked!! The user OR the password IS NOT valid");
        }
    };

    return (
        <StyledMainWrapper>
            <div>
                <img alt="logo" src={Logo}></img>
                <StyledP>Encuentra tu compañero ideal</StyledP>
            </div>
            <form onSubmit={submitHandler}>
                <Input
                    id="LoginUser"
                    name="LoginUser"
                    onChange={AccountInputHandler}
                    placeholder="Ingresa Tu Cuenta"
                    type="text"
                    value={usernameObj.value}
                />
                <Input
                    id="LoginPassword"
                    name="LoginPassword"
                    onChange={PasswordInputHandler}
                    placeholder="Contraseña"
                    type="password"
                    value={passwordObj.value}
                />
                <Button
                    handleClick={(): void => loginButtonClicked()}
                    variant={variantType.PRIMARY}>
                    Ingresar
                </Button>
            </form>
        </StyledMainWrapper>
    );
};

export default LoginPage;
